"use client";

import ViewportPositionTracker from "@/components/analytics/ViewportPositionTracker";
import ContentViewTracker from "@/components/analytics/ContentViewTracker";

export default function PositionTestPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-12">
      <ContentViewTracker contentId="position-test" contentType="work" />

      <h1 className="text-4xl font-bold mb-8">컴포넌트 위치 추적 테스트</h1>

      <div className="mb-8 p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-200">
        <p className="text-sm mb-2">
          <strong>테스트 방법:</strong>
        </p>
        <ol className="text-sm space-y-1 list-decimal list-inside">
          <li>페이지가 로드되면 자동으로 각 컴포넌트의 위치 측정</li>
          <li>콘솔에서 <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">window.dataLayer</code> 확인</li>
          <li>첫 화면에 있으면 <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">above_fold</code></li>
          <li>스크롤해야 보이면 <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">below_fold</code></li>
        </ol>
      </div>

      {/* Above Fold 영역 */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <span className="text-green-600">📍 Above Fold</span>
          <span className="text-sm font-normal text-gray-500">(첫 화면에 보임)</span>
        </h2>

        <div className="space-y-4">
          {/* 컴포넌트 1 - Above Fold */}
          <ViewportPositionTracker
            componentId="hero_banner"
            additionalData={{ type: "banner", importance: "high" }}
          >
            <div className="p-8 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg">
              <h3 className="text-2xl font-bold mb-2">🎯 Hero Banner</h3>
              <p className="mb-4">이 배너는 페이지 최상단에 있습니다</p>
              <p className="text-sm opacity-75">
                viewport_position: <strong>"above_fold"</strong> | component_id: "hero_banner"
              </p>
            </div>
          </ViewportPositionTracker>

          {/* 컴포넌트 2 - Above Fold */}
          <ViewportPositionTracker
            componentId="product_featured"
            additionalData={{ type: "product", featured: true }}
          >
            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg border-2 border-blue-300">
              <h3 className="text-xl font-bold mb-2">⭐ 추천 상품</h3>
              <p className="text-gray-600 dark:text-gray-400">
                첫 화면에 보이는 추천 상품
              </p>
              <p className="text-sm text-gray-500 mt-2">
                viewport_position: <strong>"above_fold"</strong> | component_id: "product_featured"
              </p>
            </div>
          </ViewportPositionTracker>

          {/* 컴포넌트 3 - Above Fold */}
          <ViewportPositionTracker
            componentId="cta_primary"
            additionalData={{ type: "cta", priority: 1 }}
          >
            <div className="p-6 bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900/20 dark:to-emerald-900/20 rounded-lg border border-green-300">
              <h3 className="text-xl font-bold mb-2">📞 지금 문의하세요</h3>
              <button className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
                무료 상담 신청
              </button>
              <p className="text-sm text-gray-500 mt-2">
                viewport_position: <strong>"above_fold"</strong> | component_id: "cta_primary"
              </p>
            </div>
          </ViewportPositionTracker>
        </div>
      </section>

      {/* 구분선 */}
      <div className="my-16 border-t-4 border-dashed border-red-500 relative">
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-white dark:bg-gray-900 px-4 py-1 text-sm font-bold text-red-600 border-2 border-red-500 rounded">
          ✂️ Fold Line (접힘선)
        </div>
        <p className="text-center text-sm text-gray-500 mt-4">
          ↑ 위: 첫 화면 (Above Fold) | 아래: 스크롤 필요 (Below Fold) ↓
        </p>
      </div>

      {/* Below Fold 영역 */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <span className="text-orange-600">📍 Below Fold</span>
          <span className="text-sm font-normal text-gray-500">(스크롤해야 보임)</span>
        </h2>

        <div className="space-y-4">
          {/* 컴포넌트 4 - Below Fold */}
          <ViewportPositionTracker
            componentId="product_list_1"
            additionalData={{ type: "product", section: "recommendations" }}
          >
            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg border">
              <h3 className="text-xl font-bold mb-2">🛍️ 상품 1</h3>
              <p className="text-gray-600 dark:text-gray-400">
                스크롤해야 보이는 상품
              </p>
              <p className="text-sm text-gray-500 mt-2">
                viewport_position: <strong>"below_fold"</strong> | component_id: "product_list_1"
              </p>
            </div>
          </ViewportPositionTracker>

          {/* 컴포넌트 5 - Below Fold */}
          <ViewportPositionTracker
            componentId="product_list_2"
            additionalData={{ type: "product", section: "recommendations" }}
          >
            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg border">
              <h3 className="text-xl font-bold mb-2">🛍️ 상품 2</h3>
              <p className="text-gray-600 dark:text-gray-400">
                스크롤해야 보이는 상품
              </p>
              <p className="text-sm text-gray-500 mt-2">
                viewport_position: <strong>"below_fold"</strong> | component_id: "product_list_2"
              </p>
            </div>
          </ViewportPositionTracker>

          {/* 컴포넌트 6 - Below Fold */}
          <ViewportPositionTracker
            componentId="banner_secondary"
            additionalData={{ type: "banner", importance: "medium" }}
          >
            <div className="p-8 bg-gradient-to-r from-orange-400 to-red-500 text-white rounded-lg">
              <h3 className="text-2xl font-bold mb-2">🎉 중간 배너</h3>
              <p>페이지 하단에 있는 배너</p>
              <p className="text-sm opacity-75 mt-2">
                viewport_position: <strong>"below_fold"</strong> | component_id: "banner_secondary"
              </p>
            </div>
          </ViewportPositionTracker>

          {/* 컴포넌트 7 - Below Fold */}
          <ViewportPositionTracker
            componentId="cta_secondary"
            additionalData={{ type: "cta", priority: 2 }}
          >
            <div className="p-6 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/20 dark:to-pink-900/20 rounded-lg border border-purple-300">
              <h3 className="text-xl font-bold mb-2">💌 뉴스레터 구독</h3>
              <input
                type="email"
                placeholder="이메일 주소"
                className="w-full px-4 py-2 rounded border mb-2"
              />
              <button className="w-full px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700">
                구독하기
              </button>
              <p className="text-sm text-gray-500 mt-2">
                viewport_position: <strong>"below_fold"</strong> | component_id: "cta_secondary"
              </p>
            </div>
          </ViewportPositionTracker>
        </div>
      </section>

      {/* 추가 Below Fold 컴포넌트 */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">📦 추가 컴포넌트 (Below Fold)</h2>
        <div className="grid grid-cols-2 gap-4">
          {[1, 2, 3, 4].map((num) => (
            <ViewportPositionTracker
              key={num}
              componentId={`footer_card_${num}`}
              additionalData={{ type: "footer_card", card_number: num }}
            >
              <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg border">
                <h4 className="font-bold mb-2">카드 {num}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  하단 카드 {num}
                </p>
                <p className="text-xs text-gray-500 mt-2">
                  ID: footer_card_{num}
                </p>
              </div>
            </ViewportPositionTracker>
          ))}
        </div>
      </section>

      {/* 이벤트 확인 가이드 */}
      <div className="p-6 bg-gray-50 dark:bg-gray-900/20 rounded-lg border border-gray-200 mb-8">
        <h3 className="text-xl font-bold mb-4">📊 확인 방법</h3>
        <div className="space-y-2 text-sm">
          <p>1. 브라우저 콘솔을 엽니다 (F12)</p>
          <p>2. 페이지 로드가 완료되면 자동으로 위치 측정</p>
          <p>3. 다음 명령어로 위치 이벤트 확인:</p>
          <div className="bg-gray-900 text-green-400 p-4 rounded font-mono text-xs overflow-x-auto">
            <code>window.dataLayer.filter(e =&gt; e.event === 'viewport_position')</code>
          </div>
          <p className="mt-4">4. Above Fold와 Below Fold 컴포넌트 수 확인</p>
          <div className="bg-gray-900 text-green-400 p-4 rounded font-mono text-xs overflow-x-auto mt-2">
            <code>{`// Above Fold 개수
window.dataLayer.filter(e =>
  e.event === 'viewport_position' &&
  e.position === 'above_fold'
).length

// Below Fold 개수
window.dataLayer.filter(e =>
  e.event === 'viewport_position' &&
  e.position === 'below_fold'
).length`}</code>
          </div>
        </div>
      </div>

      {/* 예상 이벤트 */}
      <div className="p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 mb-8">
        <h3 className="text-xl font-bold mb-4">✅ 예상 이벤트 형식</h3>
        <div className="space-y-4">
          <div>
            <p className="text-sm font-bold mb-2">Above Fold:</p>
            <pre className="bg-gray-900 text-green-400 p-4 rounded text-xs overflow-x-auto">
{`{
  "event": "viewport_position",
  "component_id": "hero_banner",
  "viewport_position": "above_fold",
  "type": "banner",
  "importance": "high",
  "component_top": 150,
  "viewport_height": 900,
  "fold_line": 900,
  ...
}`}
            </pre>
          </div>
          <div>
            <p className="text-sm font-bold mb-2">Below Fold:</p>
            <pre className="bg-gray-900 text-green-400 p-4 rounded text-xs overflow-x-auto">
{`{
  "event": "viewport_position",
  "component_id": "product_list_1",
  "viewport_position": "below_fold",
  "type": "product",
  "section": "recommendations",
  "component_top": 1200,
  "viewport_height": 900,
  "fold_line": 900,
  ...
}`}
            </pre>
          </div>
        </div>
      </div>

      {/* 활용 예시 */}
      <div className="p-6 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-200">
        <h3 className="text-xl font-bold mb-4">💡 활용 예시</h3>
        <div className="space-y-3 text-sm">
          <div className="p-3 bg-white dark:bg-gray-800 rounded">
            <p className="font-bold mb-1">📊 전환율 분석</p>
            <p className="text-gray-600 dark:text-gray-400">
              Above Fold의 CTA 버튼 클릭률 vs Below Fold의 CTA 버튼 클릭률 비교
            </p>
          </div>
          <div className="p-3 bg-white dark:bg-gray-800 rounded">
            <p className="font-bold mb-1">🎯 최적화</p>
            <p className="text-gray-600 dark:text-gray-400">
              중요한 컴포넌트는 Above Fold로 이동하여 노출률 향상
            </p>
          </div>
          <div className="p-3 bg-white dark:bg-gray-800 rounded">
            <p className="font-bold mb-1">💰 광고 효율</p>
            <p className="text-gray-600 dark:text-gray-400">
              Above Fold 배너 vs Below Fold 배너 광고 효과 측정
            </p>
          </div>
          <div className="p-3 bg-white dark:bg-gray-800 rounded">
            <p className="font-bold mb-1">📱 반응형 디자인</p>
            <p className="text-gray-600 dark:text-gray-400">
              모바일/데스크톱에서 Above Fold 영역 차이 분석
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
