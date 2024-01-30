import utils from "../utils/utils"
import myaccountPageUI from "../interfaces/myaccountPageUI"
import abtractsPage from "../commons/AbtractsPage"

class MyAccount {
  

    // Actions

    navigateToAddressDynamic = async () => {
        await myaccountPageUI.btnMyAddress.waitForExist({ timeout: 20000 });
        await myaccountPageUI.btnMyAddress.click();

        //address validation
        const name = await myaccountPageUI.txtGetAddressName.getText();
        const companyAddress = await myaccountPageUI.txtAddressCompany.getText();
        const address1 = await myaccountPageUI.txtAddress1.getText();
        const address2 = await myaccountPageUI.txtAddress2.getText();

        expect(name).toBe(
            utils.dynamicData.address.firstName + " " + utils.dynamicData.address.lastName
        );
        expect(companyAddress).toBe(
            utils.dynamicData.address.company
        );
        expect(address1).toBe(
            utils.dynamicData.address.address1
        );
        expect(address2).toBe(
            utils.dynamicData.address.address2
        );
    }

    navigateToAddressStatic = async () => {
        await myaccountPageUI.btnMyAddress.waitForExist({ timeout: 20000 });
        await myaccountPageUI.btnMyAddress.click();

        //address validation
        const name = await myaccountPageUI.txtGetAddressName.getText();
        const companyAddress = await myaccountPageUI.txtAddressCompany.getText();
        const address1 = await myaccountPageUI.txtAddress1.getText();
        const address2 = await myaccountPageUI.txtAddress2.getText();

        expect(name).toBe(
            utils.staticData.address.firstName + " " + utils.staticData.address.lastName
        );
        expect(companyAddress).toBe(
            utils.staticData.address.company
        );
        expect(address1).toBe(
            utils.staticData.address.address1
        );
        expect(address2).toBe(
            utils.staticData.address.address2
        );
    }
    
  }
export default new MyAccount();