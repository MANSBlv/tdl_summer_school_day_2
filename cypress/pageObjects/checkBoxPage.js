import BasePage from "./basePage";

class CheckBoxPage extends BasePage {
  static get url() {
    return "/checkbox";
  }

  static get Expand(){
      return cy.get('.rct-option-expand-all');
  }

  static get Leafs(){
      return cy.get('.rct-text');
  }

  static get Results(){
      return cy.get('#result');
  }

 
}

export default CheckBoxPage;