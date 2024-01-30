import { Given, When, Then } from "@cucumber/cucumber";
import androidPage from "../pageobjects/android.page";

Given(/^I open the app$/, async () => {
  androidPage.verifyAndroidAccessibilityBtn()
});

Then(/^I click on accessibility button$/, async () => {
  androidPage.clickAccessibilityBtn()
});
