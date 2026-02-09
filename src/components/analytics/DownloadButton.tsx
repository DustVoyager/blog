"use client";

import { trackDownloadClick, trackDownloadComplete } from "@/lib/gtm";

interface DownloadButtonProps {
  assetId: string;
  assetName: string;
  downloadUrl: string;
  children?: React.ReactNode;
}

export default function DownloadButton({
  assetId,
  assetName,
  downloadUrl,
  children,
}: DownloadButtonProps) {
  const handleDownload = async () => {
    // 다운로드 클릭 이벤트 추적
    trackDownloadClick(assetId, assetName);

    // 실제 다운로드 시뮬레이션
    try {
      const link = document.createElement("a");
      link.href = downloadUrl;
      link.download = assetName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // 다운로드 완료 이벤트 추적
      setTimeout(() => {
        trackDownloadComplete(assetId, assetName);
      }, 500);
    } catch (error) {
      console.error("Download failed:", error);
    }
  };

  return (
    <button
      onClick={handleDownload}
      className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-white font-semibold hover:bg-blue-700 transition-colors duration-200"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
          clipRule="evenodd"
        />
      </svg>
      {children || `${assetName} 다운로드`}
    </button>
  );
}
