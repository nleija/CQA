import { fixture, test } from "testcafe"
import LoginPageAuth from "../pages/LoginPageAuth"
import TodayPage from "../pages/TodayPage"
import { CREDENTIALS, CREDUP, URLS } from "../data/Constants"
import { STANDARD_USER } from "../data/Roles"

fixture("Testing Login Authorization page").page`${URLS.LOGIN_URL}`

test("0. Loading Login Autorization Page", async (t) => {
  await t
    .expect(URLS.getUrl())
    .contains(URLS.LOGIN_URL)
    .expect(LoginPageAuth.loginBtn.exists)
    .ok()
})

test("1. As a user, I should be able to log in successfully by provinding valid credentials", async (t) => {
  await LoginPageAuth.submitLoginForm(
    CREDUP.STD_USER.USRN,
    CREDUP.STD_USER.PSWD
  )
  t.expect(TodayPage.topMenuBar.exists).ok()
})

test("2. As a user, I should be able to log in successfully by provinding valid credentials and roles", async (t) => {
  await t.useRole(STANDARD_USER)
  await t.expect(TodayPage.topMenuBar.exists).ok()
})

test("3. FORM - Wrong format in Username", async (t) => {
  LoginPageAuth.setUserName("invalidUsername")
  LoginPageAuth.setPassword(CREDENTIALS.STANDARD_USER.PASSWORD)
  LoginPageAuth.clickOnLoginButton()

  await t
    .expect(LoginPageAuth.invalidCredentials.innerText)
    .contains("Please enter a valid email address.")
})

test("4. FORM - Invalid Username", async (t) => {
  LoginPageAuth.setUserName("invalidUser@wizeline.com")
  LoginPageAuth.setPassword(CREDENTIALS.STANDARD_USER.PASSWORD)
  LoginPageAuth.clickOnLoginButton()

  await t
    .expect(LoginPageAuth.invalidCredentials.innerText)
    .contains("Wrong email or password.")
})

test("5. FORM - Invalid Password", async (t) => {
  LoginPageAuth.setUserName(CREDENTIALS.STANDARD_USER.USERNAME)
  LoginPageAuth.setPassword("testinvpass")
  LoginPageAuth.clickOnLoginButton()

  await t
    .expect(LoginPageAuth.invalidCredentials.innerText)
    .contains("Wrong email or password.")
})

test("6. FORM - Successfully Login", async (t) => {
  LoginPageAuth.submitLoginForm(CREDUP.STD_USER.USRN, CREDUP.STD_USER.PSWD)

  await t.expect(TodayPage.todayHeader.innerText).contains("Today")
  t.expect(TodayPage.topMenuBar.exists)
})
