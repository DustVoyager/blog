"use client";

import { useEffect, useRef } from "react";
import { trackSectionView } from "@/lib/gtm";

interface SectionViewTrackerProps {
  sectionId: string;
  children: React.ReactNode;
  threshold?: number; // 얼마나 보여야 추적할지 (0.0 ~ 1.0)
}

export default function SectionViewTracker({
  sectionId,
  children,
  threshold = 0.5, // 기본값: 50% 이상 보이면 추적
}: SectionViewTrackerProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const hasTracked = useRef(false); // 중복 추적 방지

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // 섹션이 threshold 이상 보이고, 아직 추적하지 않았다면
          if (entry.isIntersecting && !hasTracked.current) {
            trackSectionView(sectionId);
            hasTracked.current = true;

            // 한 번 추적했으면 observer 해제 (성능 최적화)
            observer.disconnect();
          }
        });
      },
      {
        threshold: threshold, // 섹션이 몇 % 보일 때 감지할지
        rootMargin: "0px", // 뷰포트 기준
      }
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
    };
  }, [sectionId, threshold]);

  return <div ref={sectionRef}>{children}</div>;
}
