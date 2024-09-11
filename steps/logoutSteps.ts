import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { BrowserUtility } from "../utilities/BrowserUtility";
import { dashboardPage, loginPage } from "../globalPagesSetup";
import { BasePage } from "../pages/BasePage";

// WRITE YOUR STEP DEFINITIONS HERE...

Given(
  "user is already logged in as {string}",
  async function (userType: string) {
    await loginPage.login(userType);
  }
);

When(
  "user clicks the user profile on top right corner of the page",
  async function () {
    await dashboardPage.userProfileImage.click();
  }
);

When("user clicks the logout button", async function () {
  await dashboardPage.logoutButton.click();
});

Then("user should be logged out from the app", async function () {
  await expect(loginPage.page).toHaveTitle("Login - Library")
});
