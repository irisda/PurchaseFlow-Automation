import LoginPage from '../pageobjects/login.page.js'
import PurchasePage from '../pageobjects/purchaseFlow.page.js'
import customConfig from '/Users/admin/Desktop/test-qa-taskOne/test/customConfig.js';
//import LoginTest from '/Users/admin/Desktop/test-qa-taskOne/test/specs/login.test.js'

describe('Purchase flow', () => {
    it('should login  and purchase flow', async () => {
        await LoginPage.open(customConfig.baseUrl)
        await LoginPage.login(customConfig.userEmail, customConfig.userPassword)
        await PurchasePage.selectProduct()
    })
})

