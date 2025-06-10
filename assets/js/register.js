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
const confirmPasswordInput = document.getElementById("confirm-password");

form.addEventListener("submit", function(event) {
    const password = passwordInput.value; //取得使用者輸入的內容
    const confirmPassword = confirmPasswordInput.value;
    
    //8位英數密碼識別
    const rule = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8}$/;
    if (!rule.test(password)) {
        alert("密碼格式錯誤：需為8位含英文與數字之密碼");
        event.preventDefault(); // 阻止表單送出
        return;
    }
    //確認密碼功能
    if (password !== confirmPassword) {
        alert("確認密碼與密碼不一致");
        event.preventDefault(); // 阻止表單送出
        return;
    }
    //同意規範才可送出
    if (!this.acceptCharset.checked) {
        alert("尚未同意使用規範");
        event.preventDefault(); // 阻止表單送出
        return;
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    form.addEventListener("submit", function (e) {
        e.preventDefault(); // 防POST 
        window.location.href = "member-center.html"; 
    });
});