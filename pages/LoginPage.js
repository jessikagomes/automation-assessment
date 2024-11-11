const { expect } = require('@playwright/test')

export class LoginPage{
    constructor(page) {
        this.page = page
        this.emailInput = page.locator('.login-form').getByPlaceholder('Email Address')
        this.passwordInput = page.locator('.login-form').getByPlaceholder('Password')
        this.loginButton = page.getByRole('button', { name: 'login' })
        this.header = page.locator('#header')
    }

    async login(email, password) {
        await this.emailInput.fill(email)
        await this.passwordInput.fill(password)
        await this.loginButton.click()
    }

    async enterEmail(email) {
        await this.emailInput.fill(email)
    }

    async enterPassword(password) {
        await this.passwordInput.fill(password)
    }

    async expectLoggedIn(username) {
        await expect(this.header).toContainText(`Logged in as ${username}`)
    }
}