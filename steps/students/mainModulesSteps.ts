import { Given, When, Then, DataTable } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { BrowserUtility } from "../../utilities/BrowserUtility";
import { dashboardPage } from "../../globalPagesSetup";

// WRITE YOUR STEP DEFINITIONS HERE...


Then("user should see following modules", async function (dataTable: { raw(): string[][] }) {

    const EXPECTED_MODULES: string[] = dataTable.raw().map((row: string[]) => row[0]);
    console.log(` Expected modules from step: ${EXPECTED_MODULES}`);
    
    const PRESENT_MODULES: string[] = await dashboardPage.getPresentModules(EXPECTED_MODULES);
    console.log(`Modules found on page: ${PRESENT_MODULES}`);
    
    EXPECTED_MODULES.forEach((module: string) => {
        expect(PRESENT_MODULES).toContain(module);
    });
});