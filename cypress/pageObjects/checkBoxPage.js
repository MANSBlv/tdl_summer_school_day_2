import BasePage from "./basePage";

class CheckBoxPage extends BasePage {
  static get url() {
    return "/checkbox";
  }

  static get Home(){
      return cy.get('#tree-node-home');
  }
}

export default CheckBoxPage;