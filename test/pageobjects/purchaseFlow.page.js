
class  PurchasePage {

    get productBag() {
        return $('#item_4_title_link')
    }

    get addToCartButton() {
        return $('#add-to-cart-sauce-labs-backpack')
    }


    async selectProduct() {
        await this.productBag.waitForDisplayed()
        await this.productBag.click()
        await browser.pause(5000)
    }












    }



export default new PurchasePage();