import BasePage from "./basePage";

class ButtonsPage extends BasePage {
  static get url() {
    return "/progress-bar";
  }

  static get StartButton(){
      return cy.get('#startStopButton');
  }

  static get BarInfo(){
      return cy.get('[class="progress-bar bg-info"]');
  }
}

export default ButtonsPage;
