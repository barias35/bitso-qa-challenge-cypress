/// <reference types="Cypress" />

import {LoginPage} from "../../pages/login";
const login = new LoginPage();

describe("Scenario 1", () => { 

  beforeEach('navigate to login page', () => {
    login.navigate();
  });

  it('Verify the error message is displayed', () => {

   login.validateTheLoginPage()

   var dashboardPage = login.login('ing.bresly@gmail.com', 'Qa123test@')
   dashboardPage.validateTheDashboardPage();

    cy
    .fixture('cryptos')
    .then(data =>{
      data.tokens.forEach(t=>{

        dashboardPage.clickToDepositButtonByToken(t)
        cy.get('span[data-testid="modal-close"]').click()

      })
    })

  })

});