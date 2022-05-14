import { Role } from "testcafe"
import { CREDENTIALS, URLS } from "./Constants"
import LoginPageAuth from "../pages/LoginPageAuth"

export const STANDARD_USER = Role(
  URLS.LOGIN_URL,
  async (t) => {
    await LoginPageAuth.submitLoginForm(
      CREDENTIALS.STANDARD_USER.USERNAME,
      CREDENTIALS.STANDARD_USER.PASSWORD
    )
  },
  { preserveUrl: true }
)
