import { BasePage } from "./BasePage";
import { Locator } from "@playwright/test";

export class BooksPage extends BasePage {
  // ADD YOUR LOCATORS HERE...
  // public readonly elementName: Locator = this.page.locator("locator");

  public readonly bookCategoriesDropdown: Locator = this.page.locator(
    "//select[@id='book_categories']"
  );

  async getTotalBookOptions() {
    const TOTAL_BOOK_OPTIONS = await this.bookCategoriesDropdown.locator("option").count();
    return TOTAL_BOOK_OPTIONS;
  }

  async isCategoryPresent(category: string) {
    const OPTIONS = await this.bookCategoriesDropdown.locator("option").allInnerTexts();
    return OPTIONS.includes(category);
  }
}
