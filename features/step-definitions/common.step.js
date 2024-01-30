import { Given, When, Then } from "@cucumber/cucumber";
import commonPage from "../pageobjects/common.page";
import homePage from "../pageobjects/home.page";
import homePageUI from "../interfaces/homePageUI";

Given(/^I am on the home page$/, async () => {
  await commonPage.openHomePage();
  await expect(homePageUI.imgLogo).toBeDisplayed();
  await expect(homePageUI.linkContact).toBeDisplayed();
});

When(/^Navigate to SignUp page$/, async () => {
  await homePage.navigateToLoginPage();
  console.log("Navigated to Authentication page ");
});
