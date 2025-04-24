//Search View

const searchBtn = document.getElementById("searchBtn");

const handleSearch = (e) => {
  e.preventDefault();
  const keyword = document.getElementById("searchInput").value.trim();
  if (keyword !== "") {
    gtag("event", "search", {
      event_category: "engagement",
      event_label: keyword,
      search_term: keyword,
    });
    alert(`검색어 ${keyword}에 대한 검색을 실행했습니다!`);
  } else {
    alert("검색어를 입력해주세요!");
  }
};

searchBtn.addEventListener("click", handleSearch);

//Product View
const viewItemBtn = document.getElementById("viewItem");
const addToCart = document.getElementById("addToCart");
const purchase = document.getElementById("purchase");

const viewItem = () => {
  gtag("event", "viewItem", {
    currency: "KRW",
    value: 129000,
    items: [
      {
        item_id: "EP1001",
        item_name: "무선 이어폰",
        currency: "KRW",
        price: 129000,
        quantity: 1,
      },
    ],
  });
};
viewItemBtn.addEventListener("click", viewItem);

const add_to_cart = () => {
  gtag("event", "add_to_cart", {
    currency: "KRW",
    value: 129000,
    items: [
      {
        item_id: "EP1001",
        item_name: "무선 이어폰",
        currency: "KRW",
        price: 129000,
        quantity: 1,
      },
    ],
  });
  alert("addToCart 이벤트 발생");
};
addToCart.addEventListener("click", add_to_cart);

const Purchase = () => {
  gtag("event", "Purchase", {
    currency: "KRW",
    value: 129000,
    items: [
      {
        item_id: "EP1001",
        item_name: "무선 이어폰",
        currency: "KRW",
        price: 129000,
        quantity: 1,
      },
    ],
  });
  alert("purchase 이벤트 발생");
};
purchase.addEventListener("click", Purchase);
