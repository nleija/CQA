import dotenv from "dotenv"
import { ClientFunction } from "testcafe"

dotenv.config()

export const URLS = {
  LOGIN_URL: "https://todoist.com/auth/login",
  TODAY_URL: "https://todoist.com/app/today",
  getUrl: ClientFunction(() => window.location.href),
}

export const CREDENTIALS = {
  STANDARD_USER: {
    USERNAME: process.env.STANDARD_USER_USERNAME,
    PASSWORD: process.env.STANDARD_USER_PASSWORD,
  },
}
