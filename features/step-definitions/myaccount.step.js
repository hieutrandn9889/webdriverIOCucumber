import { Given, When, Then } from "@cucumber/cucumber";
import myaccount from "../pageobjects/myaccount.page";

Then(/^I shall verify the address information in my addresses (dynamic|static) section$/, async (credentialAddress) => {
  if (credentialAddress == "dynamic") {
    await myaccount.navigateToAddressDynamic();
  } else {
    await myaccount.navigateToAddressStatic();
  }
  
});
