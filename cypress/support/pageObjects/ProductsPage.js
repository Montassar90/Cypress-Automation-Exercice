class ProductsPage {

    elements = {
        productsLink : () => cy.get('a[href="/products"]'),
        productsList : () => cy.get('.features_items .col-sm-4'),
        productImage : () => cy.get('.single-products img'),
        productPrice : () => cy.get('.productinfo.text-center h2'),
        productName : () => cy.get('.productinfo.text-center p'),
        addToCartButton : () => cy.get('.productinfo.text-center a'),
        viewProductLink : () => cy.get('.choose a'),
    }

    clickProductsLink() {
        this.elements.productsLink().click();
    }

    addProductToCart() {
        this.elements.addToCartButton().click();
    }

    viewProduct() {
        this.elements.viewProductLink().click();
    }
}

export default new ProductsPage();