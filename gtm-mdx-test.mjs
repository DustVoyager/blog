import { chromium } from 'playwright';

async function testMDXPage() {
  console.log('🚀 MDX 페이지 GTM 이벤트 테스트 시작...\n');

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
      return originalPush.apply(this, args);
    };
  });

  // MDX 페이지 방문
  console.log('📄 AWS OpenSearch 블로그 페이지 접속 중...');
  try {
    await page.goto('http://localhost:3000/blog/aws/opensearch', {
      waitUntil: 'networkidle',
      timeout: 10000
    });
  } catch (e) {
    console.log('⚠️  네트워크 idle 타임아웃, 계속 진행...');
  }

  await page.waitForTimeout(2000);

  // 페이지 로드 확인
  const title = await page.title();
  console.log(`✅ 페이지 로드 성공: ${title}\n`);

  // content_view 이벤트 확인
  let events = await page.evaluate(() => window.dataLayerEvents);
  console.log('✅ 1. 페이지 진입 이벤트 (content_view):');
  const contentViewEvent = events.find(e => e.event === 'content_view');
  if (contentViewEvent) {
    console.log(JSON.stringify(contentViewEvent, null, 2));
  } else {
    console.log('❌ content_view 이벤트를 찾을 수 없습니다.');
  }

  // 다운로드 버튼 찾기
  console.log('\n📥 2. 다운로드 버튼 확인...');
  const downloadButtons = await page.$$('button:has-text("다운로드")');
  console.log(`   발견된 다운로드 버튼 수: ${downloadButtons.length}`);

  if (downloadButtons.length > 0) {
    console.log('   첫 번째 다운로드 버튼 클릭...');
    await downloadButtons[0].click();
    await page.waitForTimeout(1000);

    events = await page.evaluate(() => window.dataLayerEvents);
    const downloadClickEvent = events.find(e => e.event === 'download_click');

    if (downloadClickEvent) {
      console.log('\n✅ download_click 이벤트:');
      console.log(JSON.stringify(downloadClickEvent, null, 2));
    } else {
      console.log('\n❌ download_click 이벤트를 찾을 수 없습니다.');
    }
  }

  // CTA 버튼 찾기
  console.log('\n🎯 3. CTA 버튼 확인...');
  const ctaButtons = await page.$$('button:has-text("문의")');
  console.log(`   발견된 CTA 버튼 수: ${ctaButtons.length}`);

  if (ctaButtons.length > 0) {
    console.log('   첫 번째 CTA 버튼 클릭...');
    await ctaButtons[0].click();
    await page.waitForTimeout(500);

    events = await page.evaluate(() => window.dataLayerEvents);
    const ctaClickEvent = events.find(e => e.event === 'cta_click');

    if (ctaClickEvent) {
      console.log('\n✅ cta_click 이벤트:');
      console.log(JSON.stringify(ctaClickEvent, null, 2));
    } else {
      console.log('\n❌ cta_click 이벤트를 찾을 수 없습니다.');
    }
  }

  // 전체 이벤트 요약
  console.log('\n' + '='.repeat(60));
  console.log('📊 MDX 페이지 전체 이벤트 요약:');
  console.log('='.repeat(60));
  events.forEach((event, index) => {
    if (event.event) {
      console.log(`\n[${index + 1}] ${event.event}`);
      console.log(JSON.stringify(event, null, 2));
    }
  });

  console.log('\n✨ 테스트 완료! 5초 후 브라우저가 종료됩니다...');
  await page.waitForTimeout(5000);

  await browser.close();
}

testMDXPage().catch(console.error);
