
export class DashboardPage{

    validateTheDashboardPage(){

        cy.wait(2000);

        cy
        .contains('h1', 'Wallet', { timeout: 15000 })
        .should('be.visible')

        cy
        .log('Login successfully!')

        return this;
        }

    clickToDepositButtonByToken(tokenName){
        
        cy
        .contains('small', tokenName)
        .click()
      
        cy
        .contains('small', 'Deposit')
        .should('be.visible')
  
        cy
        .contains('small', 'Deposit')
        .click()
        .get('.modal-content')
        .should('be.visible')

        return this;
    }
}