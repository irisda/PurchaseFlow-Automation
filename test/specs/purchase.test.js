import LoginPage from '../pageobjects/login.page.js'
import PurchasePage from '../pageobjects/purchaseFlow.page.js'
import customConfig from '/Users/admin/Desktop/test-qa-taskOne/test/customConfig.js';

describe('Purchase flow', () => {
    it('should login  and select product', async () => {
        await LoginPage.open(customConfig.baseUrl)
        await LoginPage.login(customConfig.userEmail, customConfig.userPassword)
        await PurchasePage.selectProduct()
        await  expect(browser).toHaveUrlContaining('id=')
    })

    it('Add to Cart', async () => {
       await PurchasePage.addProductToCart()
       //Verify product added to cart
       const getcartItemCount = await $('a*=1');
       await expect(getcartItemCount).toHaveText('1')
})  
    it('Go to Cart', async () => {
        await PurchasePage.goToShoppingCart()
        await  expect(browser).toHaveUrlContaining('cart')
    })


    it('Proceed to Checkout details', async () => {
        await PurchasePage.proceedToCheckout()
        await expect(browser).toHaveUrlContaining('step-one')
    })










})