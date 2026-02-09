"use client";

import SectionDwellTracker from "@/components/analytics/SectionDwellTracker";
import ContentViewTracker from "@/components/analytics/ContentViewTracker";

export default function DwellTestPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-12">
      <ContentViewTracker contentId="dwell-test" contentType="work" />

      <h1 className="text-4xl font-bold mb-8">섹션 체류 시간 추적 테스트</h1>

      <div className="mb-8 p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-200">
        <p className="text-sm mb-2">
          <strong>테스트 방법:</strong>
        </p>
        <ol className="text-sm space-y-1 list-decimal list-inside">
          <li>각 섹션에서 몇 초씩 머물러보세요</li>
          <li>스크롤해서 섹션을 벗어나면 <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">section_dwell</code> 이벤트 발생</li>
          <li>콘솔에서 <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">window.dataLayer</code> 확인</li>
          <li>최소 1초 이상 머물러야 이벤트 발생</li>
        </ol>
      </div>

      {/* 섹션 1 - 제품 소개 */}
      <SectionDwellTracker sectionId="product-intro" minDwellTime={2}>
        <section className="min-h-screen p-8 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-lg mb-8 flex items-center justify-center">
          <div className="text-center max-w-2xl">
            <h2 className="text-3xl font-bold mb-4">📱 제품 소개</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
              이 섹션에 2초 이상 머물렀다가 스크롤하면 체류 시간이 측정됩니다.
            </p>
            <p className="text-sm text-gray-500">
              section_id: "product-intro" | min: 2초
            </p>
            <div className="mt-8 p-4 bg-white dark:bg-gray-800 rounded-lg">
              <p className="text-sm">
                💡 여기서 잠시 머물러보세요. 몇 초 후 다음 섹션으로 스크롤하면 이벤트가 발생합니다.
              </p>
            </div>
          </div>
        </section>
      </SectionDwellTracker>

      {/* 섹션 2 - 기능 설명 */}
      <SectionDwellTracker sectionId="features" minDwellTime={3}>
        <section className="min-h-screen p-8 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-lg mb-8 flex items-center justify-center">
          <div className="text-center max-w-2xl">
            <h2 className="text-3xl font-bold mb-4">⚡ 주요 기능</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
              이 섹션은 최소 3초 체류가 필요합니다.
            </p>
            <p className="text-sm text-gray-500 mb-8">
              section_id: "features" | min: 3초
            </p>
            <div className="grid grid-cols-2 gap-4 text-left">
              <div className="p-4 bg-white dark:bg-gray-800 rounded-lg">
                <h3 className="font-bold mb-2">🚀 빠른 성능</h3>
                <p className="text-sm">초고속 처리</p>
              </div>
              <div className="p-4 bg-white dark:bg-gray-800 rounded-lg">
                <h3 className="font-bold mb-2">🔒 보안</h3>
                <p className="text-sm">강력한 암호화</p>
              </div>
              <div className="p-4 bg-white dark:bg-gray-800 rounded-lg">
                <h3 className="font-bold mb-2">📊 분석</h3>
                <p className="text-sm">실시간 대시보드</p>
              </div>
              <div className="p-4 bg-white dark:bg-gray-800 rounded-lg">
                <h3 className="font-bold mb-2">🌍 글로벌</h3>
                <p className="text-sm">다국어 지원</p>
              </div>
            </div>
          </div>
        </section>
      </SectionDwellTracker>

      {/* 섹션 3 - 가격 */}
      <SectionDwellTracker sectionId="pricing" minDwellTime={1}>
        <section className="min-h-screen p-8 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-lg mb-8 flex items-center justify-center">
          <div className="text-center max-w-2xl">
            <h2 className="text-3xl font-bold mb-4">💰 가격 정책</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
              가격 섹션 체류 시간 측정 (최소 1초)
            </p>
            <p className="text-sm text-gray-500 mb-8">
              section_id: "pricing" | min: 1초
            </p>
            <div className="flex gap-4 justify-center">
              <div className="p-6 bg-white dark:bg-gray-800 rounded-lg flex-1 max-w-xs">
                <h3 className="text-xl font-bold mb-2">스타터</h3>
                <p className="text-3xl font-bold mb-4">₩9,900<span className="text-sm font-normal">/월</span></p>
                <ul className="text-sm text-left space-y-2">
                  <li>✓ 기본 기능</li>
                  <li>✓ 1GB 저장공간</li>
                  <li>✓ 이메일 지원</li>
                </ul>
              </div>
              <div className="p-6 bg-indigo-600 text-white rounded-lg flex-1 max-w-xs">
                <h3 className="text-xl font-bold mb-2">프로</h3>
                <p className="text-3xl font-bold mb-4">₩29,900<span className="text-sm font-normal">/월</span></p>
                <ul className="text-sm text-left space-y-2">
                  <li>✓ 모든 기능</li>
                  <li>✓ 100GB 저장공간</li>
                  <li>✓ 24/7 지원</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </SectionDwellTracker>

      {/* 섹션 4 - FAQ */}
      <SectionDwellTracker sectionId="faq" minDwellTime={2}>
        <section className="min-h-screen p-8 bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 rounded-lg mb-8 flex items-center justify-center">
          <div className="text-center max-w-2xl">
            <h2 className="text-3xl font-bold mb-4">❓ 자주 묻는 질문</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
              FAQ 섹션 체류 시간 측정
            </p>
            <p className="text-sm text-gray-500 mb-8">
              section_id: "faq" | min: 2초
            </p>
            <div className="text-left space-y-4">
              <div className="p-4 bg-white dark:bg-gray-800 rounded-lg">
                <h3 className="font-bold mb-2">Q. 환불 정책은 어떻게 되나요?</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  A. 30일 이내 전액 환불이 가능합니다.
                </p>
              </div>
              <div className="p-4 bg-white dark:bg-gray-800 rounded-lg">
                <h3 className="font-bold mb-2">Q. 무료 체험이 가능한가요?</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  A. 14일 무료 체험을 제공합니다.
                </p>
              </div>
              <div className="p-4 bg-white dark:bg-gray-800 rounded-lg">
                <h3 className="font-bold mb-2">Q. 결제 수단은?</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  A. 신용카드, 계좌이체, PayPal을 지원합니다.
                </p>
              </div>
            </div>
          </div>
        </section>
      </SectionDwellTracker>

      {/* 이벤트 확인 가이드 */}
      <div className="p-6 bg-gray-50 dark:bg-gray-900/20 rounded-lg border border-gray-200 mb-8">
        <h3 className="text-xl font-bold mb-4">📊 확인 방법</h3>
        <div className="space-y-2 text-sm">
          <p>1. 브라우저 콘솔을 엽니다 (F12)</p>
          <p>2. 각 섹션에서 잠시 머물렀다가 스크롤하세요</p>
          <p>3. 다음 명령어로 체류 시간 이벤트 확인:</p>
          <div className="bg-gray-900 text-green-400 p-4 rounded font-mono">
            <code>window.dataLayer.filter(e =&gt; e.event === 'section_dwell')</code>
          </div>
          <p className="mt-4">4. 각 섹션마다 체류 시간(active_sec)이 기록됩니다</p>
        </div>
      </div>

      {/* 예상 이벤트 */}
      <div className="p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200">
        <h3 className="text-xl font-bold mb-4">✅ 예상 이벤트 형식</h3>
        <pre className="bg-gray-900 text-green-400 p-4 rounded text-xs overflow-x-auto">
{`{
  "event": "section_dwell",
  "section_id": "pricing",
  "active_sec": 5,  // 5초 체류
  "client_ts": 1234567890,
  "page_url": "http://localhost:3000/dwell-test",
  ...
}`}
        </pre>
      </div>
    </div>
  );
}
