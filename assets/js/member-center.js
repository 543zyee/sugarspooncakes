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

document.addEventListener("DOMContentLoaded", function(){ //監聽觸發事件
    const starRatings = document.querySelectorAll(".star");
    //對每個評分設定事件
    starRatings.forEach((starRating) =>{
        //找每個評分內所有的icon
        const starIcons = starRating.querySelectorAll(".star-icon");
        //對每個icon加上click事件
        starIcons.forEach((starIcon) => {
            starIcon.addEventListener("click", function() {
            //找clicked icon的data-index並轉成數字
            const clickedIndex = parseInt(this.getAttribute("data-index"));

            // starIcons是陣列，用forEach判斷 跑迴圈
            starIcons.forEach((icon, index)=>{
                if (index < clickedIndex){
                    icon.setAttribute("icon", "material-symbols:star");
                }
                else{
                    icon.setAttribute("icon", "material-symbols:star-outline");
                }
            })
            })

        })
    })

    // 會員資料表單
    const personalForm = document.querySelector("#personal form"); //找到網頁中的表單，把它存進 form 這個變數裡
    const acceptrule = document.getElementById("accept"); 

    personalForm.addEventListener("submit", function(event) {
        if (!acceptrule.checked) {
            alert("尚未同意個人資料使用規範");
            event.preventDefault();
            return;
        }
        event.preventDefault();
        window.location.href = "../index.html"; 
    });

    // 客服中心表單
    const contactForm = document.querySelector("#contacts form");
    contactForm.addEventListener("submit", function(event) {
        // 這裡如果你希望真的送出就不用 preventDefault()
        // 如果你還是要跳轉：
        event.preventDefault();
        window.location.href = "../index.html"; 
    });


})
