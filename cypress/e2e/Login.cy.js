import LoginPage from "../support/pageObjects/LoginPage";
import appMessages from "../fixtures/appMessages.json";
import userLoginData from "../fixtures/userLoginData.json";

//Login Test suite
describe('Login Tests', () => {
    beforeEach(() => {
        cy.visit(Cypress.env('URL'))
        
    })

    it('Login with valid credentials', () => {
        const validUser = userLoginData.users[0];
        LoginPage.clickLoginLink();
        LoginPage.fillEmailInput(validUser.email);
        LoginPage.fillPasswordInput(validUser.password);
        LoginPage.clickLoginBtn();
        LoginPage.elements.loginSuccesMsg().should('have.text', appMessages.loginSuccessExpectedMsg);
    })

    it('Login with invalid credentials', () => {
        const inValidUser = userLoginData.users[1];
        LoginPage.clickLoginLink();
        LoginPage.fillEmailInput(inValidUser.email);
        LoginPage.fillPasswordInput(inValidUser.password);
        LoginPage.clickLoginBtn();
        LoginPage.elements.loginErrMsg().should('have.text', appMessages.loginErrExpectedMsg);
    })
})