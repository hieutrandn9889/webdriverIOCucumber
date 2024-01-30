class HomePageUI {
    
    // WebElement Locators
    get btnSignIn() {
      return $(".login");
    }
  
    get btnSignOut() {
      return $(".logout");
    }
  
    get txtSignedUserName() {
      return $(".header_user_info .account");
    }
  
    get linkContact() {
      return $("#contact-link");
    }
  
    get imgLogo() {
      return $(".logo.img-responsive");
    }

  }
  export default new HomePageUI();
