class ProductPageUI {

    //   get category() {
    //     return $("//div[@id='block_top_menu']/ul/li/a[contains(text(),'Women')]");
    //   }
  
    get btnSubCategory() {
      return $$(".subcategory-name");
    }
  
    get txtProductTitle() {
      return $$(".right-block .product-name");
    }
  
    get inputQuantity() {
      return $("#quantity_wanted");
    }
  
    get btnAddToCart() {
      return $("#add_to_cart button");
    }
  
    get btnContinueShopping() {
      return $(".button-container .continue");
    }
  
    get textModel() {
      return $("#product_reference .editable");
    }
  
    get btnShoppingCart() {
      return $(".shopping_cart");
    }
  
    get listShoppingCartItems() {
      return $$(".cart_block_list .products dt");
    }
  
    get btnCartCheckout() {
      return $(".cart_block_list .cart-buttons a");
    }
  
    get listSummaryTableRow() {
      return $$("#cart_summary tbody tr");
    }
  
    get btnContinueCheckoutSummary() {
      return $(".cart_navigation.clearfix a.standard-checkout");
    }
    get btnContinueCheckout() {
      return $(".cart_navigation.clearfix button");
    }
  
    get txt_DeliveryAddressFirstNameLastName() {
      return $("#address_delivery li.address_firstname.address_lastname");
    }
  
    get txt_DeliveryAddressCompany() {
      return $("#address_delivery li.address_company");
    }
  
    get txt_DeliveryAdd_Add1_Add2() {
      return $("#address_delivery li.address_address1.address_address2");
    }
  
    get txt_ErrorModal() {
      return $(".fancybox-error");
    }
  
    get btnCloseModalError() {
      return $(".fancybox-item.fancybox-close");
    }
  
    get linkCheck() {
      return $("#HOOK_PAYMENT div div p.payment_module a.cheque");
    }
  
    get linkBankTransfer() {
      return $("#HOOK_PAYMENT div div p.payment_module a.bankwire");
    }
  
    get alertPaymentSuccess() {
      return $(".alert.alert-success");
    }
  
  }
  export default new ProductPageUI();
  