import { Selector, t } from "testcafe"

class LoginPageAuth {
  constructor() {
    this.userNameInput = Selector("input#labeled-input-1")
    this.passwordInput = Selector("input#labeled-input-3")
    this.loginBtn = Selector(
      "button.S7Jh9YX.PjStieI._7a2031d6.a878a9a4._34ac3da9.f9408a0e._8c75067a"
    )
    this.invalidCredentials = Selector(
      "div.c5028ea8._05d3a546._274b4a47.f9408a0e"
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
      .typeText(this.userNameInput, username)
      .typeText(this.passwordInput, password)
      .click(this.loginBtn)
  }

  //async submitLoginForm2(username, password) {
  //  this.setUserName(username)
  //  this.setPassword(password)
  //  this.clickOnLoginButton()
  //}
}

export default new LoginPageAuth()
