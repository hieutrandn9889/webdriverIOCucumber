import commonPage from "../pageobjects/common.page";
import utils from "../utils/utils"
import productPageUI from "../interfaces/productPageUI"
import abtractsPage from "../commons/AbtractsPage"


class ProductPage {

  //Actions

  //addProducts
  addProducts = async (table) => {
    const tableRow = table.hashes();
    for (const element of tableRow) {
      // Category
      const btnCategory = $(`//div[@id='block_top_menu']/ul/li/a[contains(text(),'${element.category}')]`)
      await btnCategory.click();

      //SubCategory ==> chạy vòng for lấy từng value sau đó getText và so sánh element.subCategory
      // productPageUI.btnSubCategory.forEach(async (value) => {
      //   const subCat = await value.getText();

      //   if (subCat === element.subCategory) {

      //     await value.click();
      //     return;
      //   }
      // });

      //SubCategory
      const btnSubCategory = $(`//*[@class='subcategory-image']/a[contains(@title,'${element.subCategory}')]`);
      await btnSubCategory.click();

      //select product
      productPageUI.txtProductTitle.forEach(async (value) => {
        const productName = await value.getText();

        if (productName === element.name) {

          await value.click();
          return;
        }
      });

      // enter quantity
      await productPageUI.inputQuantity.setValue(element.quantity)

      // Verify info in Modal
      expect(await productPageUI.textModel.getText()).toEqual(element.model);

      // Click Add to cart button
      await productPageUI.btnAddToCart.click();

      //continue shopping button
      await productPageUI.btnContinueShopping.waitForClickable({ timeout: 10000 });
      await productPageUI.btnContinueShopping.click();
    };
  }

  // verify shopping cart
  verifyShoppingCart = async (table) => {
    await productPageUI.btnShoppingCart.moveTo();
    expect(await productPageUI.listShoppingCartItems.length).toEqual(2);

    await browser.navigateTo(
      "http://automationpractice.com/index.php?controller=order"
    );

    const headingTitle = $(".page-heading");

    await headingTitle.waitForExist({ timeout: 5000 });

    await expect(await (await headingTitle.getText()).trim()).toContain(
      "SHOPPING-CART SUMMARY"
    );

    const tableRows = table.hashes();
    for (const element of tableRows) {
      console.log(element.name);
      console.log(element.model);
      console.log(element.quantity);

      // Validate Summary Table
      await productPageUI.listSummaryTableRow
        //filter ==> lọc các name = name trong feature file 
        .filter(
          async (e) =>
            (await (await e.$("td.cart_description p")).getText()) ===
            element.name
        )
        .forEach(async (ele) => {
          console.log("Inside for after filter");

          const name = await (await ele.$("td.cart_description p")).getText();

          const model = await (await ele.$(".cart_ref")).getText();

          const quantity = await (
            await ele.$(".cart_quantity .cart_quantity_input.form-control.grey")
          ).getValue();

          await expect(name).toEqual(element.name);
          await expect(model).toEqual(element.model);
          await expect(quantity).toEqual(element.quantity);
        });
    }
  };

  // buy product
  buyProduct = async () => {
    await productPageUI.btnContinueCheckoutSummary.click();
    await commonPage.verifyPageHeading("ADDRESSES")
  
    //Address Validation
    await expect(
      await productPageUI.txt_DeliveryAddressFirstNameLastName.getText()
    ).toEqual(
      utils.staticData.address.firstName +
      " " +
      utils.staticData.address.lastName
    );

    await expect(await productPageUI.txt_DeliveryAddressCompany.getText()).toEqual(
      utils.staticData.address.company
    );

    await expect(await productPageUI.txt_DeliveryAdd_Add1_Add2.getText()).toEqual(
      utils.staticData.address.address1 +
      " " +
      utils.staticData.address.address2
    );

    // Navigate to Shipping page
    await productPageUI.btnContinueCheckout.click();
    
    // verify heading
    await commonPage.verifyPageHeading("SHIPPING");

    // Validate pop up when not checked for Terms and Services
    await productPageUI.btnContinueCheckout.click();

    await expect(await productPageUI.txt_ErrorModal.isDisplayed()).toBeTruthy(); // check that always true

    await expect(await productPageUI.txt_ErrorModal.getText()).toEqual(
      "You must agree to the terms of service before continuing."
    );

    // Close Modal
    await productPageUI.btnCloseModalError.click();

    //click Terms& Condition Chekcbox
    await $("#cgv").click();

    await productPageUI.btnContinueCheckout.click();
    
    // verify heading
    await commonPage.verifyPageHeading("PLEASE CHOOSE YOUR PAYMENT METHOD");
    
    // clicking on "Pay by bank wire" button
    await productPageUI.linkCheck.click();

    // verify heading
    await commonPage.verifyPageHeading("ORDER SUMMARY");

    await productPageUI.btnContinueCheckout.click();

    await expect(await productPageUI.alertPaymentSuccess.isDisplayed()).toBeTruthy();

    await expect(await productPageUI.alertPaymentSuccess.getText()).toEqual(
      "Your order on My Store is complete."
    );


  }


}
export default new ProductPage();