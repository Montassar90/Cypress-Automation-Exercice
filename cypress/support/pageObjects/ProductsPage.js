class ProductsPage {

    elements = {
        productsLink : () => cy.get('a[href="/products"]'),
        productsList : () => cy.get('.features_items .col-sm-4'),
        productImage : () => cy.get('.single-products img'),
        productPrice : () => cy.get('.productinfo.text-center h2'),
        productName : () => cy.get('.productinfo.text-center p'),
        addToCartButton : () => cy.get('.productinfo.text-center a'),
        viewProductLink : () => cy.get('.choose a'),
        productViewImage : () => cy.get('.view-product img'),
        productViewName : () => cy.get('.product-information h2'),
        productViewCategory : () => cy.get('.product-information p:first-of-type'),
        productViewRating : () => cy.get('.product-information img:last-of-type'),
        productViewPrice : () => cy.get('.product-information span:first-child'),
        productViewQtLabel : () => cy.get('.product-information label'),
        productViewQtInput : () => cy.get('#quantity'),
        productViewCartBtn : () => cy.get('.btn.btn-default.cart'),
        productViewAvailability : () => cy.get('.product-information :nth-child(6)'),
        productViewCondition : () => cy.get('.product-information :nth-child(7)'),
        productViewBrand : () => cy.get('.product-information :nth-child(8)')
    }

    clickProductsLink() {
        this.elements.productsLink().click();
    }

    addProductToCart() {
        this.elements.addToCartButton().click();
    }

}

export default new ProductsPage;