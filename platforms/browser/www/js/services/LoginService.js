function LoginService () {

	this.identification = function() {
		var userName = document.getElementById("login").value;
		if (userName == "miss.lappo@yandex.ru") {
			window.location = "password.html";
		}
		else {
			alert("invalid login")
		}
	}
};

window.onload = function () {
	var login = new LoginService();
    document.getElementById("loginBTN").onclick = function () {
    	login.identification();
    }
}
