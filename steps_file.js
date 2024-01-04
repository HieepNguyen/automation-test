// in this file you can append custom step methods to 'I' object

module.exports = function () {
	return actor({
		// Define custom steps here, use 'this' to access default methods of I.
		// It is recommended to place a general 'login' function here.
		login(username, password) {
			this.amOnPage("/auth/login");
			this.retry(3).waitForText("Login", 3);
			this.fillField('input[name="username"]', username);
			this.fillField('input[name="password"]', secret(password));
			this.click("Login");
			this.retry(3).waitForText("Dashboard", 3);
			this.see("Dashboard");
		},
	});
};
