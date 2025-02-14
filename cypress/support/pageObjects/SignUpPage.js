class SignUpPage {

elements = {
    signUpLink: () => cy.get('a[href="/login"]'),
    nameInput: () => cy.get('input[data-qa="signup-name"]'),
    emailInput: () => cy.get('input[data-qa="signup-email"]'),
    signUpBtn: () => cy.get('button[data-qa="signup-button"]'),
    titleCheckBox: () => cy.get('#id_gender1'),
    passwordInput: () => cy.get('#password'),
    daysDD: () => cy.get('#days'),
    monthsDD: () => cy.get('#months'),
    yearsDD: () => cy.get('#years'),
    firstNameInput:() => cy.get('#first_name'),
    lastNameInput: () => cy.get('#last_name'),
    companyInput: () => cy.get('#company'),
    adressInput: () => cy.get('#address1'),
    countryDD: () => cy.get('#country'),
    stateInput: () => cy.get('#state'),
    cityInput: () => cy.get('#city'),
    zipCodeInput: () => cy.get('#zipcode'),
    mobileInput: () => cy.get('#mobile_number'),
    submitButton: () => cy.get('button[data-qa="create-account"]'),
    signupSuccesMsg: () => cy.get('h2[data-qa="account-created"] b'),
    signupErrMsg: () => cy.get('.signup-form p')

}

clickSignUpLink(){
    this.elements.signUpLink().click();
}

fillNameInput(name)
{
    this.elements.nameInput().type(name);

}

fillEmailInput(email)
{
    this.elements.emailInput().type(email);

}

clickSignUpBtn()
{
    this.elements.signUpBtn().click();
 
}


selectTitle(){
    this.elements.titleCheckBox().check();
}

fillPasswordInput(password)
{
    this.elements.passwordInput().type(password);
}

selectBirthDate(day,month,year)
{
    this.elements.daysDD().select(day);
    this.elements.monthsDD().select(month);
    this.elements.yearsDD().select(year);
}

fillFirstNameInput(fName)
{
    this.elements.firstNameInput().type(fName);

}

fillLastNameInput(lName)
{
    this.elements.lastNameInput().type(lName);

}

fillCompanyInput(company)
{
    this.elements.companyInput().type(company);

}

fillAdressInput(adress)
{
    this.elements.adressInput().type(adress);

}

selectCountry(country)
{
    this.elements.countryDD().select(country);
}

fillStateInput(state)
{
    this.elements.stateInput().type(state);

}

fillCityInput(city)
{
    this.elements.cityInput().type(city);

}

fillZipInput(zip)
{
    this.elements.zipCodeInput().type(zip);

}

fillMobileInput(mobile)
{
    this.elements.mobileInput().type(mobile);

}

clickSubmitBtn()
{
    this.elements.submitButton().click();
}

}
export default new SignUpPage;
