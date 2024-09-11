import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { BrowserUtility } from '../utilities/BrowserUtility';
import { booksPage, dashboardPage } from '../globalPagesSetup';


// WRITE YOUR STEP DEFINITIONS HERE...

When('user clicks the Books section', async function () {
    await dashboardPage.booksLink.click();
  });
  
  When('user clicks books category dropdown', async function () {
    await booksPage.bookCategoriesDropdown.click();
  });
  
  Then('user should see all {int} book categories in the dropdown', async function (int: number) {
    expect(await booksPage.getTotalBookOptions()).toBe(int);
  });
  
  Then('book category name {string} should be inlcuded in the categories', async function (bookCategoryName: string) {
      expect(await booksPage.isCategoryPresent(bookCategoryName)).toBeTruthy();
  });