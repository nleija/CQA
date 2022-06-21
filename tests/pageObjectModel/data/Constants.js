import dotenv from "dotenv"
import { ClientFunction } from "testcafe"

dotenv.config()

var today = new Date()
var date =
  today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate()

export const URLS = {
  LOGIN_URL: "https://todoist.com/auth/login",
  TODAY_URL: "https://todoist.com/app/today",
  getUrl: ClientFunction(() => window.location.href),
}

export const TASKS = {
  SINGLE: {
    NAME: "Task 1005",
    DESCRIPTION: "Description for the task 1005",
  },
  GROUP: {
    NAME: "Task No. ",
    DESCRIPTION: "Description for the Task No. ",
  },
  AMOUNT_TASKS: 10,
}

export const CREDENTIALS = {
  STANDARD_USER: {
    USERNAME: process.env.STANDARD_USER_USERNAME,
    PASSWORD: process.env.STANDARD_USER_PASSWORD,
  },
  EMPTY_USER: {
    USERNAME: process.env.EMPTY_USER_USERNAME,
    PASSWORD: process.env.EMPTY_USER_PASSWORD,
  },
  WRONG_USER1: {
    USERNAME: process.env.WRONG_USER_USERNAME1,
    PASSWORD: process.env.WRONG_USER_PASSWORD,
  },
  WRONG_USER2: {
    USERNAME: process.env.WRONG_USER_USERNAME2,
    PASSWORD: process.env.WRONG_USER_PASSWORD,
  },
  WRONG_USER3: {
    USERNAME: process.env.WRONG_USER_USERNAME3,
    PASSWORD: process.env.WRONG_USER_PASSWORD,
  },
  WRONG_USER4: {
    USERNAME: process.env.WRONG_USER_USERNAME4,
    PASSWORD: process.env.STANDARD_USER_PASSWORD,
  },
  WRONG_USER5: {
    USERNAME: process.env.WRONG_USER_USERNAME5,
    PASSWORD: process.env.WRONG_USER_PASSWORD,
  },
  WRONG_USER6: {
    USERNAME: process.env.WRONG_USER_USERNAME6,
    PASSWORD: process.env.WRONG_USER_PASSWORD,
  },
  FAKE_USER: {
    USERNAME: process.env.FAKE_USER_USERNAME,
    PASSWORD: process.env.FAKE_USER_PASSWORD,
  },
  FAKE_USER2: {
    USERNAME: process.env.STANDARD_USER_USERNAME,
    PASSWORD: process.env.FAKE_USER_PASSWORD,
  },
}

export const DATES = {
  TODAYDATE: date,
}
