import utils from "../utils/utils"
import contactPageUI from "../interfaces/contactPageUI"
import abtractsPage from "../commons/AbtractsPage"

class ContactPage {
    
  
    //Actions
  
    sendMessageToCustomerCare = async () => {
      await contactPageUI.drpdownSubjectHeading.selectByVisibleText("Customer service");

      await expect(await contactPageUI.inputEmailAddress.getValue()).toEqual(
        utils.staticData.email
      );
  
      await contactPageUI.dropdownOrderReference.selectByIndex(1);
  
      await contactPageUI.inputMessage.setValue(
        "Hi There,\n" +
        "I got some issue with my product which i bought yesterday.Can you please help me with refund the amount!\n" +
        "Thanks"
      );
  
      await contactPageUI.btnSubmit.click();
    };

    // verify contact us
    verifyPageHeadingContactUs = async (title) => {
        await browser.waitUntil(
          async () => (await $("//h1[contains(text(), 'Customer service - Contact us')]").getText()) === title,
          {
            timeout: 10000,
            timeoutMsg: "expected text is different after 10s",
          }
        );
        const headingTitle = await $("//h1[contains(text(), 'Customer service - Contact us')]");
        expect(await headingTitle.getText()).toEqual(title);
      };
    
  }
  
  export default new ContactPage();