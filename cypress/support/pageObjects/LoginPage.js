class LoginPage {
    
    // Object containing element locators for the login page
    elements = {
        loginLink: () => cy.get('a[href="/login"]'), // Link to the login page
        emailInput: () => cy.get('input[data-qa="login-email"]'), // Email input field
        passwordInput: () => cy.get('input[data-qa="login-password"]'), // Password input field
        loginBtn: () => cy.get('button[data-qa="login-button"]'), // Login button
        loginSuccesMsg: () => cy.get('.nav.navbar-nav b'), // Success message after login
        loginErrMsg: () => cy.get('.login-form p') // Error message on failed login attempt
    };

    // Clicks on the login link to navigate to the login page
    clickLoginLink() {
        this.elements.loginLink().click();
    }

    // Fills in the email input field with the provided email
    fillEmailInput(email) {
        this.elements.emailInput().type(email);
    }

    // Fills in the password input field with the provided password
    fillPasswordInput(password) {
        this.elements.passwordInput().type(password);
    }

    // Clicks on the login button to submit the login form
    clickLoginBtn() {
        this.elements.loginBtn().click();
    }

}

// Exports an instance of the LoginPage class for use in test scripts
export default new LoginPage;
