function Login () {
    this.getUserName = function() {
        var userName = document.getElementById("login").value;
        if (/^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/.test(userName)) {
            sessionStorage.setItem("login", userName)
            window.location = "password.html";
        }
        else {
            alert("invalid login")
        }
    }
};

window.onload = function () {
    var login = new Login();
    document.getElementById("loginBTN").onclick = function () {
        login.getUserName();
    }
}
