/// <reference types="Cypress" />
import { BeneficiaryPage } from "../../pages/beneficiary";
import {LoginPage} from "../../pages/login";
const login = new LoginPage();
describe("Scenario 2", () => { 

  beforeEach(() => {
     //I was getting an unusual redirect, even thought I log out after finish each scenario
    login.logOut()
   login.navigate()
  });

  it('Verify the error message for incorrect pin is displayed', () => {

    login.validateTheLoginPage();
    let dashboardPage;

    cy
    .fixture('user')
    .then(data =>{
 
     dashboardPage = login.login(data.email, data.password)
     dashboardPage.validateTheDashboardPage();
    })
 

   var beneficiaryPage = new BeneficiaryPage().navigate()
   beneficiaryPage.ValidateTheBeneficiaryPage()

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


    login.logOut();

    })


  })

