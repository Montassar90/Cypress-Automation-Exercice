import ProductsPage from "../support/pageObjects/ProductsPage";

//Products Test Suite
describe('Products Tests',() =>{
    beforeEach(() => {
    cy.visit(Cypress.env('URL'))
    ProductsPage.clickProductsLink()

    })
it('All products should be displayed',() =>{
    ProductsPage.elements.productsList().should('be.visible')
})
it('Product details should be displayed',() =>{
    ProductsPage.elements.productsList().each(($el) => {
        cy.wrap($el).within(ProductsPage.elements.productImage).should('be.visible')
        cy.wrap($el).within(ProductsPage.elements.productPrice).should('be.visible')
        cy.wrap($el).within(ProductsPage.elements.productName).should('be.visible')
        cy.wrap($el).within(ProductsPage.elements.addToCartButton).should('be.visible')
        cy.wrap($el).within(ProductsPage.elements.viewProductLink).should('be.visible')
    })
})
})