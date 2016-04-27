function Login () {
    this.getEmail = function() {
        emailPattern = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;
        var email = document.getElementById("email").value;
        if (emailPattern.test(email)) {
            sessionStorage.setItem("userEmail", email)
            window.location = "password.html";
        }
        else {
            alert("invalid login");
        }
    }
};

window.onload = function () {
    var login = new Login();
    document.getElementById("loginBTN").onclick = function () {
        login.getEmail();
    }
}
