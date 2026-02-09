"use client";

import { trackClick } from "@/lib/gtm";

interface TrackableLinkProps {
  href: string;
  trackId: string;
  elementType: string;
  position?: number;
  children: React.ReactNode;
  className?: string;
}

export default function TrackableLink({
  href,
  trackId,
  elementType,
  position,
  children,
  className = "",
}: TrackableLinkProps) {
  const handleClick = () => {
    trackClick(trackId, elementType, position);
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className={`text-blue-600 hover:text-blue-800 underline ${className}`}
    >
      {children}
    </a>
  );
}
