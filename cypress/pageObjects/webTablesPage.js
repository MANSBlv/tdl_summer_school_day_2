import BasePage from "./basePage";

class WebTablespage extends BasePage {
  static get url() {
    return "/webtables";
  }
  static get AddButton(){
      return cy.get('#addNewRecordButton');
  }

  static get FirstName(){
      return cy.get('#firstName');
  }

  static get LastName(){
      return cy.get('#lastName');
  }

  static get Email(){
      return cy.get('#userEmail');
  }

  static get Age(){
      return cy.get('#age');
  }

  static get Salary(){
      return cy.get('#salary');
  }

  static get Department(){
      return cy.get('#department');
  }

  static get SubmitButtton(){
      return cy.get('#submit');
  }

  static get ValidateInputt(){
      return cy.get('[class="rt-tr-group"]');
  }

  static DeleteRecordsByEmail(email){
    return this.ValidateInputt.contains(email).parent().find("[title='Delete']").click();
  }

  static get ValidateEmpty(){
      return cy.get("[class='rt-noData']");
  }

}

export default WebTablespage;