import { BasePage } from "./BasePage";
import { Locator } from "@playwright/test";

export class LoginPage extends BasePage {
  public readonly usernameInput: Locator = this.page.locator(
    "//input[@id='inputEmail']"
  );

  public readonly passwordInput: Locator = this.page.locator(
    "//input[@id='inputPassword']"
  );

  public readonly loginButton: Locator = this.page.locator(
    "//button[text()='Sign in']"
  );

  public readonly loginErrorMessage: Locator = this.page.locator(
    "//div[@class='alert alert-danger' and @role='alert']"
  );

  async enterUsername(username: string | null = null) {
    if (username == null || username == "admin") {
      await this.usernameInput.fill(this.adminUsername);
    } else if (username == null || username == "student") {
      await this.usernameInput.fill(this.studentUsername);
    } else {
      await this.usernameInput.fill(username);
    }
  }

  async enterPassword(password: string | null = null) {
    if (password == null || password == "admin") {
      await this.passwordInput.fill(this.adminPassword);
    } else if (password == null || password == "student") {
      await this.passwordInput.fill(this.studentPassword);
    } else {
      await this.passwordInput.fill(password);
    }
  }

  async clickLoginButton() {
    await this.loginButton.click();
  }

  async login(userType: string) {
    switch (userType) {
      case "student":
        await this.enterUsername(this.studentUsername);
        await this.enterPassword(this.studentPassword);
        await this.clickLoginButton();
        break;
      case "admin":
        await this.enterUsername(this.adminUsername);
        await this.enterPassword(this.adminPassword);
        await this.clickLoginButton();
        break;
    }
  }
}
