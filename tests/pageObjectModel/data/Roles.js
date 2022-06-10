import { Role } from "testcafe"
import { CREDENTIALS, URLS } from "./Constants"
import LoginPageAuth from "../pages/LoginPageAuth"

export const STANDARD_USER = Role(
  URLS.LOGIN_URL,
  async () => {
    await LoginPageAuth.submitLoginForm(
      CREDENTIALS.STANDARD_USER.USERNAME,
      CREDENTIALS.STANDARD_USER.PASSWORD
    )
  },
  { preserveUrl: true }
)

export const EMPTY_USER = Role(
  URLS.LOGIN_URL,
  async () => {
    await LoginPageAuth.submitLoginForm(
      CREDENTIALS.EMPTY_USER.USERNAME,
      CREDENTIALS.EMPTY_USER.PASSWORD
    )
  },
  { preserveUrl: true }
)

export const WRONG_USER1 = Role(
  URLS.LOGIN_URL,
  async () => {
    await LoginPageAuth.submitLoginForm(
      CREDENTIALS.WRONG_USER1.USERNAME,
      CREDENTIALS.WRONG_USER1.PASSWORD
    )
  },
  { preserveUrl: true }
)

export const WRONG_USER2 = Role(
  URLS.LOGIN_URL,
  async () => {
    await LoginPageAuth.submitLoginForm(
      CREDENTIALS.WRONG_USER2.USERNAME,
      CREDENTIALS.WRONG_USER2.PASSWORD
    )
  },
  { preserveUrl: true }
)

export const WRONG_USER3 = Role(
  URLS.LOGIN_URL,
  async () => {
    await LoginPageAuth.submitLoginForm(
      CREDENTIALS.WRONG_USER3.USERNAME,
      CREDENTIALS.WRONG_USER3.PASSWORD
    )
  },
  { preserveUrl: true }
)

export const WRONG_USER4 = Role(
  URLS.LOGIN_URL,
  async () => {
    await LoginPageAuth.submitLoginForm(
      CREDENTIALS.WRONG_USER4.USERNAME,
      CREDENTIALS.WRONG_USER4.PASSWORD
    )
  },
  { preserveUrl: true }
)

export const WRONG_USER5 = Role(
  URLS.LOGIN_URL,
  async () => {
    await LoginPageAuth.submitLoginForm(
      CREDENTIALS.WRONG_USER5.USERNAME,
      CREDENTIALS.WRONG_USER5.PASSWORD
    )
  },
  { preserveUrl: true }
)

export const WRONG_USER6 = Role(
  URLS.LOGIN_URL,
  async () => {
    await LoginPageAuth.submitLoginForm(
      CREDENTIALS.WRONG_USER6.USERNAME,
      CREDENTIALS.WRONG_USER6.PASSWORD
    )
  },
  { preserveUrl: true }
)

export const FAKE_USER = Role(
  URLS.LOGIN_URL,
  async () => {
    await LoginPageAuth.submitLoginForm(
      CREDENTIALS.FAKE_USER.USERNAME,
      CREDENTIALS.FAKE_USER.PASSWORD
    )
  },
  { preserveUrl: true }
)

export const FAKE_USER2 = Role(
  URLS.LOGIN_URL,
  async () => {
    await LoginPageAuth.submitLoginForm(
      CREDENTIALS.STANDARD_USER.USERNAME,
      CREDENTIALS.FAKE_USER.PASSWORD
    )
  },
  { preserveUrl: true }
)
