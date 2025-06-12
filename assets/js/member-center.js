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
})

document.addEventListener("DOMContentLoaded", function () {

    const checkbox=document.getElementById("showpassword1");
    const passwordInput=document.getElementById("password");

    checkbox.addEventListener("change" , ()=>{
        passwordInput.type=checkbox.checked? "text":"password" ;
        }
    );

    //顯示密碼 密碼轉文字
    const confirm_checkbox = document.getElementById("showpassword2");
    const confirm_passwordInput = document.getElementById("confirm-password");

    confirm_checkbox.addEventListener("change", () => {
        confirm_passwordInput.type = confirm_checkbox.checked ? "text" : "password";
        }
    );

    //密碼識別功能
    const form = document.querySelector("form"); //找到網頁中的表單，把它存進 form 這個變數裡
    const acceptrule = document.getElementById("accept"); 

    form.addEventListener("submit", function(event) {

        //同意規範才可送出
        if (!acceptrule.checked) {
            alert("尚未同意個人資料使用規範");
            event.preventDefault(); // 阻止表單送出
            return;
        }

        event.preventDefault(); // 防post
        window.location.href = "../index.html"; 

    });

});