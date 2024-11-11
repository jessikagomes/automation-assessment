// @ts-check
const { test, expect } = require('@playwright/test')
import { HomePage } from '../pages/HomePage'
import { LoginPage } from '../pages/LoginPage'

const emailUserA = 'usera@test.com'
const passwordUserA = 'test123'
const usernameA = 'userA'

test('login with valid credencials', async ({ page }) => {
    
    const homePage = new HomePage(page)
    const loginPage = new LoginPage(page)

    await homePage.goto()  
    await homePage.acceptConsent()
    await homePage.clickSignupLogin()
    await loginPage.enterEmail(emailUserA)
    await loginPage.enterPassword(passwordUserA)
    await loginPage.loginButton.click()
    await loginPage.expectLoggedIn(usernameA)
    await homePage.clickLogout()
})

test('register a new user', async ({ page }) => {
    await page.goto('https://automationexercise.com/')

    await page.getByRole('button', {name: 'Consent'}).click()
    await page.getByText('Signup / Login').click()
    await page.locator('.signup-form').getByPlaceholder('Name').fill('userb')
    await page.locator('.signup-form').getByPlaceholder('Email Address').fill('userb@test.com')

    await page.getByRole('button', {name: 'Signup'}).click()
    await page.getByRole('radio', {name: 'Mrs.'}).check()
    await page.getByLabel('Password ').fill('test456')
    await page.selectOption('#days', '26')
    await page.selectOption('#months', 'March')
    await page.selectOption('#years', '1988')

    await page.getByLabel('Sign up for our newsletter!').check()
    await page.getByLabel('Receive special offers from our partners!').check()

    await page.getByLabel('First name ').fill('User')
    await page.getByLabel('Last name ').fill('B')
    await page.locator('#address1').fill('Stree Test Name, 100B')
    await page.selectOption('#country', 'Canada')
    await page.getByLabel('State ').fill('Ontario')
    await page.locator('#city').fill('Port Colborne')
    await page.locator('#zipcode').fill('10110')
    await page.getByLabel('Mobile Number ').fill('999-9999')

    await page.getByRole('button', {name: 'Create Account'}).click()

    await expect(page).toHaveTitle('Automation Exercise - Account Created')
    await page.getByText('Continue').click()
    await expect(page.locator('#header')).toContainText('Logged in as userb')

    await page.getByText('Delete Account').click()
    await expect(page).toHaveURL('https://automationexercise.com/delete_account')


})