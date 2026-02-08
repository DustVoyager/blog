"use client";

import { useEffect } from "react";
import { trackContentView } from "@/lib/gtm";

interface ContentViewTrackerProps {
  contentId: string;
  contentType?: string;
}

export default function ContentViewTracker({
  contentId,
  contentType = "work",
}: ContentViewTrackerProps) {
  useEffect(() => {
    trackContentView(contentId, contentType);
  }, [contentId, contentType]);

  return null;
}
