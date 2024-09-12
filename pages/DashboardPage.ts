import { BrowserUtility } from "../utilities/BrowserUtility";
import { BasePage } from "./BasePage";
import { Locator } from "@playwright/test";

export class DashboardPage extends BasePage {
  // ADD YOUR LOCATORS HERE...
  // public readonly elementName: Locator = this.page.locator("locator");

  public readonly userProfileImage: Locator = this.page.locator("//img[@id='user_avatar']");

  public readonly logoutButton: Locator = this.page.getByText("Log Out");

  public readonly booksLink: Locator = this.page.locator("//span[@class='title' and .='Books']");

  public readonly borrowingBooksLink: Locator = this.page.locator("//span[@class='title' and .='Borrowing Books']");

  public readonly modules: Locator = this.page.locator("ul[id='menu_item']");

  async getPresentModules(expectedModules: string[]): Promise<string[]> {
    await this.page.waitForLoadState("networkidle");

    const ALL_MODULES = await this.modules.locator("li a span").allInnerTexts();
    const PRESENT_MODULES = expectedModules.filter(expected => 
        ALL_MODULES.some(actual => 
            actual.trim().toLowerCase() === expected.trim().toLowerCase()
        )
    );
    return PRESENT_MODULES;
}

}
