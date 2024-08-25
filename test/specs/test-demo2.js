describe('Test Saucedemo', () => {
    it('Test 1 - Login Successfully', async () => {
        await browser.url("https://www.saucedemo.com/")

        const usernameTextbox = await browser.$("#user-name")
        const passwordTextbox = await browser.$("#password")
        const loginButton = await browser.$('//input[@type="submit"]')

        await usernameTextbox.addValue("standard_user")
        await passwordTextbox.addValue("secret_sauce")
        await loginButton.click()

        await browser.pause(3000)

        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')
        await expect(browser).toHaveTitle('Swag Labs')
    });

    it('Test 2 - Add Item to Cart', async () => {
        const firstItemAddToCartButton = await browser.$('//button[@data-test="add-to-cart-sauce-labs-backpack"]');
        const cartIcon = await browser.$('//a[@class="shopping_cart_link"]')


        await firstItemAddToCartButton.click()
        await browser.pause(3000)

        await cartIcon.click()
        await browser.pause(3000)

        const cartItem = await browser.$('//div[@data-test="inventory-item-name"]')
        await expect(cartItem).toHaveText('Sauce Labs Backpack')
    });
});
