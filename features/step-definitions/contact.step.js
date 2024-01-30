import { Given, When, Then } from "@cucumber/cucumber";
import homePageUI from "../interfaces/homePageUI";
import commonPage from "../pageobjects/common.page";
import contractPage from "../pageobjects/contact.page";

Given(/^I am on the contact page$/, async () => {
  await expect(homePageUI.linkContact).toBePresent();
  await homePageUI.linkContact.click();
  // await contractPage.verifyPageHeadingContactUs(" Customer service - Contact us");
});

Then(/^I send refund request to customer care for prev order$/, async () => {
  await contractPage.sendMessageToCustomerCare();
});