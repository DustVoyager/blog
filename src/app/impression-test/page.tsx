"use client";

import ComponentImpressionTracker from "@/components/analytics/ComponentImpressionTracker";
import ContentViewTracker from "@/components/analytics/ContentViewTracker";

export default function ImpressionTestPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-12">
      <ContentViewTracker contentId="impression-test" contentType="work" />

      <h1 className="text-4xl font-bold mb-8">컴포넌트 노출 추적 테스트</h1>

      <div className="mb-8 p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-200">
        <p className="text-sm mb-2">
          <strong>테스트 방법:</strong>
        </p>
        <ol className="text-sm space-y-1 list-decimal list-inside">
          <li>페이지를 스크롤하면서 각 컴포넌트가 화면에 나타나는 것을 확인</li>
          <li>컴포넌트가 화면의 50% 이상 보이면 <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">component_impression</code> 이벤트 발생</li>
          <li>콘솔에서 <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">window.dataLayer</code> 확인</li>
        </ol>
      </div>

      {/* 히어로 섹션 */}
      <section className="mb-16">
        <div className="h-96 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center text-white">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-4">환영합니다!</h2>
            <p className="text-xl">아래로 스크롤해서 컴포넌트들을 확인해보세요</p>
          </div>
        </div>
      </section>

      {/* 추천 카드들 */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6">🎯 추천 상품</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* 추천 카드 1 */}
          <ComponentImpressionTracker
            componentId="reco_card_1"
            additionalData={{ type: "product", rank: 1, category: "electronics" }}
          >
            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg border shadow-lg hover:shadow-xl transition">
              <div className="h-48 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-4xl">📱</span>
              </div>
              <h3 className="text-lg font-bold mb-2">스마트폰 XYZ</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                최신 기술이 집약된 프리미엄 스마트폰
              </p>
              <p className="text-xl font-bold text-blue-600">₩1,299,000</p>
              <p className="text-xs text-gray-500 mt-2">
                component_id: "reco_card_1"
              </p>
            </div>
          </ComponentImpressionTracker>

          {/* 추천 카드 2 */}
          <ComponentImpressionTracker
            componentId="reco_card_2"
            additionalData={{ type: "product", rank: 2, category: "electronics" }}
          >
            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg border shadow-lg hover:shadow-xl transition">
              <div className="h-48 bg-gradient-to-br from-green-100 to-green-200 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-4xl">💻</span>
              </div>
              <h3 className="text-lg font-bold mb-2">노트북 ProBook</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                강력한 성능의 비즈니스 노트북
              </p>
              <p className="text-xl font-bold text-green-600">₩2,490,000</p>
              <p className="text-xs text-gray-500 mt-2">
                component_id: "reco_card_2"
              </p>
            </div>
          </ComponentImpressionTracker>

          {/* 추천 카드 3 */}
          <ComponentImpressionTracker
            componentId="reco_card_3"
            additionalData={{ type: "product", rank: 3, category: "accessories" }}
          >
            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg border shadow-lg hover:shadow-xl transition">
              <div className="h-48 bg-gradient-to-br from-purple-100 to-purple-200 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-4xl">🎧</span>
              </div>
              <h3 className="text-lg font-bold mb-2">무선 이어폰 AirPro</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                탁월한 음질과 노이즈 캔슬링
              </p>
              <p className="text-xl font-bold text-purple-600">₩329,000</p>
              <p className="text-xs text-gray-500 mt-2">
                component_id: "reco_card_3"
              </p>
            </div>
          </ComponentImpressionTracker>
        </div>
      </section>

      {/* 배너 광고 */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6">📢 프로모션 배너</h2>
        <ComponentImpressionTracker
          componentId="banner_promotion_1"
          additionalData={{ type: "banner", position: "middle", campaign: "summer_sale" }}
        >
          <div className="p-8 bg-gradient-to-r from-orange-400 to-red-500 rounded-lg text-white">
            <h3 className="text-3xl font-bold mb-2">여름 세일 🌞</h3>
            <p className="text-xl mb-4">최대 50% 할인 + 무료배송</p>
            <button className="px-6 py-2 bg-white text-orange-600 rounded-lg font-bold hover:bg-gray-100">
              지금 쇼핑하기
            </button>
            <p className="text-xs mt-4 opacity-75">
              component_id: "banner_promotion_1"
            </p>
          </div>
        </ComponentImpressionTracker>
      </section>

      {/* CTA 박스들 */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6">🎁 특별 혜택</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* CTA 박스 1 */}
          <ComponentImpressionTracker
            componentId="cta_newsletter"
            additionalData={{ type: "cta", purpose: "newsletter" }}
          >
            <div className="p-6 bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-indigo-900/20 dark:to-blue-900/20 rounded-lg border-2 border-indigo-200">
              <h3 className="text-xl font-bold mb-2">📧 뉴스레터 구독</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                최신 소식과 특별 할인 정보를 받아보세요
              </p>
              <input
                type="email"
                placeholder="이메일 주소"
                className="w-full px-4 py-2 rounded border mb-2"
              />
              <button className="w-full px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700">
                구독하기
              </button>
              <p className="text-xs text-gray-500 mt-2">
                component_id: "cta_newsletter"
              </p>
            </div>
          </ComponentImpressionTracker>

          {/* CTA 박스 2 */}
          <ComponentImpressionTracker
            componentId="cta_app_download"
            additionalData={{ type: "cta", purpose: "app_download" }}
          >
            <div className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-lg border-2 border-green-200">
              <h3 className="text-xl font-bold mb-2">📱 앱 다운로드</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                모바일 앱으로 더 편리하게 쇼핑하세요
              </p>
              <div className="flex gap-2">
                <button className="flex-1 px-4 py-2 bg-black text-white rounded hover:bg-gray-800 text-sm">
                  App Store
                </button>
                <button className="flex-1 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 text-sm">
                  Google Play
                </button>
              </div>
              <p className="text-xs text-gray-500 mt-2">
                component_id: "cta_app_download"
              </p>
            </div>
          </ComponentImpressionTracker>
        </div>
      </section>

      {/* 추가 추천 섹션 */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6">💡 이런 상품은 어때요?</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((num) => (
            <ComponentImpressionTracker
              key={num}
              componentId={`suggestion_${num}`}
              additionalData={{ type: "suggestion", rank: num }}
            >
              <div className="p-4 bg-white dark:bg-gray-800 rounded-lg border hover:shadow-lg transition">
                <div className="h-32 bg-gray-200 dark:bg-gray-700 rounded-lg mb-2 flex items-center justify-center">
                  <span className="text-3xl">🎁</span>
                </div>
                <h4 className="font-bold text-sm mb-1">추천 상품 {num}</h4>
                <p className="text-xs text-gray-500">₩{num * 10},000</p>
                <p className="text-xs text-gray-400 mt-1">
                  ID: suggestion_{num}
                </p>
              </div>
            </ComponentImpressionTracker>
          ))}
        </div>
      </section>

      {/* 이벤트 확인 가이드 */}
      <div className="p-6 bg-gray-50 dark:bg-gray-900/20 rounded-lg border border-gray-200 mb-8">
        <h3 className="text-xl font-bold mb-4">📊 확인 방법</h3>
        <div className="space-y-2 text-sm">
          <p>1. 브라우저 콘솔을 엽니다 (F12)</p>
          <p>2. 페이지를 스크롤하면서 컴포넌트들이 화면에 나타나는 것을 확인</p>
          <p>3. 다음 명령어로 노출 이벤트 확인:</p>
          <div className="bg-gray-900 text-green-400 p-4 rounded font-mono">
            <code>window.dataLayer.filter(e =&gt; e.event === 'component_impression')</code>
          </div>
          <p className="mt-4">4. 각 컴포넌트마다 노출 이벤트가 한 번씩 기록됩니다</p>
        </div>
      </div>

      {/* 예상 이벤트 */}
      <div className="p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200">
        <h3 className="text-xl font-bold mb-4">✅ 예상 이벤트 형식</h3>
        <pre className="bg-gray-900 text-green-400 p-4 rounded text-xs overflow-x-auto">
{`{
  "event": "component_impression",
  "component_id": "reco_card_1",
  "type": "product",
  "rank": 1,
  "category": "electronics",
  "client_ts": 1234567890,
  "page_url": "http://localhost:3000/impression-test",
  ...
}`}
        </pre>
      </div>
    </div>
  );
}
