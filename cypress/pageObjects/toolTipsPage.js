import BasePage from "./basePage";

class ToolTipsPage extends BasePage {
  static get url() {
    return "/tool-tips";
  }

  static get HoverButton(){
      return cy.get('#toolTipButton');
  }

  static get ValidateFirstHover(){
      return cy.get('[aria-describedby="buttonToolTip"]');
  }

  static get HoverField(){
      return cy.get('#toolTipTextField');
  }

  static get ValidateHoverField(){
      return cy.get('[aria-describedby="textFieldToolTip"]');
  }

  static get Contrary(){
      return cy.get('#texToolTopContainer');
  }

  static get ValidateContrary(){
    return cy.get('[aria-describedby="contraryTexToolTip"]');
  }

  static get ValidateTextNumberHover(){
      return cy.get('[aria-describedby="sectionToolTip"]');
  }


  static text(){
    return this.Contrary.contains(/^Contrary/).trigger('mouseover');
    }

    static number(){
    return this.Contrary.contains(/^1.10.32/).trigger('mouseover');
    }
}

export default ToolTipsPage;