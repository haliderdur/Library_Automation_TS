import { BasePage } from "./BasePage";
import { Locator } from "@playwright/test";

export class DashboardPage extends BasePage {
  // ADD YOUR LOCATORS HERE...
  // public readonly elementName: Locator = this.page.locator("locator");

  public readonly userProfileImage: Locator = this.page.locator("//img[@id='user_avatar']");

  public readonly logoutButton: Locator = this.page.getByText("Log Out");

  public readonly booksLink: Locator = this.page.locator("//span[@class='title' and .='Books']");

  public readonly borrowingBooksLink: Locator = this.page.locator("//span[@class='title' and .='Borrowing Books']");

  
}
