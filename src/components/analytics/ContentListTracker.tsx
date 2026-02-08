"use client";

import { useEffect } from "react";
import { trackContentListImpression } from "@/lib/gtm";

interface ContentListTrackerProps {
  listId: string;
  itemIds: string[];
}

export default function ContentListTracker({
  listId,
  itemIds,
}: ContentListTrackerProps) {
  useEffect(() => {
    if (itemIds.length > 0) {
      trackContentListImpression(listId, itemIds);
    }
  }, [listId, itemIds]);

  return null;
}
