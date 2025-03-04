import SignUpPage from "../support/pageObjects/SignUpPage";
import userSignupData from "../fixtures/userSignupData.json";
import appMessages from  "../fixtures/appMessages.json";

//Signup Test Suite
describe('Signup Tests',() =>{
    beforeEach(() => {
    cy.visit(Cypress.env('URL'))
    SignUpPage.clickSignUpLink()
    })
it('New user succesfull registration',() =>{
    SignUpPage.fillNameInput(userSignupData.name)
    SignUpPage.fillEmailInput(userSignupData.email)
    SignUpPage.clickSignUpBtn()
    SignUpPage.selectTitle()
    SignUpPage.fillPasswordInput(userSignupData.password)
    SignUpPage.selectBirthDate(userSignupData.birthDay,userSignupData.birthMonth,userSignupData.birthYear)
    SignUpPage.fillFirstNameInput(userSignupData.firstName)
    SignUpPage.fillLastNameInput(userSignupData.lastName)
    SignUpPage.fillCompanyInput(userSignupData.company)
    SignUpPage.fillAdressInput(userSignupData.address)
    SignUpPage.selectCountry(userSignupData.country)
    SignUpPage.fillStateInput(userSignupData.state)
    SignUpPage.fillCityInput(userSignupData.city)
    SignUpPage.fillZipInput(userSignupData.zip)
    SignUpPage.fillMobileInput(userSignupData.mobile)
    SignUpPage.clickSubmitBtn()
    SignUpPage.elements.signupSuccesMsg().should('have.text',appMessages.signupSuccessExpectedMsg)

})
it('Register again with existing Email Adress',() =>{
    SignUpPage.fillNameInput(userSignupData.name)
    SignUpPage.fillEmailInput(userSignupData.email)
    SignUpPage.clickSignUpBtn()
    SignUpPage.elements.signupErrMsg().should('have.text',appMessages.signupErrExpectedMsg)

})
})