import { fixture, test } from "testcafe"
import LoginPageAuth from "../pages/LoginPageAuth"
import TodayPage from "../pages/TodayPage"
import { CREDENTIALS, URLS } from "../data/Constants"
import {
  STANDARD_USER,
  WRONG_USER2,
  WRONG_USER3,
  WRONG_USER5,
  WRONG_USER6,
} from "../data/Roles"

fixture("Login page").page`${URLS.LOGIN_URL}`

test.meta("type", "init")(
  "As a user I should be able to see the Login Autorization Page loaded",
  async (t) => {
    await t
      .expect(URLS.getUrl())
      .contains(URLS.LOGIN_URL)
      .expect(LoginPageAuth.loginBtn.exists)
      .ok()
  }
)

test.meta("type", "negativeLogin")(
  "As a user, I should NOT be able to login if no username and password are provided",
  async (t) => {
    await t.click(LoginPageAuth.loginBtn)
    await t
      .expect(LoginPageAuth.invalidEmailAddress.innerText)
      .contains("Please enter a valid email address.")
  }
)

test.meta("type", "negativeLogin")(
  "As a user, I should NOT be able to login if username is provided incomplete without an @",
  async (t) => {
    LoginPageAuth.submitLoginForm(
      CREDENTIALS.WRONG_USER1.USERNAME,
      CREDENTIALS.FAKE_USER.PASSWORD
    )
    // This alert only shows it's native dialogue 5 seconds after click
    // .setNativeDialogHandler(() => true)
    const history = await t.getNativeDialogHistory()
    await t
      .expect(history[0].text)
      .eql("Please include and @ in the email address. x is missing and @")
    /* .setNativeDialogHandler((type, text) => {
      switch (type) {
        case "confirm":
          switch (text) {
            case "Do you want to subscribe?":
              return false
            case "Do you want to delete your account?":
              return true
            default:
              throw "Unexpected confirm dialog!"
          }

        case "prompt":
          return "Hi there"
        default:
          throw "An alert was invoked!"
      }
    }) */
    //console.log("y" + type)
    //console.log(`x${text}`)
    console.log("This is just noisy debug stuff")

    //const history = await t.getNativeDialogHistory()
    //const his = await t.getNativeDialogNotHandledErrorText
    console.log(history)
    console.error("This means someone broke something again")
    //await t.expect(history[0].text).eql("Say hello")

    //.expect(history[1].type)
    //.eql("confirm")
    //.expect(history[2].type)
    //.eql("alert")

    //.expect(LoginPageAuth.invalidEmailAddress.innerText)
    //.contains("Please enter a valid email address.")
  }
)

test.meta("type", "negativeLogin")(
  "As a user, I should NOT be able to login if username is provided incomplete without an @",
  async (t) => {
    LoginPageAuth.submitLoginForm(
      CREDENTIALS.WRONG_USER1.USERNAME,
      CREDENTIALS.FAKE_USER.PASSWORD
    )
    await t.setNativeDialogHandler()
    const history = await t.getNativeDialogHistory()
    console.log("This is just noisy debug stuff")
    console.log(history)

    await t
      .expect(history[0].text)
      .eql(
        "Please include an '@' in the email address. 'fakeusername' is missing an '@'"
      )
  }
)

test.meta("type", "negativeLogin")(
  "As a user, I should NOT be able to login if username is provided with an @ placed in a wrong position",
  async (t) => {
    await t
      .useRole(WRONG_USER2)
      .expect(LoginPageAuth.invalidEmailAddress.innerText)
      .contains("Please enter a part followed by @. x is incomplete")
  }
)

test.meta("type", "negativeLogin")(
  "As a user, I should NOT be able to login if username is provided with an @ placed in a wrong position",
  async (t) => {
    await t
      .useRole(WRONG_USER3)
      .expect(LoginPageAuth.invalidEmailAddress.innerText)
      .contains(
        "Please enter a part following by @. fakeusername@ is incomplete"
      )
  }
)

test.meta("type", "negativeLogin")(
  "As a user, I should NOT be able to login if password is provided with wrong length",
  async (t) => {
    LoginPageAuth.submitLoginForm(
      CREDENTIALS.WRONG_USER4.USERNAME,
      CREDENTIALS.FAKE_USER.PASSWORD
    )
    await t
      .expect(LoginPageAuth.invalidEmailAddress.innerText)
      .contains(
        "Please lengthen this text to 8 characters or more (you are currently using 3 characters)."
      )
  }
)

test.meta("type", "negativeLogin")(
  "As a user, I should NOT be able to login if no password is provided",
  async (t) => {
    await t
      .typeText(LoginPageAuth.userNameInput, CREDENTIALS.WRONG_USER4.USERNAME)
      .click(LoginPageAuth.loginBtn)
      .expect(LoginPageAuth.invalidEmailAddress.innerText)
      .contains("Please enter a valid email address.")
  }
)

test.meta("type", "negativeLogin")(
  "As a user, I should NOT be able to login if username is provided with valid email address and no password",
  async (t) => {
    await t
      .typeText(LoginPageAuth.userNameInput, CREDENTIALS.STANDARD_USER.USERNAME)
      .click(LoginPageAuth.loginBtn)
      .expect(LoginPageAuth.wrongEmailPassword.innerText)
      .contains("Passwords must be at least 8 characters long.")
  }
)

test.meta("type", "negativeLogin")(
  "As a user, I should NOT be able to login if no username and password are is provided",
  async (t) => {
    await t.click(LoginPageAuth.loginBtn)
    await t
      .expect(LoginPageAuth.invalidEmailAddress.innerText)
      .contains("Please enter a valid email address.")
  }
)

test.meta("type", "negativeLogin")(
  "As a user, I should NOT be able to login if username is provided with . in wrong position",
  async (t) => {
    await t
      .useRole(WRONG_USER5)
      .expect(LoginPageAuth.invalidEmailAddress.innerText)
      .contains(". is used at a wrong position in 'username.'.")
  }
)

test.meta("type", "negativeLogin")(
  "As a user, I should NOT be able to login if password is provided with a wrong format",
  async (t) => {
    await t
      .useRole(WRONG_USER6)
      .expect(LoginPageAuth.invalidEmailAddress.innerText)
      .contains(
        "Please lengthen this text to 8 characters or more (you are currently using 4 characters)."
      )
  }
)

test.meta("type", "negativeLogin")(
  "As a unregistered user, I should NOT be able to login by providing invalid username",
  async (t) => {
    LoginPageAuth.submitLoginForm(
      CREDENTIALS.FAKE_USER.USERNAME,
      CREDENTIALS.FAKE_USER.PASSWORD
    )
    await t
      .expect(LoginPageAuth.wrongEmailPassword.innerText)
      .contains("Wrong email or password.")
  }
)

test.meta("type", "negativeLogin")(
  "As a registered user, I should not be able to login by providing invalid password",
  async (t) => {
    LoginPageAuth.submitLoginForm(
      CREDENTIALS.STANDARD_USER.USERNAME,
      CREDENTIALS.FAKE_USER.PASSWORD
    )
    await t
      .expect(LoginPageAuth.wrongEmailPassword.innerText)
      .contains("Wrong email or password.")
  }
)

test.meta("type", "smoke")(
  "As a user, I should be able to log in successfully by provinding valid credentials",
  async (t) => {
    await t
      .useRole(STANDARD_USER)
      .expect(TodayPage.todayHeader.exists.innerText)
      .eql("Today")
  }
)

test.meta("type", "init")("FORM - Successfully Login", async (t) => {
  LoginPageAuth.submitLoginForm(
    CREDENTIALS.STANDARD_USER.USERNAME,
    CREDENTIALS.STANDARD_USER.PASSWORD
  )
  await t.expect(TodayPage.todayHeader.innerText).eql("Today")
})
