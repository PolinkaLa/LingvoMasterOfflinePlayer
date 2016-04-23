function LoginService () {

	this.authorize = function(userName, password) {
		return true;
	}
};
var loginService = new LoginService();

