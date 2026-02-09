"use client";

import { useEffect, useRef } from "react";
import { trackComponentImpression } from "@/lib/gtm";

interface ComponentImpressionTrackerProps {
  componentId: string;
  children: React.ReactNode;
  threshold?: number; // 얼마나 보여야 노출로 간주할지 (0.0 ~ 1.0)
  additionalData?: Record<string, any>; // 추가 데이터 (예: 추천 타입, 위치 등)
  trackOnce?: boolean; // true면 한 번만 추적, false면 매번 추적
}

export default function ComponentImpressionTracker({
  componentId,
  children,
  threshold = 0.5, // 기본값: 50% 이상 보이면 추적
  additionalData = {},
  trackOnce = true, // 기본값: 한 번만 추적
}: ComponentImpressionTrackerProps) {
  const componentRef = useRef<HTMLDivElement>(null);
  const hasTracked = useRef(false);

  useEffect(() => {
    const component = componentRef.current;
    if (!component) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // 컴포넌트가 화면에 보이고, 아직 추적하지 않았거나 매번 추적 모드인 경우
          if (entry.isIntersecting) {
            if (!trackOnce || !hasTracked.current) {
              trackComponentImpression(componentId, additionalData);
              hasTracked.current = true;

              // 한 번만 추적하는 경우 observer 해제 (성능 최적화)
              if (trackOnce) {
                observer.disconnect();
              }
            }
          } else {
            // trackOnce가 false인 경우, 화면에서 벗어났다가 다시 들어오면 재추적 가능
            if (!trackOnce) {
              hasTracked.current = false;
            }
          }
        });
      },
      {
        threshold: threshold,
        rootMargin: "0px",
      }
    );

    observer.observe(component);

    return () => {
      observer.disconnect();
    };
  }, [componentId, threshold, additionalData, trackOnce]);

  return <div ref={componentRef}>{children}</div>;
}
