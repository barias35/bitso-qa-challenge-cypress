export class BeneficiaryPage{

    navigate(){
        cy.visit('https://devmalta.bitso.com/r/user/beneficiaries/add');
        return this;
    }

    fillBeneficiaryForm(firstName, lastName, secondLastName, day, month, year){
       
        cy
        .get('#first_name')
        .type(firstName);

        cy
        .get('#last_name')
        .type(lastName);

        cy
        .get('#second_last_name')
        .type(secondLastName);
    
        cy
        .get('#day')
        .type(day +'{enter}')

        cy
        .get('#month')
        .type(month + '{enter}')

        cy
        .get('#year')
        .type(year + '{enter}')
    
        cy.contains('label', 'Kinship')
        .click()
        .get('#react-select-5-option-0')
        .click()
    
        cy
        .get('#percentage')
        .type(10)

        return this;
    }

    clickAddBeneficiary(){
        cy
        .get('button[data-testid="add-beneficiary-button"]')
        .click()

        return this;
    }

    typeConfirmationPin(){
        cy
        .get('#pin')
        .type(Math.random());

        return this;
    }

    clickConfirmButtonModal(){
       
        cy
        .contains('button', 'Confirm')
        .click()
        .get('div[type="error"]')
        .should('be.visible')
    
        cy
        .log('Error message shown successfully')

    }


    ValidateTheBeneficiaryPage(){
        cy
        .contains('h2', 'Add beneficiary', { timeout: 15000 })
        .should('be.visible')
        return this;
    }
}