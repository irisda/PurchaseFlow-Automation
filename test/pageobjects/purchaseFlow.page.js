import customConfig from '/Users/admin/Desktop/test-qa-taskOne/test/customConfig.js';

class  PurchasePage {

    get productBag() {
        return $('#item_4_title_link')
    }

    get addToCartButton() {
        return $('#add-to-cart-sauce-labs-backpack')
    }

    get cartItemCount() {
        return $('a*=1')
    }

    get shoppingCartBtn() {
        return $('#shopping_cart_container')
    }

    get checkoutBtn() {
        return $('#checkout')
    }

    get firstName() {
        return $('#first-name')

    }

    get lastName() {
        return $('#last-name')
    }

    get zipCode() {
        return $('#postal-code')

    }


    async selectProduct() {
        await this.productBag.waitForDisplayed()
        await this.productBag.click()
    }

    async addProductToCart() {
        await this.addToCartButton.waitForDisplayed()
        await this.addToCartButton.click()
    }

    async goToShoppingCart() {
        await this.shoppingCartBtn.click()
    }

    async proceedToCheckout() {
        await this.checkoutBtn.waitForDisplayed()
        await this.checkoutBtn.click()
        await this.firstName.setValue(customConfig.firstName)
        await this.lastName.setValue(customConfig.lastName)
        await this.zipCode.setValue(customConfig.zipCode)
    }



    }



export default new PurchasePage();