const { setHeadlessWhen, setCommonPlugins } = require("@codeceptjs/configure");
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

const user = "Admin";
const password = "admin123";

/** @type {CodeceptJS.MainConfig} */
exports.config = {
	tests: "./tests/*_test.js",
	output: "./output",
	helpers: {
		Puppeteer: {
			url: "https://opensource-demo.orangehrmlive.com/web/index.php",
			show: true,
			// windowSize: "1200x900",
			chrome: {
				arg: ["--start-fullscreen"],
			},
			waitForNavigation: ["domcontentloaded", "networkidle0"],
		},
	},
	include: {
		I: "./steps_file.js",
	},
	plugins: {
		retryFailedStep: {
			enabled: true,
			retries: 5,
		},
		autoLogin: {
			enabled: true,
			saveToFile: true,
			inject: "login",
			users: {
				admin: {
					// login function is defined in `steps_file.js`
					login: (I) => I.login(user, password),
					// if we see `CodeceptJS Projects` on page, we assume we are logged in
					check: (I) => {
						//   pause();
						I.amOnPage("/");
						//  console.log('check');
						I.see("Dashboard");
					},
				},
			},
		},
	},
	mocha: {
		reporterOptions: {
			reportDir: "output",
		},
	},
	name: "automation-test",
};
