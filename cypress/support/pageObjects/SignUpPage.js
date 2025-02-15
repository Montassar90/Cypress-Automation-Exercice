class SignUpPage {

  // Object containing element locators for the login page
  elements = {
    signUpLink: () => cy.get('a[href="/login"]'), // Link to the signup page
    nameInput: () => cy.get('input[data-qa="signup-name"]'), //name input field
    emailInput: () => cy.get('input[data-qa="signup-email"]'), // Email input field
    signUpBtn: () => cy.get('button[data-qa="signup-button"]'), // Signup button
    titleCheckBox: () => cy.get("#id_gender1"), // Title checkbox
    passwordInput: () => cy.get("#password"), // Password input field
    daysDD: () => cy.get("#days"), // Days dropdown
    monthsDD: () => cy.get("#months"), // Months dropdown
    yearsDD: () => cy.get("#years"), // Years dropdown
    firstNameInput: () => cy.get("#first_name"), // First name input field
    lastNameInput: () => cy.get("#last_name"), // Last name input field
    companyInput: () => cy.get("#company"), // Company input field
    adressInput: () => cy.get("#address1"), // Address input field
    countryDD: () => cy.get("#country"), // Country dropdown
    stateInput: () => cy.get("#state"), // State input field
    cityInput: () => cy.get("#city"), // City input field
    zipCodeInput: () => cy.get("#zipcode"), // Zip code input field
    mobileInput: () => cy.get("#mobile_number"), // Mobile number input field
    submitButton: () => cy.get('button[data-qa="create-account"]'), // Submit button
    signupSuccesMsg: () => cy.get('h2[data-qa="account-created"] b'), // Success message after signup
    signupErrMsg: () => cy.get(".signup-form p"), // Error message on failed signup attempt
  };
// Clicks on the signup link to navigate to the signup page
  clickSignUpLink() {
    this.elements.signUpLink().click();
  }
// Fills in the name input field with the provided name
  fillNameInput(name) {
    this.elements.nameInput().type(name);
  }
// Fills in the email input field with the provided email
  fillEmailInput(email) {
    this.elements.emailInput().type(email);
  }
// Clicks on the signup button to move to the signup form
  clickSignUpBtn() {
    this.elements.signUpBtn().click();
  }
// Selects the title checkbox
  selectTitle() {
    this.elements.titleCheckBox().check();
  }
// Fills in the password input field with the provided password
  fillPasswordInput(password) {
    this.elements.passwordInput().type(password);
  }
// Selects the birth date from the dropdowns
  selectBirthDate(day, month, year) {
    this.elements.daysDD().select(day);
    this.elements.monthsDD().select(month);
    this.elements.yearsDD().select(year);
  }
// Fills in the first name input field with the provided first name
  fillFirstNameInput(fName) {
    this.elements.firstNameInput().type(fName);
  }
// Fills in the last name input field with the provided last name
  fillLastNameInput(lName) {
    this.elements.lastNameInput().type(lName);
  }
// Fills in the company input field with the provided company
  fillCompanyInput(company) {
    this.elements.companyInput().type(company);
  }
// Fills in the address input field with the provided address
  fillAdressInput(adress) {
    this.elements.adressInput().type(adress);
  }
// Selects the country from the dropdown
  selectCountry(country) {
    this.elements.countryDD().select(country);
  }
// Fills in the state input field with the provided state
  fillStateInput(state) {
    this.elements.stateInput().type(state);
  }
// Fills in the city input field with the provided city
  fillCityInput(city) {
    this.elements.cityInput().type(city);
  }
// Fills in the zip code input field with the provided zip code
  fillZipInput(zip) {
    this.elements.zipCodeInput().type(zip);
  }
// Fills in the mobile number input field with the provided mobile number
  fillMobileInput(mobile) {
    this.elements.mobileInput().type(mobile);
  }
// Clicks on the submit button to submit the signup form
  clickSubmitBtn() {
    this.elements.submitButton().click();
  }
}
// Exports an instance of the SignUpPage class for use in test scripts
export default new SignUpPage();
