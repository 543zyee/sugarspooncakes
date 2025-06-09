
//定義一個函式來更新總金額
function updateTotal() {
//抓出所有購物車的商品
const cartItems = document.querySelectorAll('.cart-item');

let total = 0;

//看在購物車的商品
cartItems.forEach(item => {
    //看商品有沒有被選
    const checkbox = item.querySelector('input[type="checkbox"]');

    //去除$和空格
    const priceText = item.querySelector('.product-price').textContent.replace('$', '').trim();

    //取得商品的數量
    const quantity = item.querySelector('input[type="number"]').value;

    //如果該商品有被打勾的話，才把價格乘以數量加進total裡
    if (checkbox.checked) {
    total += parseInt(priceText) * parseInt(quantity); 
    }
});

//把總金額顯示在totalAmount裡面
document.getElementById('totalAmount').textContent = '$ ' + total;
}

//找出所有checkbox和數量，當被改變時就重新計算總額
document.querySelectorAll('input[type="checkbox"], input[type="number"]').forEach(input => {
//當點擊checkbox或改變數量 就執行updateTotal
input.addEventListener('change', updateTotal);
});

//頁面一載入時，就先計算一次總額
updateTotal();

  //取得按鈕和購物車容器元素
  const checkoutButton = document.getElementById("checkout-btn");
  const cartContainer = document.querySelector(".cart-container");

  //點擊事件
  checkoutButton.addEventListener("click", function () {
    alert("訂單已送出");

    //移除購物車裡所有的商品
    cartContainer.innerHTML = "";

    //加入文字顯示購物車已清空
    const message = document.createElement("p");
    message.textContent = "購物車已清空，感謝您的訂購！";
    message.style.fontSize = "20px";
    message.style.marginTop = "30px";
    cartContainer.appendChild(message);
  });





