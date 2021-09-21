import { DashboardPage } from "./dashboard"

export class LoginPage{

    navigate(){
        cy.visit('/')
    }
    
    login(email, password){
        cy.get('#client_id').type(email)
        cy.get('#password').type(password)
        cy.get('button[type="submit"]').click()
        return new DashboardPage()
    }

    validateTheLoginPage(){
        cy.get('button[type="submit"]', { timeout: 15000 }).should('have.text', 'Log in')
        return this
    }

    logOut(){
        cy.visit('https://devmalta.bitso.com/logout')
    }
    
}