"use client";

import DownloadButton from "@/components/analytics/DownloadButton";
import CtaButton from "@/components/analytics/CtaButton";
import TrackableLink from "@/components/analytics/TrackableLink";
import ContentViewTracker from "@/components/analytics/ContentViewTracker";

export default function GtmTestPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-12">
      <ContentViewTracker contentId="gtm-test" contentType="work" />

      <h1 className="text-4xl font-bold mb-8">GTM 이벤트 테스트 페이지</h1>

      <div className="space-y-8">
        {/* Download Buttons */}
        <section className="p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200">
          <h2 className="text-2xl font-bold mb-4">📥 다운로드 버튼 테스트</h2>
          <p className="mb-4 text-sm text-gray-700 dark:text-gray-300">
            브라우저 콘솔에서 <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">window.dataLayer</code>를 확인하세요.
          </p>
          <div className="space-y-4">
            <DownloadButton
              assetId="architecture-guide"
              assetName="Architecture_Guide.pdf"
              downloadUrl="/downloads/guide.pdf"
            />
            <DownloadButton
              assetId="lambda-template"
              assetName="Lambda_Template.zip"
              downloadUrl="/downloads/template.zip"
            />
          </div>
        </section>

        {/* CTA Buttons */}
        <section className="p-6 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200">
          <h2 className="text-2xl font-bold mb-4">🎯 CTA 버튼 테스트</h2>
          <div className="flex flex-wrap gap-4">
            <CtaButton ctaType="contact" variant="primary">
              문의하기
            </CtaButton>
            <CtaButton ctaType="apply" variant="secondary">
              신청하기
            </CtaButton>
            <CtaButton ctaType="brochure_download" variant="outline">
              브로슈어 다운로드
            </CtaButton>
          </div>
        </section>

        {/* Trackable Links */}
        <section className="p-6 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-200">
          <h2 className="text-2xl font-bold mb-4">🔗 링크 클릭 추적 테스트</h2>
          <div className="space-y-2">
            <div>
              <TrackableLink
                href="https://aws.amazon.com/opensearch-service/"
                trackId="aws-opensearch-docs"
                elementType="external_link"
                position={1}
              >
                AWS OpenSearch 공식 문서
              </TrackableLink>
            </div>
            <div>
              <TrackableLink
                href="https://opensearch.org/"
                trackId="opensearch-home"
                elementType="external_link"
                position={2}
              >
                OpenSearch 홈페이지
              </TrackableLink>
            </div>
          </div>
        </section>

        {/* DataLayer Viewer */}
        <section className="p-6 bg-gray-50 dark:bg-gray-900/20 rounded-lg border border-gray-200">
          <h2 className="text-2xl font-bold mb-4">📊 실시간 DataLayer 확인</h2>
          <p className="mb-4 text-sm">브라우저 콘솔을 열고 다음 명령어를 실행하세요:</p>
          <div className="bg-gray-900 text-green-400 p-4 rounded font-mono text-sm">
            <code>window.dataLayer</code>
          </div>
          <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
            또는 크롬 개발자 도구 &gt; Application &gt; Storage &gt; Data Layer에서 확인하세요.
          </p>
        </section>

        {/* Expected Events */}
        <section className="p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-200">
          <h2 className="text-2xl font-bold mb-4">✅ 예상되는 이벤트</h2>
          <div className="space-y-2 text-sm">
            <div className="font-mono bg-white dark:bg-gray-800 p-3 rounded">
              <strong>페이지 진입:</strong>
              <pre className="mt-2 text-xs overflow-x-auto">
{`{
  event: "content_view",
  content_id: "gtm-test",
  content_type: "work",
  client_ts: ...,
  page_url: ...,
  ...
}`}
              </pre>
            </div>
            <div className="font-mono bg-white dark:bg-gray-800 p-3 rounded">
              <strong>다운로드 클릭:</strong>
              <pre className="mt-2 text-xs overflow-x-auto">
{`{
  event: "download_click",
  asset_id: "architecture-guide",
  asset_name: "Architecture_Guide.pdf",
  ...
}`}
              </pre>
            </div>
            <div className="font-mono bg-white dark:bg-gray-800 p-3 rounded">
              <strong>CTA 클릭:</strong>
              <pre className="mt-2 text-xs overflow-x-auto">
{`{
  event: "cta_click",
  cta_type: "contact",
  button_text: "문의하기",
  ...
}`}
              </pre>
            </div>
            <div className="font-mono bg-white dark:bg-gray-800 p-3 rounded">
              <strong>링크 클릭:</strong>
              <pre className="mt-2 text-xs overflow-x-auto">
{`{
  event: "click",
  track_id: "aws-opensearch-docs",
  element_type: "external_link",
  position: 1,
  ...
}`}
              </pre>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
