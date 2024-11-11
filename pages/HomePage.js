export class HomePage {
    constructor(page) {
        this.page = page
        this.consentButton = page.getByRole('button', { name: 'Consent' })
        this.signupLoginButton = page.getByText('Signup / Login')
        this.deleteAccountButton = page.getByText('Delete Account')
        this.logoutButton = page.getByText('Logout'); 
    }

    async goto() {
        await this.page.goto('https://automationexercise.com/', { waitUntil: 'load' })
    }

    async acceptConsent() {
        await this.consentButton.click()

    }

    async clickSignupLogin() {
        await this.signupLoginButton.click()
    }

    async clickDeleteAccount() {
        await this.deleteAccountButton.click()
    }

    async clickLogout() {
        await this.logoutButton.click()
    }

}