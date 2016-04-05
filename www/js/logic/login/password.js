function Password () {
    this.getPassword = function() {
        var password = document.getElementById("password").value;
        var login = sessionStorage.getItem("login");
        if (loginService.authorize(login, password)){
            window.location = "../myCourses/myCourses.html";
        }
        else {
            alert("invalid password")
        }
    }
};

window.onload = function () {
    var password = new Password();
    document.getElementById("passwordBTN").onclick = function () {
        password.getPassword();
    }
}
