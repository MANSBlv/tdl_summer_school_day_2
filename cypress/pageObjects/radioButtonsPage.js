import BasePage from "./basePage";

class RadioButtonsPage extends BasePage {
  static get url() {
    return "/radio-button";
  }

  static get YesButton(){
      return cy.get("[for='yesRadio']");
  }

  static get ValidateYes(){
      return cy.get('[class="text-success"]');
  }

  static get ImpressiveButton(){
      return cy.get('[for="impressiveRadio"]');
  }
  static get NoButton(){
    return cy.get('[for="noRadio"]');
    }
    static get ValidateNoButton(){
        return cy.get('[class="custom-control-input disabled"]');
    }
}

export default RadioButtonsPage;