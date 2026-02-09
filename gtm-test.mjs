import { chromium } from 'playwright';

async function testGTMEvents() {
  console.log('🚀 GTM 이벤트 테스트 시작...\n');

  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();

  // dataLayer 이벤트 캡처
  const capturedEvents = [];

  await page.addInitScript(() => {
    window.dataLayerEvents = [];
    const originalPush = window.dataLayer?.push || (() => {});

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push = function(...args) {
      window.dataLayerEvents.push(...args);
      return originalPush.apply(this, args);
    };
  });

  // 페이지 방문
  console.log('📄 테스트 페이지 접속 중...');
  await page.goto('http://localhost:3000/gtm-test');
  await page.waitForTimeout(2000);

  // content_view 이벤트 확인
  let events = await page.evaluate(() => window.dataLayerEvents);
  console.log('\n✅ 1. 페이지 진입 이벤트 (content_view):');
  const contentViewEvent = events.find(e => e.event === 'content_view');
  if (contentViewEvent) {
    console.log(JSON.stringify(contentViewEvent, null, 2));
  } else {
    console.log('❌ content_view 이벤트를 찾을 수 없습니다.');
  }

  // 다운로드 버튼 클릭
  console.log('\n📥 2. 다운로드 버튼 클릭 테스트...');
  await page.click('button:has-text("Architecture_Guide.pdf")');
  await page.waitForTimeout(1000);

  events = await page.evaluate(() => window.dataLayerEvents);
  const downloadClickEvent = events.find(e => e.event === 'download_click');
  const downloadCompleteEvent = events.find(e => e.event === 'download_complete');

  console.log('\n✅ download_click 이벤트:');
  if (downloadClickEvent) {
    console.log(JSON.stringify(downloadClickEvent, null, 2));
  } else {
    console.log('❌ download_click 이벤트를 찾을 수 없습니다.');
  }

  console.log('\n✅ download_complete 이벤트:');
  if (downloadCompleteEvent) {
    console.log(JSON.stringify(downloadCompleteEvent, null, 2));
  } else {
    console.log('❌ download_complete 이벤트를 찾을 수 없습니다.');
  }

  // CTA 버튼 클릭
  console.log('\n🎯 3. CTA 버튼 클릭 테스트...');
  await page.click('button:has-text("문의하기")');
  await page.waitForTimeout(500);

  events = await page.evaluate(() => window.dataLayerEvents);
  const ctaClickEvent = events.find(e => e.event === 'cta_click' && e.cta_type === 'contact');

  console.log('\n✅ cta_click 이벤트:');
  if (ctaClickEvent) {
    console.log(JSON.stringify(ctaClickEvent, null, 2));
  } else {
    console.log('❌ cta_click 이벤트를 찾을 수 없습니다.');
  }

  // 링크 클릭
  console.log('\n🔗 4. 링크 클릭 추적 테스트...');
  await page.click('a:has-text("AWS OpenSearch 공식 문서")');
  await page.waitForTimeout(500);

  events = await page.evaluate(() => window.dataLayerEvents);
  const linkClickEvent = events.find(e => e.event === 'click' && e.track_id === 'aws-opensearch-docs');

  console.log('\n✅ click 이벤트:');
  if (linkClickEvent) {
    console.log(JSON.stringify(linkClickEvent, null, 2));
  } else {
    console.log('❌ click 이벤트를 찾을 수 없습니다.');
  }

  // 전체 이벤트 요약
  console.log('\n' + '='.repeat(60));
  console.log('📊 전체 캡처된 이벤트 요약:');
  console.log('='.repeat(60));
  events.forEach((event, index) => {
    console.log(`\n이벤트 ${index + 1}:`);
    console.log(JSON.stringify(event, null, 2));
  });

  console.log('\n✨ 테스트 완료! 5초 후 브라우저가 종료됩니다...');
  await page.waitForTimeout(5000);

  await browser.close();
}

testGTMEvents().catch(console.error);
