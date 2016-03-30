function PasswordService () {

	this.autentification = function() {
		var password = document.getElementById("password").value;
        if (password == "123") {
     		window.location = "../myCourses/myCourses.html";
        }
        else {
        	alert("invalid password")
        }
	}
};

window.onload = function () {
	var password = new PasswordService();
    document.getElementById("passwordBTN").onclick = function () {
        password.autentification();
    }
}
