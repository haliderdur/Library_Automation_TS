import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { BrowserUtility } from "../../utilities/BrowserUtility";
import { dashboardPage } from "../../globalPagesSetup";

// WRITE YOUR STEP DEFINITIONS HERE...

  Then("user should see {string}",async function (moduleName: string) {
    expect(await dashboardPage.isModulePresent(moduleName)).toBeTruthy();
}
);
