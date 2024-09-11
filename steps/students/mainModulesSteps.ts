import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { BrowserUtility } from "../../utilities/BrowserUtility";
import { dashboardPage } from "../../globalPagesSetup";

// WRITE YOUR STEP DEFINITIONS HERE...

Then(
  "user should see {string} and {string} modules",
  async function (booksModule: string, borrowingBooksModule: string) {
    expect(await dashboardPage.booksLink.innerText()).toBe(booksModule);
    expect(await dashboardPage.borrowingBooksLink.innerText()).toBe(
      borrowingBooksModule);
  }
);
