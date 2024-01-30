import homPageUI from "../interfaces/homePageUI"
import AbtractsPage from "../commons/AbtractsPage"

class HomePage extends AbtractsPage {

  // Actions
  async navigateToLoginPage() {
    await this.clickElement(homPageUI.btnSignIn)
    console.log("Sign In Button Is Clicked");
  }
}
export default new HomePage()