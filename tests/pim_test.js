Feature("PIM");

Before(({ I, login }) => {
	login("admin");
	I.amOnPage("/pim/viewEmployeeList");
	I.see("PIM");
});

Scenario("Test Search employee", async ({ I }) => {
	I.see("Employee Information");
	const isExpand = await I.grabCssPropertyFrom(
		".oxd-table-filter-area",
		"display"
	);
	console.log(isExpand);
	// if (isExpand === "none") {
	// 	I.click(".oxd-table-filter-header-options i.oxd-icon.bi-caret-up-fill");
	// }
});

// Scenario("Test Logout", ({ I }) => {
// 	I.click(".oxd-userdropdown");
// 	I.waitForText("Logout");
// 	I.click("Logout");
// });
