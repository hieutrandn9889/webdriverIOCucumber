class ContactPageUI {

  // WebElement Locators
  get drpdownSubjectHeading() {
    return $("#id_contact");
  }

  get inputEmailAddress() {
    return $("#email");
  }

  get dropdownOrderReference() {
    return $(".selector span+select[name='id_order']");
  }

  get btnSubmit() {
    return $("#submitMessage");
  }

  get inputMessage() {
    return $("#message");
  }

}
export default new ContactPageUI();
