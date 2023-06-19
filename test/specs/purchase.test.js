import LoginPage from '../pageobjects/login.page.js'
import PurchasePage from '../pageobjects/purchaseFlow.page.js'
import customConfig from '../customConfig';

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

    // it('Remove product from cart', async () => {
    //     await PurchasePage.removeProductFromCart()
    // })




    it('Proceed to Checkout details', async () => {
        await PurchasePage.proceedToCheckout()
        await expect(browser).toHaveUrlContaining('step-one')
    })

    it('Continue to Payment Process', async () => {
        await PurchasePage.continuetoPayment()
        await expect(browser).toHaveUrlContaining('complete')
       
    })

    it('Product Order Received Confirmation', async () => {
        await PurchasePage.productOrderConfirmation()
        

       
       
    })





    












})