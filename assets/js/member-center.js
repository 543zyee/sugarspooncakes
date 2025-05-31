//nav切換section
const navItems = document.querySelectorAll(".bar li"); //所有選單
const sections = document.querySelectorAll(".article .section"); //右邊內容

navItems.forEach(item=>{ //對 navItems 裡每一個 li 做一次處理
item.addEventListener("click", () => {
    navItems.forEach(el => el.classList.remove("active"));  //對每個 nav 選單項目 el，把它的 .active 樣式移除，讓所有項目都「非選中狀態」
    sections.forEach(section => section.classList.add("hidden"));

    item.classList.add("active");
    const targetId = item.getAttribute("data-target");
    document.getElementById(targetId).classList.remove("hidden");
    });
});