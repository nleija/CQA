//import { ClientFunction } from "testcafe"
//import TodayPage from "../pages/TodayPage"
import LoginPageAuth from "../pages/LoginPageAuth"
import AddNewTaskPage from "../pages/AddNewTaskPage"
import TodayPage from "../pages/TodayPage"
import { CREDENTIALS, URLS } from "../data/Constants"
import { fixture, test } from "testcafe"
import { Selector } from "testcafe"

fixture("Add New task page")
  .page(URLS.LOGIN_URL)
  .beforeEach(async (t) => {
    // function for login process
    LoginPageAuth.submitLoginForm(
      CREDENTIALS.STANDARD_USER.USERNAME,
      CREDENTIALS.STANDARD_USER.PASSWORD
    )
    await t.wait(5000)
  })

test("1. Adding New Task from Top Bar", async (t) => {
  AddNewTaskPage.addingNewTaskTB(
    "New description for task-T01 created on wednesday May 18 2022",
    "T01"
  )
  t.expect(Selector(TodayPage.allTasksNames).withExactText("T01"))

  //.expect(Selector(TodayPage.allTasksNames).withExactText("T01"))
  //.expect(AddNewTaskPage.modalAddBox.exists).ok()
})

test("2. Adding one new task from the + Add Task option in page's body", async (t) => {
  await t
    .click(AddNewTaskPage.addTaskSignIA)
    .wait(5000)
    .typeText(AddNewTaskPage.taskDescriptionInputIA, "description for task 003")
    .typeText(AddNewTaskPage.taskNameInputIA, "task 003")
    .click(AddNewTaskPage.addTaskBtn)
    .wait(5000)
    //AddNewTaskPage.addingNewTaskIA("task description 003", "task 003")
    .expect(Selector(TodayPage.allTasksNames).withExactText("task 003"))
    .click(AddNewTaskPage.cancelTaskBtn)
})
