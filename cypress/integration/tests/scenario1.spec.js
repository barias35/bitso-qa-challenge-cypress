/// <reference types="Cypress" />

import { DashboardPage } from "../../pages/dashboard";
import {LoginPage} from "../../pages/login";
const login = new LoginPage();

describe("Scenario 1", () => { 

  beforeEach('navigate to login page', () => {
    login.navigate();
  });

  it('Verify the error message is displayed', () => {

   login.validateTheLoginPage();
   let dashboardPage;
   cy
   .fixture('user')
   .then(data =>{

    dashboardPage = login.login(data.email, data.password)
    dashboardPage.validateTheDashboardPage();
   })

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