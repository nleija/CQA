import { Selector, t } from "testcafe"

class LoginPageAuth {
  constructor() {
    this.userNameInput = Selector("input#labeled-input-1")
    this.passwordInput = Selector("input#labeled-input-3")
    this.loginBtn = Selector("button[data-gtm-id=start-email-login]")
    this.invalidCredentials = Selector(
      "div.c5028ea8._05d3a546._274b4a47.f9408a0e"
    )
    this.invalidEmailAddress = Selector(
      "div.jMjOg3K._2282cb83._087a8179.f9cb5d8a.f9408a0e"
    )
    this.eyeIcon = Selector(
      "div.MbdFLx7.f9408a0e._6e9db9aa._6cad1a19._21b8bafa._9212ca89 > button"
    )
    this.wrongEmailPassword = Selector(
      "div._2282cb83._087a8179.f9cb5d8a.f9408a0e"
    )
    this.profileMenuBtn = Selector(
      "div.top_right_button_group>button:nth-of-type(5)"
    )
    this.logoutOption = Selector(
      "div.reactist_menulist.user_menu>button:nth-of-type(2)"
    )
  }

  async setUserName(userName) {
    await t.typeText(this.userNameInput, userName)
  }

  async setPassword(password) {
    await t.typeText(this.passwordInput, password)
  }

  async clickOnLoginButton() {
    await t.click(this.loginBtn)
  }

  async submitLoginForm(username, password) {
    await t
      //.click(this.eyeIcon)
      .typeText(this.userNameInput, username)
      .typeText(this.passwordInput, password)
      .click(this.loginBtn)
      .wait(1500)
  }

  async doLogout() {
    await t.click(this.profileMenuBtn).click(this.logoutOption)
  }
}

export default new LoginPageAuth()
