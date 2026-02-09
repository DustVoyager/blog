// GTM dataLayer 타입 선언
type DataLayerEvent = Record<string, any>;

declare global {
  interface Window {
    dataLayer?: DataLayerEvent[];
  }
}

/**
 * 모든 이벤트에 자동으로 포함될 공통 파라미터 수집
 * 필요에 따라 여기에 파라미터를 추가하세요
 */
const getCommonParams = (): Record<string, any> => {
  if (typeof window === "undefined") return {};

  // 기본 공통 파라미터
  const commonParams: Record<string, any> = {
    client_ts: Date.now(),
    page_url: window.location.href,
    page_path: window.location.pathname,
    page_title: document.title,
    referrer: document.referrer || "",
  };

  // TODO: 필요한 공통 파라미터를 여기에 추가하세요
  // 예시:
  // commonParams.anon_user_id = getCookie('anon_user_id') || '';
  // commonParams.session_id = sessionStorage.getItem('session_id') || '';
  // commonParams.utm_source = new URLSearchParams(window.location.search).get('utm_source') || '';
  // commonParams.utm_medium = new URLSearchParams(window.location.search).get('utm_medium') || '';
  // commonParams.utm_campaign = new URLSearchParams(window.location.search).get('utm_campaign') || '';
  // commonParams.locale = navigator.language || '';
  // commonParams.timezone = Intl.DateTimeFormat().resolvedOptions().timeZone || '';

  return commonParams;
};

/**
 * GTM dataLayer에 이벤트 푸시
 * 공통 파라미터가 자동으로 포함됩니다
 */
export const pushToDataLayer = (data: Record<string, any>) => {
  if (typeof window !== "undefined" && window.dataLayer) {
    const eventData = {
      ...getCommonParams(), // 공통 파라미터 먼저
      ...data, // 개별 이벤트 데이터가 공통 파라미터를 덮어쓸 수 있음
    };
    window.dataLayer.push(eventData);

    // 개발 환경에서 디버깅용
    if (process.env.NODE_ENV === "development") {
      console.log("📊 GTM Event:", eventData);
    }
  }
};

// content_view 이벤트 (개별 콘텐츠 조회)
export const trackContentView = (contentId: string, contentType: string = "work") => {
  pushToDataLayer({
    event: "content_view",
    content_type: contentType,
    content_id: contentId,
  });
};

// content_list_impression 이벤트 (콘텐츠 리스트 노출)
export const trackContentListImpression = (
  listId: string,
  itemIds: string[]
) => {
  pushToDataLayer({
    event: "content_list_impression",
    list_id: listId,
    item_ids: itemIds,
  });
};

// click 이벤트 (일반 클릭 추적)
export const trackClick = (
  trackId: string,
  elementType: string,
  position?: number
) => {
  pushToDataLayer({
    event: "click",
    track_id: trackId,
    element_type: elementType,
    position: position,
  });
};

// cta_click 이벤트 (핵심 CTA 클릭)
export const trackCtaClick = (
  ctaType: "contact" | "brochure_download" | "apply",
  additionalData?: Record<string, any>
) => {
  pushToDataLayer({
    event: "cta_click",
    cta_type: ctaType,
    ...additionalData,
  });
};

// download_click 이벤트 (다운로드 클릭)
export const trackDownloadClick = (assetId: string, assetName?: string) => {
  pushToDataLayer({
    event: "download_click",
    asset_id: assetId,
    asset_name: assetName,
  });
};

// download_complete 이벤트 (다운로드 완료)
export const trackDownloadComplete = (assetId: string, assetName?: string) => {
  pushToDataLayer({
    event: "download_complete",
    asset_id: assetId,
    asset_name: assetName,
  });
};

// content_click 이벤트 (콘텐츠 카드 클릭)
export const trackContentClick = (contentId: string, rank?: number) => {
  pushToDataLayer({
    event: "content_click",
    content_id: contentId,
    rank: rank,
  });
};

// section_view 이벤트 (섹션 노출)
export const trackSectionView = (sectionId: string) => {
  pushToDataLayer({
    event: "section_view",
    section_id: sectionId,
  });
};

// section_dwell 이벤트 (섹션 체류)
export const trackSectionDwell = (sectionId: string, activeSec: number) => {
  pushToDataLayer({
    event: "section_dwell",
    section_id: sectionId,
    active_sec: activeSec,
  });
};

// component_impression 이벤트 (컴포넌트 노출)
export const trackComponentImpression = (
  componentId: string,
  additionalData?: Record<string, any>
) => {
  pushToDataLayer({
    event: "component_impression",
    component_id: componentId,
    ...additionalData,
  });
};

// viewport_position 이벤트 (컴포넌트 위치)
export const trackViewportPosition = (
  componentId: string,
  position: "above_fold" | "below_fold",
  additionalData?: Record<string, any>
) => {
  pushToDataLayer({
    event: "viewport_position",
    component_id: componentId,
    ...additionalData,
    viewport_position: position, // 더 명확한 필드명 (충돌 방지)
  });
};
