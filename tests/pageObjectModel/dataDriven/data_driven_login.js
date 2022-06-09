import { Selector, fixture, test } from "testcafe"
import { URLS } from "../data/Constants"

const dataSet = require("../data/data.json")

fixture("Testing Data Driven")

dataSet.forEach((data) => {
  test.page(URLS.LOGIN_URL)(
    `Login Page Validation - ${data.expectedMessage}`,
    async (t) => {
      await t
        .maximizeWindow()
        .typeText(Selector("input#labeled-input-1"), data.username)
        .typeText(Selector("input#labeled-input-3"), data.password)
        .click(Selector("button[data-gtm-id=start-email-login]"))
        .wait(5000)
        .takeScreenshot({
          path: `Test_Screenshots/${data.expectedMessage}.png`,
          fullPage: true,
        })

      const pageLoaded = `${data.expectedPage}`
      if (pageLoaded == URLS.TODAY_URL) {
        await t
          .expect(Selector("span.simple_content").innerText)
          .contains(data.expectedMessage)
      } else {
        await t
          .expect(
            Selector(
              "div#todoist_app>div>div>div>div>div>div>form>div:nth-of-type(1)"
            ).innerText
          )
          .contains(data.expectedMessage)
      }
    }
  )
})
