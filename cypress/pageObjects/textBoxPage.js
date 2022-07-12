import BasePage from "./basePage";

class TextBoxPage extends BasePage {
  static get url() {
    return "/text-box";
  }

  static get FullName() {
    return cy.get("#userName");;
  }

  static get Email(){
    return cy.get("#userEmail");
  }

  static get CurretntAddress(){
    return cy.get("#currentAddress");
  }

  static get PermanentAddress(){
    return cy.get("#permanentAddress");
  }

  static get SubmitButton(){
    return cy.get("#submit");
  }

  static get Output(){
    return cy.get("#output");
  }
}

export default TextBoxPage;
