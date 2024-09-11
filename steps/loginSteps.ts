import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { loginPage } from "../globalPagesSetup";
import { BrowserUtility } from "../utilities/BrowserUtility";

// WRITE YOUR STEP DEFINITIONS HERE...

Given("user is already on the login page", async function () {
  await loginPage.page.goto(loginPage.librarayUrl);
});

When("user enters valid username {string}", async function (userType: string) {
  await loginPage.enterUsername(userType);
});

When("user enters valid password {string}", async function (userType: string) {
  await loginPage.enterPassword(userType);
});

When("user clicks the login button", async function () {
  await loginPage.clickLoginButton();
});

Then("user login successfully to the homepage", async function () {
  // verify the title is Library
  await expect(loginPage.page).toHaveTitle("Library");
});

When(
  "user enters invalid username {string}",
  async function (invalid_username: string) {
    await loginPage.enterUsername(invalid_username);
  }
);

When(
  "user enters invalid password {string}",
  async function (invalid_password: string) {
    await loginPage.enterPassword(invalid_password);
  }
);

Then("user should see {string} error pop-up", async function (errorMessage: string) {
  await expect(loginPage.loginErrorMessage).toHaveText(errorMessage);
});
