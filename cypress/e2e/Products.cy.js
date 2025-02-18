import ProductsPage from "../support/pageObjects/ProductsPage"

//Products Test Suite
describe("Products Tests", () => {
  beforeEach(() => {
    cy.visit(Cypress.env("URL"))
    ProductsPage.clickProductsLink()
  })
  it("All products should be displayed", () => {
    ProductsPage.elements.productsList().should("be.visible")
  })
  it("Product details should be displayed in products page", () => {
    ProductsPage.elements.productsList().each(($el) => {
      cy.wrap($el)
        .within(ProductsPage.elements.productImage)
        .should("be.visible")
      cy.wrap($el)
        .within(ProductsPage.elements.productPrice)
        .should("be.visible")
      cy.wrap($el)
        .within(ProductsPage.elements.productName)
        .should("be.visible")
      cy.wrap($el)
        .within(ProductsPage.elements.addToCartButton)
        .should("be.visible")
      cy.wrap($el)
        .within(ProductsPage.elements.viewProductLink)
        .should("be.visible")
    })
  })
  it("Product details should be displayed in product view page", () => {
    const productLinks = []

    ProductsPage.elements
      .productsList()
      .each(($el) => {
        cy.wrap($el).within(() => {
          // Ici, cy.get() recherchera dans le contexte de $el
          ProductsPage.elements
            .viewProductLink()
            .invoke("attr", "href")
            .then((href) => {
              productLinks.push(href)
            })
        })
      })
      .then(() => {
        cy.wrap(productLinks).each((link) => {
          cy.visit(Cypress.env("URL") + link)
          ProductsPage.elements.productViewImage().should("be.visible")
          ProductsPage.elements.productViewName().should("be.visible")
          ProductsPage.elements.productViewCategory().should("be.visible")
          ProductsPage.elements.productViewRating().should("be.visible")
          ProductsPage.elements.productViewPrice().should("be.visible")
          ProductsPage.elements.productViewQtLabel().should("be.visible")
          ProductsPage.elements.productViewQtInput().should("be.visible")
          ProductsPage.elements
            .productViewCartBtn()
            .should("be.visible")
            .and("be.enabled")
          ProductsPage.elements.productViewAvailability().should("be.visible")
          ProductsPage.elements.productViewCondition().should("be.visible")
          ProductsPage.elements.productViewBrand().should("be.visible")
        })
      })
  })
})
