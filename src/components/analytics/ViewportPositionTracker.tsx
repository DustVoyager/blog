"use client";

import { useEffect, useRef } from "react";
import { trackViewportPosition } from "@/lib/gtm";

interface ViewportPositionTrackerProps {
  componentId: string;
  children: React.ReactNode;
  additionalData?: Record<string, any>;
  foldHeight?: number; // "접힘선" 높이 (기본: 화면 높이)
}

export default function ViewportPositionTracker({
  componentId,
  children,
  additionalData = {},
  foldHeight, // 지정하지 않으면 window.innerHeight 사용
}: ViewportPositionTrackerProps) {
  const componentRef = useRef<HTMLDivElement>(null);
  const hasTracked = useRef(false);

  useEffect(() => {
    const component = componentRef.current;
    if (!component || hasTracked.current) return;

    // 페이지 로드 완료 후 위치 확인
    const checkPosition = () => {
      const rect = component.getBoundingClientRect();
      const fold = foldHeight || window.innerHeight;

      // 컴포넌트의 상단이 접힘선보다 위에 있으면 above_fold
      // 아래에 있으면 below_fold
      const position = rect.top < fold ? "above_fold" : "below_fold";

      // additionalData에서 position 필드 제거 (충돌 방지)
      const { position: _, ...safeAdditionalData } = additionalData as any;

      trackViewportPosition(componentId, position, {
        ...safeAdditionalData,
        component_top: Math.round(rect.top), // 컴포넌트 상단 위치
        viewport_height: window.innerHeight, // 화면 높이
        fold_line: fold, // 접힘선 위치
      });

      hasTracked.current = true;
    };

    // 페이지 로드가 완전히 완료된 후 측정 (이미지 등 로딩 완료 대기)
    if (document.readyState === "complete") {
      checkPosition();
    } else {
      window.addEventListener("load", checkPosition);
      return () => window.removeEventListener("load", checkPosition);
    }
  }, [componentId, additionalData, foldHeight]);

  return <div ref={componentRef}>{children}</div>;
}
