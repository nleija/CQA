import TodayPage from "../pages/TodayPage"
import LoginPageAuth from "../pages/LoginPageAuth"
import AddNewTaskPage from "../pages/AddNewTaskPage"
import { Selector, fixture, test, ClientFunction } from "testcafe"
import { URLS, TASKS } from "../data/Constants"
import { STANDARD_USER } from "../data/Roles"

fixture("Testing Today page")
  .page(URLS.LOGIN_URL)
  .beforeEach(async (t) => {
    // function for a successfull login process
    await t.useRole(STANDARD_USER).wait(5000)
    let numTasks = await TodayPage.allTasksNames.count
    if (numTasks > 0) {
      TodayPage.deleteAllTasks()
    }
  })

test.meta("type", "smoke")(
  "As a registered user successfully logged in, I should be able to see the Today Page loaded",
  async (t) => {
    await t
      .expect(URLS.getUrl())
      .contains(URLS.TODAY_URL)
      .expect(TodayPage.todayHeader.exists)
      .ok()
  }
)

test.only("As a user I should be able to add one task", async (t) => {
  // function to add a new task
  await t.click(AddNewTaskPage.addTaskSignIA).wait(2000)
  TodayPage.addTask(TASKS.SINGLE.DESCRIPTION, TASKS.SINGLE.NAME)
  await t
    .wait(2000)
    .expect(TodayPage.taskNameSel.innerText)
    .contains(TASKS.GROUP.NAME)
})

test("As a user a should  be able to delete one task", async (t) => {
  const getTaskNameSel = ClientFunction(() => TodayPage.taskNameSel.innerText)
  await t
    .click(TodayPage.anyTaskName)
    .click(TodayPage.moreActionsBtn)
    .click(TodayPage.deleteTaskOpt)
    .click(TodayPage.deleteButton)
    .expect(TodayPage.taskNameSel.innerText)
    .notContains(getTaskNameSel())
})

test("As a user I should be able to add 10 new tasks", async (t) => {
  await t.click(AddNewTaskPage.addTaskSignIA).wait(2000)
  let i = 1
  do {
    const taskName = TASKS.GROUP.NAME + ` ${i}`
    const taskDescription = TASKS.GROUP.DESCRIPTION + ` ${i}`
    TodayPage.addTask(taskDescription, taskName)
    await t
      .wait(2000)
      .expect(Selector(TodayPage.taskNameSel).withExactText(TASKS.GROUP.NAME))
      .ok()
    i++
  } while (i < 11)

  await t.click(AddNewTaskPage.cancelTaskBtn)
})

test("As a user I should be able to delete all existing tasks", async (t) => {
  let i = 0
  let numTasks = await TodayPage.allTasksNames.count
  console.log("Before " + numTasks)
  do {
    await t
      .click(TodayPage.anyTaskName)
      .click(TodayPage.moreActionsBtn)
      .click(TodayPage.deleteTaskOpt)
      .click(TodayPage.deleteButton)
    i++
  } while (i < numTasks)
  console.log("After " + numTasks)
})

test("As a user I should be able to add 10 new tasks", async (t) => {
  await t.click(AddNewTaskPage.addTaskSignIA).wait(2000)
  let i = 1

  do {
    const taskName = `Task No. ${i}`
    const taskDescription = `Description for task - ${i}`
    TodayPage.addTask(taskDescription, taskName)
    await t
      .wait(1000)
      .expect(Selector(TodayPage.taskNameSel).withExactText("task 003"))
      .ok()
    i++
  } while (i < 11)

  await t.wait(2000).click(AddNewTaskPage.cancelTaskBtn)
})

test.only("As a user I should be able to delete all tasks listed in the Today page", async (t) => {
  TodayPage.deleteAllTasks()
  let numTasks = await TodayPage.allTasksNames.count
  console.log("Tasks listed = " + numTasks)
})
