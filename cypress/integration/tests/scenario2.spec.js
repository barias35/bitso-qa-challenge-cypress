/// <reference types="Cypress" />
import { BeneficiaryPage } from "../../pages/beneficiary";
import {LoginPage} from "../../pages/login";
const login = new LoginPage();
describe("Scenario 2", () => { 

  beforeEach(() => {
   login.navigate()
  });

  it('Verify the error message for incorrect pin is displayed', () => {
    
    var dashboardPage = login
    .validateTheLoginPage()
    .login('ing.bresly@gmail.com', 'Qa123test@')

    dashboardPage.validateTheDashboardPage()

    var beneficiaryPage = new BeneficiaryPage().navigate()

    cy
    .fixture('beneficiary')
    .then(data =>{

      beneficiaryPage.fillBeneficiaryForm(
        data.firstName,
        data.lastName,
        data.secondLastName,
        data.birthDate.day,
        data.birthDate.month,
        data.birthDate.year,
      )
    })

    beneficiaryPage
    .clickAddBeneficiary()
    .typeConfirmationPin()
    .clickConfirmButtonModal()
    })
  })

