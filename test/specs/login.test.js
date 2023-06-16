import LoginPage from '../pageobjects/login.page.js'
import customConfig from '/Users/admin/Desktop/test-qa-taskOne/test/customConfig.js';


describe('Log in Test', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open(customConfig.baseUrl)

        await LoginPage.login(customConfig.userEmail, customConfig.userPassword)
    })
})

