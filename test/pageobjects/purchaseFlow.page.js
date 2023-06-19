import { $ } from 'webdriverio/build/commands/browser';
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

    get continueBtn() {
        return $('#continue')
    }

    get finishBtn() {
        return $('#finish')
    }

    get thanksMessageText() {
        return $('h2*=Thank you for your order!')
    }

    get checkoutCompleteText() {
        return $('spa*n=Checkout: Complete!')
    }

    get backBtn() {
        return $('span*=back-to-products')
    }

    get removeBtn() {
        return $('#remove-sauce-labs-backpack')
    }

    get shoppingProductsNumber() {
        return $('span.shopping_cart_badge')
    }

    get continueShopping() {
        return $('#continue-shopping')
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
        await this.productBag.isDisplayed()
        
    }

    async removeProductFromCart() {
        await this.removeBtn.click()
        //Validate that the shopping cart does not have any number, because the product is removed
        await this.shoppingProductsNumber.waitForDisplayed({ reverse: true }); //this expects false
    }

    async continueToShopping() {
        await this.continueShopping.waitForDisplayed()
        await this.continueShopping.click()
    }





    async proceedToCheckout() {
        await this.checkoutBtn.waitForDisplayed()
        await this.checkoutBtn.click()
        await this.firstName.setValue(customConfig.firstName)
        await this.lastName.setValue(customConfig.lastName)
        await this.zipCode.setValue(customConfig.zipCode)
    }

    async continuetoPayment() {
        await this.continueBtn.isExisting()
        await this.continueBtn.click()
        await this.finishBtn.click()
        
    }

    async productOrderConfirmation() {
        await this.checkoutCompleteText.isDisplayedInViewport()
        await this.thanksMessageText.isExisting()
        await this.backBtn.isClickable()

    }



    }



export default new PurchasePage();