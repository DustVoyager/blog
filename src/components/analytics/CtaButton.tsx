"use client";

import { trackCtaClick } from "@/lib/gtm";

interface CtaButtonProps {
  ctaType: "contact" | "brochure_download" | "apply";
  href?: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
}

export default function CtaButton({
  ctaType,
  href,
  children,
  variant = "primary",
}: CtaButtonProps) {
  const handleClick = () => {
    trackCtaClick(ctaType, {
      button_text: typeof children === "string" ? children : "",
      timestamp: new Date().toISOString(),
    });

    if (href) {
      window.location.href = href;
    }
  };

  const variantStyles = {
    primary:
      "bg-indigo-600 text-white hover:bg-indigo-700 border-indigo-600",
    secondary:
      "bg-green-600 text-white hover:bg-green-700 border-green-600",
    outline:
      "bg-transparent text-indigo-600 hover:bg-indigo-50 border-indigo-600",
  };

  return (
    <button
      onClick={handleClick}
      className={`inline-flex items-center gap-2 rounded-lg px-6 py-3 font-semibold border-2 transition-all duration-200 ${variantStyles[variant]}`}
    >
      {children}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
          clipRule="evenodd"
        />
      </svg>
    </button>
  );
}
