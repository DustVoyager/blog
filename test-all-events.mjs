import { chromium } from 'playwright';

async function testAllEvents() {
  console.log('🚀 전체 GTM 이벤트 테스트 시작...\n');

  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();

  // dataLayer 이벤트 캡처
  await page.addInitScript(() => {
    window.dataLayerEvents = [];
    const originalPush = window.dataLayer?.push || (() => {});

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push = function(...args) {
      window.dataLayerEvents.push(...args);
      console.log('📊 New GTM Event:', args[0]);
      return originalPush.apply(this, args);
    };
  });

  const testResults = {
    content_view: false,
    download_click: false,
    download_complete: false,
    cta_click: false,
    click: false,
    content_click: false,
    section_view: false,
    section_dwell: false,
    component_impression: false,
    viewport_position: false,
  };

  // ==========================================
  // 1. GTM 테스트 페이지 (기본 이벤트들)
  // ==========================================
  console.log('📄 1. GTM 테스트 페이지 접속...');
  await page.goto('http://localhost:3000/gtm-test', { waitUntil: 'networkidle' });
  await page.waitForTimeout(2000);

  let events = await page.evaluate(() => window.dataLayerEvents);

  // content_view 확인
  if (events.find(e => e.event === 'content_view')) {
    testResults.content_view = true;
    console.log('   ✅ content_view 작동');
  } else {
    console.log('   ❌ content_view 실패');
  }

  // 다운로드 버튼 클릭
  console.log('\n📥 2. 다운로드 버튼 테스트...');
  await page.click('button:has-text("Architecture_Guide.pdf")');
  await page.waitForTimeout(1000);

  events = await page.evaluate(() => window.dataLayerEvents);

  if (events.find(e => e.event === 'download_click')) {
    testResults.download_click = true;
    console.log('   ✅ download_click 작동');
  } else {
    console.log('   ❌ download_click 실패');
  }

  if (events.find(e => e.event === 'download_complete')) {
    testResults.download_complete = true;
    console.log('   ✅ download_complete 작동');
  } else {
    console.log('   ❌ download_complete 실패');
  }

  // CTA 버튼 클릭
  console.log('\n🎯 3. CTA 버튼 테스트...');
  await page.click('button:has-text("문의하기")');
  await page.waitForTimeout(500);

  events = await page.evaluate(() => window.dataLayerEvents);

  if (events.find(e => e.event === 'cta_click')) {
    testResults.cta_click = true;
    console.log('   ✅ cta_click 작동');
  } else {
    console.log('   ❌ cta_click 실패');
  }

  // 헤더 클릭 테스트
  console.log('\n🔗 4. 헤더 링크 클릭 테스트...');
  await page.click('a:has-text("About")');
  await page.waitForTimeout(1000);

  events = await page.evaluate(() => window.dataLayerEvents);

  if (events.find(e => e.event === 'click' && e.element_type === 'navigation')) {
    testResults.click = true;
    console.log('   ✅ click (navigation) 작동');
  } else {
    console.log('   ❌ click (navigation) 실패');
  }

  // ==========================================
  // 5. 포스트 리스트 페이지 (content_click)
  // ==========================================
  console.log('\n📰 5. 블로그 리스트 페이지 테스트...');
  await page.goto('http://localhost:3000/blog', { waitUntil: 'networkidle' });
  await page.waitForTimeout(2000);

  // 첫 번째 포스트 카드 클릭
  const postCard = await page.$('a:has(li)');
  if (postCard) {
    await postCard.click();
    await page.waitForTimeout(1000);

    events = await page.evaluate(() => window.dataLayerEvents);

    if (events.find(e => e.event === 'content_click')) {
      testResults.content_click = true;
      console.log('   ✅ content_click 작동');
    } else {
      console.log('   ❌ content_click 실패');
    }
  }

  // ==========================================
  // 6. 섹션 뷰 테스트
  // ==========================================
  console.log('\n📍 6. 섹션 뷰 테스트...');
  await page.goto('http://localhost:3000/section-test', { waitUntil: 'networkidle' });
  await page.waitForTimeout(2000);

  // 스크롤해서 섹션 노출
  await page.evaluate(() => window.scrollBy(0, 1000));
  await page.waitForTimeout(2000);

  events = await page.evaluate(() => window.dataLayerEvents);

  if (events.find(e => e.event === 'section_view')) {
    testResults.section_view = true;
    console.log('   ✅ section_view 작동');
  } else {
    console.log('   ❌ section_view 실패');
  }

  // ==========================================
  // 7. 섹션 체류 테스트
  // ==========================================
  console.log('\n⏱️  7. 섹션 체류 테스트...');
  await page.goto('http://localhost:3000/dwell-test', { waitUntil: 'networkidle' });
  await page.waitForTimeout(3000); // 3초 체류

  // 스크롤해서 섹션 벗어남
  await page.evaluate(() => window.scrollBy(0, 1000));
  await page.waitForTimeout(1000);

  events = await page.evaluate(() => window.dataLayerEvents);

  if (events.find(e => e.event === 'section_dwell')) {
    testResults.section_dwell = true;
    console.log('   ✅ section_dwell 작동');
  } else {
    console.log('   ❌ section_dwell 실패');
  }

  // ==========================================
  // 8. 컴포넌트 노출 테스트
  // ==========================================
  console.log('\n👁️  8. 컴포넌트 노출 테스트...');
  await page.goto('http://localhost:3000/impression-test', { waitUntil: 'networkidle' });
  await page.waitForTimeout(2000);

  // 스크롤해서 컴포넌트 노출
  await page.evaluate(() => window.scrollBy(0, 800));
  await page.waitForTimeout(2000);

  events = await page.evaluate(() => window.dataLayerEvents);

  if (events.find(e => e.event === 'component_impression')) {
    testResults.component_impression = true;
    console.log('   ✅ component_impression 작동');
  } else {
    console.log('   ❌ component_impression 실패');
  }

  // ==========================================
  // 9. 뷰포트 위치 테스트
  // ==========================================
  console.log('\n📐 9. 뷰포트 위치 테스트...');
  await page.goto('http://localhost:3000/position-test', { waitUntil: 'load' });
  await page.waitForTimeout(2000);

  events = await page.evaluate(() => window.dataLayerEvents);

  if (events.find(e => e.event === 'viewport_position')) {
    testResults.viewport_position = true;
    console.log('   ✅ viewport_position 작동');
  } else {
    console.log('   ❌ viewport_position 실패');
  }

  // ==========================================
  // 결과 요약
  // ==========================================
  console.log('\n' + '='.repeat(60));
  console.log('📊 테스트 결과 요약');
  console.log('='.repeat(60));

  const total = Object.keys(testResults).length;
  const passed = Object.values(testResults).filter(v => v).length;
  const failed = total - passed;

  Object.entries(testResults).forEach(([event, result]) => {
    console.log(`${result ? '✅' : '❌'} ${event}`);
  });

  console.log('\n' + '-'.repeat(60));
  console.log(`총 ${total}개 이벤트 중 ${passed}개 성공, ${failed}개 실패`);
  console.log(`성공률: ${((passed / total) * 100).toFixed(1)}%`);

  if (failed > 0) {
    console.log('\n⚠️  실패한 이벤트:');
    Object.entries(testResults)
      .filter(([, result]) => !result)
      .forEach(([event]) => {
        console.log(`   - ${event}`);
      });
  }

  // 전체 이벤트 로그
  console.log('\n' + '='.repeat(60));
  console.log('📋 전체 발생 이벤트 목록');
  console.log('='.repeat(60));

  const allEvents = await page.evaluate(() =>
    window.dataLayerEvents
      .filter(e => e.event)
      .map(e => e.event)
  );

  const eventCounts = allEvents.reduce((acc, event) => {
    acc[event] = (acc[event] || 0) + 1;
    return acc;
  }, {});

  Object.entries(eventCounts)
    .sort((a, b) => b[1] - a[1])
    .forEach(([event, count]) => {
      console.log(`   ${event}: ${count}회`);
    });

  console.log('\n✨ 테스트 완료! 5초 후 브라우저가 종료됩니다...');
  await page.waitForTimeout(5000);

  await browser.close();

  // 실패한 이벤트가 있으면 에러 코드 반환
  process.exit(failed > 0 ? 1 : 0);
}

testAllEvents().catch(console.error);
