Feature("PIM");

Before(({ I, login }) => {
	login("admin");
	I.amOnPage("/pim/viewEmployeeList");
	I.see("PIM");
});

Scenario("Add employee", ({ I }) => {
	I.click({
		xpath: "/html/body/div/div[1]/div[2]/div[2]/div/div[2]/div[1]/button",
	});
	I.seeInCurrentUrl("addEmployee");
});

// Scenario("Test Search employee", async ({ I }) => {
// 	I.see("Employee Name");
// 	I.fillField(
// 		{
// 			xpath:
// 				"/html/body/div[1]/div[1]/div[2]/div[2]/div/div[1]/div[2]/form/div[1]/div/div[1]/div/div[2]/div/div/input",
// 		},
// 		"test"
// 	);
// 	I.click("Search", '.oxd-form-actions button[type="submit"]');
// 	I.waitForVisible({
// 		xpath: "/html/body/div/div[1]/div[2]/div[2]/div/div[2]/div[3]/div/div[2]",
// 	});
// 	await within(
// 		{
// 			xpath: "/html/body/div/div[1]/div[2]/div[2]/div/div[2]/div[3]/div/div[2]",
// 		},
// 		() => {
// 			I.seeNumberOfElements(".oxd-table-card", 1);
// 		}
// 	);
// });

// Scenario("Test Logout", ({ I }) => {
// 	I.click(".oxd-userdropdown");
// 	I.waitForText("Logout");
// 	I.click("Logout");
// });
