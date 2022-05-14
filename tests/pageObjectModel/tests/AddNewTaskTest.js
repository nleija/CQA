//import { ClientFunction } from "testcafe"
//import TodayPage from "../pages/TodayPage"
import LoginPageAuth from "../pages/LoginPageAuth"
import AddNewTaskPage from "../pages/AddNewTaskPage"
import TodayPage from "../pages/TodayPage"
import { CREDUP, URLS } from "../data/Constants"
import { fixture, test } from "testcafe"

fixture("Add New task page")
  .page(URLS.LOGIN_URL)
  .beforeEach(async (t) => {
    LoginPageAuth.submitLoginForm(CREDUP.STD_USER.USRN, CREDUP.STD_USER.PSWD)
    await t.wait(5000)
  })

test.only("1. Adding New Task from Top Bar", async (t) => {
  await t.click(AddNewTaskPage.addTaskSign)
  await t
    .expect(AddNewTaskPage.modalAddBox.exists)
    .ok()

    .typeText(AddNewTaskPage.taskNameInput, "taskA")
    .typeText(AddNewTaskPage.taskDescriptionInput, "descrA")

  //AddNewTaskPage.setTaskName("test auto 001")
  //AddNewTaskPage.setTaskName("test auto description 001")
  //AddNewTaskPage.clickOnAddTaskBtn()
  //t.wait(5000).expect(AddNewTaskPage.taskAddedWarning.exists)
})
