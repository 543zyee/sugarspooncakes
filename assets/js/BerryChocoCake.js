//商品照展示
var slideIndex = 0;
var mytimer=null;
autoplay(true);

function currentSlides(n){
showSlides(slideIndex=n);
}

function plusSlides(n){
showSlides(slideIndex+=n);
}

function showSlides(n){
clearTimeout(mytimer);
var slides = document.getElementsByClassName("product-img");
if (n>= slides.length){
    slideIndex = 0;
}

if (n<0) {
    slideIndex = slides.length-1;
}

for(var i=0; i<slides.length;i++){
    slides[i].style.display="none";
}

slides[slideIndex].style.display="block";}


function autoplay(isFirst){
var slides = document.getElementsByClassName("product-img");

if(isFirst){
    slideIndex = 0;
}else {
    slideIndex++;
}

if (slideIndex>slides.length){
    slideIndex = 0;
}
showSlides(slideIndex);
mytimer = setTimeout(autoplay,3000);
}
//更改價錢
document.querySelector("select").addEventListener("change", function(e) {
    const priceTag = document.querySelector(".price");
    if (e.target.value.includes("4")) priceTag.textContent = "$ 299";
    else if (e.target.value.includes("6")) priceTag.textContent = "$ 399";
    else priceTag.textContent = "$ 499";
  });


//下單按鈕
const Button = document.getElementById("btn");
// 加上點擊事件
Button.addEventListener("click", function () {
// 顯示彈出訊息
alert("已下單");
});

//星星
document.addEventListener("DOMContentLoaded", function(){
    //找到所有最外層的div
    const starRatings = document.querySelectorAll(".star");

    //對每個星星評分區域設定事件
    starRatings.forEach((starRating) => {
        //找到評分區域內所有的icon
        const starIcons = starRating.querySelectorAll(".star-icon");
        
        //將所有的icon加上click事件
        starIcons.forEach((starIcon) => {
            starIcon.addEventListener("click",function(){
            //找到點擊的icon的data-index並轉成數字
                const clickedIndex = parseInt(this.getAttribute("data-index"));
                //starIcons是一個陣列，所以可以用forEach來判斷 跑回圈 全部跑一遍
                starIcons.forEach((icon, index) => {
                    //如果index小於點擊的index，就加上selected的class，並且改變icon
                    if(index<clickedIndex){
                        icon.setAttribute("icon","material-symbols:star");
                    }
                    //如果index大於於點擊的index，就加上selected的class，並且改變icon變成空心
                    else{
                        icon.setAttribute("icon","material-symbols:star-outline");
                    }
                });   
            });

        });
        
        
    });
});



  