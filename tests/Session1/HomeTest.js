import { ClientFunction } from "testcafe"
import HomePage from "../pages/HomePage"
import LoginPage from "../pages/LoginPage"
import { fixture, test } from "testcafe"

const loginurl = "https://the-internet.herokuapp.com/login"
const homeurl = "https://the-internet.herokuapp.com/secure"
const geturl = ClientFunction(() => window.location.href)

fixture("Home page")
  .page(loginurl)
  .beforeEach(async (t) => {
    LoginPage.setUserName("tomsmith")
    LoginPage.setPassword("SuperSecretPassword!")
    LoginPage.clickOnLoginButton()

    await t.wait(5000)
  })

test("Loading Home Page", async (t) => {
  await t
    .expect(geturl())
    .contains(homeurl)
    .expect(HomePage.logoutBtn.exists)
    .ok()
})

test("Successfully Logout", async (t) => {
  HomePage.clickOnLogoutButton()
  await t
    .wait(5000)
    .expect(LoginPage.responseCard.innerText)
    .contains("You logged out of the secure area")
})
