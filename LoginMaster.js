
function checkLogin(email, password) {
    console.log(email)
    console.log(password)
    if (email == "admin" && password == "admin") {
        return true
    } else {
        return false
    }
}

function redirectAdmin() {
    let password = document.getElementById("password").value;
    let email = document.getElementById("email").value;
    if (checkLogin(email, password)) {
            alert("Đăng nhập thành công");
                window.location = "LoginMaster.html";

    } else {
        alert("Sai tài khoản hoặc mật khẩu, xin vui lòng đăng nhập lại")
    }

}
function logout(){
    alert("Bạn đã đăng xuất khỏi tài khoản");
    window.location = "index.html"
}

