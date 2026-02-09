"use client";

import { useEffect, useRef } from "react";
import { trackSectionDwell } from "@/lib/gtm";

interface SectionDwellTrackerProps {
  sectionId: string;
  children: React.ReactNode;
  threshold?: number; // 얼마나 보여야 체류로 간주할지 (0.0 ~ 1.0)
  minDwellTime?: number; // 최소 체류 시간 (초). 이보다 짧으면 이벤트 미발생
}

export default function SectionDwellTracker({
  sectionId,
  children,
  threshold = 0.5, // 기본값: 50% 이상 보일 때
  minDwellTime = 1, // 기본값: 1초 이상 머물러야 추적
}: SectionDwellTrackerProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const startTimeRef = useRef<number | null>(null);
  const isVisibleRef = useRef(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // 섹션이 보이기 시작 → 시간 측정 시작
            if (!isVisibleRef.current) {
              startTimeRef.current = Date.now();
              isVisibleRef.current = true;
            }
          } else {
            // 섹션이 화면에서 벗어남 → 체류 시간 계산 및 전송
            if (isVisibleRef.current && startTimeRef.current) {
              const dwellTime = (Date.now() - startTimeRef.current) / 1000; // 초 단위

              // 최소 체류 시간 이상이면 이벤트 전송
              if (dwellTime >= minDwellTime) {
                trackSectionDwell(sectionId, Math.round(dwellTime));
              }

              startTimeRef.current = null;
              isVisibleRef.current = false;
            }
          }
        });
      },
      {
        threshold: threshold,
        rootMargin: "0px",
      }
    );

    observer.observe(section);

    // 페이지를 떠날 때도 체류 시간 전송 (사용자가 페이지를 닫거나 이동할 때)
    const handleBeforeUnload = () => {
      if (isVisibleRef.current && startTimeRef.current) {
        const dwellTime = (Date.now() - startTimeRef.current) / 1000;
        if (dwellTime >= minDwellTime) {
          trackSectionDwell(sectionId, Math.round(dwellTime));
        }
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      observer.disconnect();
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [sectionId, threshold, minDwellTime]);

  return <div ref={sectionRef}>{children}</div>;
}
