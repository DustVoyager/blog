"use client";

import SectionViewTracker from "@/components/analytics/SectionViewTracker";
import ContentViewTracker from "@/components/analytics/ContentViewTracker";

export default function SectionTestPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-12">
      <ContentViewTracker contentId="section-test" contentType="work" />

      <h1 className="text-4xl font-bold mb-8">섹션 노출 추적 테스트</h1>

      <div className="mb-8 p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-200">
        <p className="text-sm">
          <strong>테스트 방법:</strong> 페이지를 천천히 스크롤하면서 각 섹션이 화면에 들어올 때
          콘솔에서 <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">window.dataLayer</code>를 확인하세요.
        </p>
      </div>

      {/* 섹션 1 */}
      <SectionViewTracker sectionId="hero">
        <section className="min-h-screen p-8 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-lg mb-8 flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">🚀 Hero Section</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              이 섹션이 화면의 50% 이상 보이면 <code>section_view</code> 이벤트가 발생합니다.
            </p>
            <p className="mt-4 text-sm text-gray-500">
              section_id: "hero"
            </p>
          </div>
        </section>
      </SectionViewTracker>

      {/* 섹션 2 */}
      <SectionViewTracker sectionId="features">
        <section className="min-h-screen p-8 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-lg mb-8 flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">✨ Features Section</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              스크롤해서 이 섹션이 보이면 또 다른 <code>section_view</code> 이벤트가 발생합니다.
            </p>
            <p className="mt-4 text-sm text-gray-500">
              section_id: "features"
            </p>
          </div>
        </section>
      </SectionViewTracker>

      {/* 섹션 3 */}
      <SectionViewTracker sectionId="pricing">
        <section className="min-h-screen p-8 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-lg mb-8 flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">💰 Pricing Section</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              가격 섹션 노출 추적
            </p>
            <p className="mt-4 text-sm text-gray-500">
              section_id: "pricing"
            </p>
          </div>
        </section>
      </SectionViewTracker>

      {/* 섹션 4 */}
      <SectionViewTracker sectionId="faq">
        <section className="min-h-screen p-8 bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 rounded-lg mb-8 flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">❓ FAQ Section</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              자주 묻는 질문 섹션 노출 추적
            </p>
            <p className="mt-4 text-sm text-gray-500">
              section_id: "faq"
            </p>
          </div>
        </section>
      </SectionViewTracker>

      {/* 섹션 5 */}
      <SectionViewTracker sectionId="contact" threshold={0.3}>
        <section className="min-h-screen p-8 bg-gradient-to-br from-gray-50 to-slate-50 dark:from-gray-900/20 dark:to-slate-900/20 rounded-lg mb-8 flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">📧 Contact Section</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              이 섹션은 threshold=0.3 (30% 보이면 추적)
            </p>
            <p className="mt-4 text-sm text-gray-500">
              section_id: "contact"
            </p>
          </div>
        </section>
      </SectionViewTracker>

      {/* 이벤트 확인 가이드 */}
      <div className="p-6 bg-gray-50 dark:bg-gray-900/20 rounded-lg border border-gray-200 mb-8">
        <h3 className="text-xl font-bold mb-4">📊 확인 방법</h3>
        <div className="space-y-2 text-sm">
          <p>1. 브라우저 콘솔을 엽니다 (F12)</p>
          <p>2. 다음 명령어를 입력하세요:</p>
          <div className="bg-gray-900 text-green-400 p-4 rounded font-mono">
            <code>window.dataLayer.filter(e =&gt; e.event === 'section_view')</code>
          </div>
          <p className="mt-4">3. 페이지를 스크롤하면서 각 섹션이 보일 때마다 이벤트가 추가되는 것을 확인하세요.</p>
        </div>
      </div>

      {/* 예상 이벤트 */}
      <div className="p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200">
        <h3 className="text-xl font-bold mb-4">✅ 예상 이벤트 형식</h3>
        <pre className="bg-gray-900 text-green-400 p-4 rounded text-xs overflow-x-auto">
{`{
  "event": "section_view",
  "section_id": "hero",
  "client_ts": 1234567890,
  "page_url": "http://localhost:3000/section-test",
  "page_path": "/section-test",
  ...
}`}
        </pre>
      </div>
    </div>
  );
}
