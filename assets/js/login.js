
document.addEventListener("DOMContentLoaded", function () {
    //顯示密碼 密碼轉文字
    const checkbox=document.getElementById("showpassword");
    const passwordInput=document.getElementById("password");

    checkbox.addEventListener("change" , ()=>{
        passwordInput.type=checkbox.checked? "text":"password" ;
        }
    );

    //密碼識別功能
    const form = document.querySelector("form"); //找到網頁中的表單，把它存進 form 這個變數裡

    form.addEventListener("submit", function(event) {
        const password = passwordInput.value; //取得使用者輸入的內容
        
        //8位英數密碼識別
        const rule = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8}$/;
        if (!rule.test(password)) {
            alert("密碼格式錯誤：需為8位含英文與數字之密碼");
            event.preventDefault(); // 阻止表單送出
            return;
        }
        

        event.preventDefault(); // 防post
        window.location.href = "member-center.html"; 

    });

});