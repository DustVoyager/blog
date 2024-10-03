/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        // public 폴더 안의 모든 파일에 대해 Cache-Control 헤더 적용
        source: "/:all*(png|jpg|jpeg|svg|gif)",
        headers: [
          {
            key: "Cache-Control",
            value: "no-store, max-age=0, must-revalidate",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
