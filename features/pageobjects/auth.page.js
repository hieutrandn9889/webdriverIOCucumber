import authenPageUI from "../interfaces/authenPageUI"
import abtractsPage from "../commons/AbtractsPage"

class AuthPage {
  // Actions
  createAccount = async (emailId, address) => {
    await authenPageUI.input_CreateAccountEmail.waitForExist({ timeout: 10000 });
    await authenPageUI.input_CreateAccountEmail.setValue(emailId);
    await authenPageUI.btn_CreateAccount.click();
    const gender1 = await $("#uniform-id_gender1")
    await gender1.waitForExist({ timeout: 10000 });
    await authenPageUI.radio_Gender.click()
    await authenPageUI.input_FirstName.setValue(address.firstName);
    await authenPageUI.input_LastName.setValue(address.lastName);
    await authenPageUI.input_Email.setValue(emailId);
    await authenPageUI.input_Password.setValue("password123");
    // DOB
    await authenPageUI.drpbx_Days.selectByIndex(12);
    await authenPageUI.drpbx_Months.selectByAttribute("value", "3");
    await authenPageUI.drpbx_Years.selectByAttribute("value", "1992");
    await authenPageUI.checkbox_NewsLetter.click();
    await authenPageUI.checkbox_UniformOption.click();
    //Address
    await authenPageUI.input_address_FirstName.setValue(address.firstName);
    await authenPageUI.input_address_LastName.setValue(address.lastName);
    await authenPageUI.input_address_Company.setValue(address.company);
    await authenPageUI.input_address_Address1.setValue(address.address1);
    await authenPageUI.input_address_Address2.setValue(address.address2);
    await authenPageUI.input_address_City.setValue("Singapore");
    await authenPageUI.drpbx_State.selectByIndex(2);
    await authenPageUI.input_PostalCode.setValue("00000");
    await authenPageUI.txt_AdditionalInfo.setValue(
      "This is My additional Information "
    );
    await authenPageUI.input_Phone.setValue("12334566");
    await authenPageUI.input_MobilePhone.setValue("+65 94657845");
    await authenPageUI.input_AddressAlias.setValue("My Address");
    await authenPageUI.btn_Submit.click();
  }
  signIn = async (username) => {
    await authenPageUI.input_login_Email.setValue(username);
    await authenPageUI.input_login_Password.setValue("password123");
    await authenPageUI.btn_SubmitLogin.click();
  }
  
  signOut = async () => {
    await authenPageUI.btn_LogOut.click();
    console.log("Logout success !!");
  }
}
export default new AuthPage();