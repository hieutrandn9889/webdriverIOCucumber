
import androidPageUI from "../interfaces/androidPageUI"
import AbtractsPage from "../commons/AbtractsPage"

class AndroidPage extends AbtractsPage {

  verifyAndroidAccessibilityBtn = async (title) => {
    await browser.waitUntil(
      async () => (await $(".Accessibility").getText()) === title,
      {
        timeout: 10000,
        timeoutMsg: "expected text is different after 10s",
      }
    );
    const headingTitle = await $(".Accessibility");
    expect(await headingTitle.getText()).toEqual(title);
  };
  async clickAccessibilityBtn() {
    await this.clickElement(androidPageUI.accessibilityBtn)
    console.log("Sign In Button Is Clicked");
  }

};
export default new AndroidPage();