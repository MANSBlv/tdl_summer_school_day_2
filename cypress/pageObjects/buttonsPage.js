import BasePage from "./basePage";

class ButtonsPage extends BasePage {
  static get url() {
    return "/buttons";
  }

  static get DoubleClick(){
      return cy.get("#doubleClickBtn");
  }

  static get ValidateDoubleClick(){
      return cy.get('#doubleClickMessage');  
  }

  static get RightClick(){
      return cy.get('#rightClickBtn');
  }

  static get ValidateRightClick(){
    return cy.get('#rightClickMessage');  
}

    static get Buttons(){
        return cy.get("[type='button']");
    }
    static ClickMe(text){
        return this.Buttons.contains(/^Click\sMe/).click();
    }

    static get ValidateClickMe(){
        return cy.get('#dynamicClickMessage');
    }


}

export default ButtonsPage;