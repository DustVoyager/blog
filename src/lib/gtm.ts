// GTM dataLayer 타입 선언
type DataLayerEvent = Record<string, any>;

declare global {
  interface Window {
    dataLayer?: DataLayerEvent[];
  }
}

// GTM dataLayer에 이벤트 푸시
export const pushToDataLayer = (data: Record<string, any>) => {
  if (typeof window !== "undefined" && window.dataLayer) {
    window.dataLayer.push(data);
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
