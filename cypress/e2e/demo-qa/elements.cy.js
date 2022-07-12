import CheckBoxPage from "../../pageObjects/checkBoxPage";
import RadioButtonsPage from "../../pageObjects/radioButtonsPage";
import TextBoxPage from "../../pageObjects/textBoxPage";
import WebTablespage from "../../pageObjects/webTablesPage";
import ButtonsPage from "../../pageObjects/buttonsPage";

context("Elements Page", () => {
  /*context("Text box scenarios", () => {
    beforeEach(() => {
      TextBoxPage.visit();
    });*/

    // Create texbox scenario
    // fill in textboxes with necessary information
    // validate the paragraphs
    it("Filling in Text Boxes", () => {
      /*TextBoxPage.FullName.type("Random Random");
      TextBoxPage.Email.type("Random@hotmail.com");
      TextBoxPage.CurretntAddress.type("Random Street 1");
      TextBoxPage.PermanentAddress.type("Random Street 2");
      TextBoxPage.SubmitButton.click();
      TextBoxPage.Output.contains('Random Random');
      
      TextBoxPage.Output.contains('Random@hotmail.com');
      TextBoxPage.Output.contains('Random Street 1');
      TextBoxPage.Output.contains('Random Street 2');*/
    });
  //});

  /*context("Check box scenarios", () => {
    beforeEach(() => {
      CheckBoxPage.visit();
    });*/
    it("CheckBoxes", () => {
    /*CheckBoxPage.Expand.click();
    CheckBoxPage.Leafs.contains("Notes").click();
    CheckBoxPage.Leafs.contains("React").click();
    CheckBoxPage.Leafs.contains("Angular").click();
    CheckBoxPage.Leafs.contains("General").click();
    CheckBoxPage.Leafs.contains("Excel File.doc").click();
    CheckBoxPage.Results.contains('notes');
    CheckBoxPage.Results.contains('react');
    CheckBoxPage.Results.contains('angular');
    CheckBoxPage.Results.contains('general');
    CheckBoxPage.Results.contains('excelFile');*/





    });
    // Create CheckBoxPage page object
    // Create checkbox scenario 1:
    // Click the "+"/expand button
    // Click Notes, React, Angular, General, Excel File.doc
    // Validate the clicked checkboxes
    /*it("CheckBoxes2", () => {
      CheckBoxPage.Expand.click();
      CheckBoxPage.Leafs.contains('Office').click();
      CheckBoxPage.Results.contains('office');
      CheckBoxPage.Results.contains('public');
      CheckBoxPage.Results.contains('private');
      CheckBoxPage.Results.contains('classified');
      CheckBoxPage.Results.contains('general');
      
    });*/
    // Create checkbox scenario 2:
    // Click expand button
    // Click Office
    // Validate the checked checkboxes
  });

  /*context("Radio button scenarios", () => {
    beforeEach(() => {
      RadioButtonsPage.visit();
    });
    it("RadioButtons", () => {
      RadioButtonsPage.YesButton.click();
      RadioButtonsPage.ValidateYes.contains('Yes');
      RadioButtonsPage.ImpressiveButton.click();
      RadioButtonsPage.ValidateYes.contains('Impressive');
      RadioButtonsPage.NoButton.should('be.visible')
      RadioButtonsPage.ValidateNoButton.should('be.disabled');*/
    // Create RadioButtons page object
    // Scenario 1:
    // Click yesButton
    // validate the message
    // click impressiveButton
    // validate the message
    // noButton - validate that the button exists but is disabled
   //});
  //});

  context("Web tables scenarios", () => {
    context("Radio button scenarios", () => {
      beforeEach(() => {
        WebTablespage.visit();
      });
      it("WebTables", () => {
        /*WebTablespage.AddButton.click();
        WebTablespage.FirstName.type("Random");
        WebTablespage.LastName.type("HellaRandom");
        WebTablespage.Email.type('Random@gmail.com');
        WebTablespage.Age.type("90");
        WebTablespage.Salary.type('1500');
        WebTablespage.Department.type('Festivaletaju');
        WebTablespage.SubmitButtton.click();
        WebTablespage.ValidateInputt.contains("Random").should('be.visible');
        WebTablespage.ValidateInputt.contains("HellaRandom").should('be.visible');
        WebTablespage.ValidateInputt.contains("Random@gmail.com").should('be.visible');
        WebTablespage.ValidateInputt.contains("90").should('be.visible');
        WebTablespage.ValidateInputt.contains("Festivaletaju").should('be.visible');*/
        
    // Create WebTables page object
    // Create scenario 1:
    // Click add record button
    // fill in the necessary information
    // click submit button
    // search for the user based on previously added information
    // validate tha the user is visible

    // Create Scenario 2:
    // Delete all table rows
    // Validate that we see text - No rows found
      });
      it("WebTables2", () => {
        /*
          WebTablespage.DeleteRecordsByEmail("kierra@example.com");
          WebTablespage.DeleteRecordsByEmail("alden@example.com"); 
          WebTablespage.DeleteRecordsByEmail("cierra@example.com"); 
          WebTablespage.ValidateEmpty.contains('No rows found');
        */
      });
    });
  });

  context("Buttons scenarios", () => {
    context("Radio button scenarios", () => {
      beforeEach(() => {
        ButtonsPage.visit();
      });
    it("buttons", () => {
      ButtonsPage.DoubleClick.dblclick();
      ButtonsPage.ValidateDoubleClick.contains("You have done a double click");
      ButtonsPage.RightClick.rightclick();
      ButtonsPage.ValidateRightClick.contains("You have done a right click");
      ButtonsPage.ClickMe("Click Me");
      ButtonsPage.ValidateClickMe.contains("You have done a dynamic click");

    // Create buttons clicking scenario
    // Create Buttons page
    // Check documentation https://docs.cypress.io/api/commands/and for how to perform different types of clicking
    // Click Double click button
    // Validate the double click message
    // Click rightclick button
    // Validate the right click message
    // Do dynamic click
    // Validate dynamic click message
  });
});
});
