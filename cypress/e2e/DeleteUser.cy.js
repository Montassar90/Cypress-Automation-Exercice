import appMessages from "../fixtures/appMessages.json";


describe('Delete Current User Test', () => {
    it('Delete current user', () => {
        cy.login()
        cy.get('a[href="/delete_account"').click()
        const actualMsg = cy.get('h2[data-qa="account-deleted"] b')
        actualMsg.should('have.text', appMessages.deleteUserExpectedMsg)
    })

})