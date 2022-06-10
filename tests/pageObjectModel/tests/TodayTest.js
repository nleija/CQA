import TodayPage from "../pages/TodayPage"
import LoginPageAuth from "../pages/LoginPageAuth"
import AddNewTaskPage from "../pages/AddNewTaskPage"
import { Selector, fixture, test } from "testcafe"
import { URLS, TASKS } from "../data/Constants"
import { STANDARD_USER } from "../data/Roles"

fixture("Testing Today page")
  .page(URLS.LOGIN_URL)
  .beforeEach(async (t) => {
    // function for a successfull login process
    await t.useRole(STANDARD_USER).wait(5000)
  })
  .afterEach(async () => {
    LoginPageAuth.doLogout()
  })
  .afterEach(async (t) => {
    //function to logout
    await TodayPage.logOut()
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
  await t.click(TodayPage.plusAddBtn)
  // Function to add a new task
  t.wait(2000)
  t.TodayPage.addTask(TASKS.SINGLE.DESCRIPTION, TASKS.SINGLE.NAME)
  const allTasks = Selector("div.task_list_item__body>div>div>div>div")
  const taskAdded = allTasks.withExactText(TASKS.SINGLE.NAME).toString()
  await t.expect(taskAdded).exists
  console.log("New task was successfully created.")
})
// Function to delete the task just added
/* .after(async (t) => {
    let prevTasks = TodayPage.taskList.exists
    if (prevTasks == true) {
      await t
        .rightClick(TodayPage.taskList)
        .click(TodayPage.deleteTaskOption)
        .click(TodayPage.confirmDeleteButton)
      console.log("After created, the New Task is deleted.")
    }
  }) */

test("As a user I should  be able to delete one task", async (t) => {
  const cancelButtonExists = Selector(TodayPage.cancelAddTaskBtn).exists
  const listOfTasks = Selector(TodayPage.taskList).exists
  if (cancelButtonExists == true) {
    await t.click(TodayPage.cancelAddTaskBtn)
  }
  //Adding one task, if is needed to test delete task function
  if (listOfTasks == false) {
    await t.click(TodayPage.plusAddBtn)
    t.wait(3000)
    TodayPage.addTask(TASKS.SINGLE.DESCRIPTION, TASKS.SINGLE.NAME)
    console.log("One task added, which will be deleted")
  }
  await t
    .rightClick(TodayPage.taskList)
    .click(TodayPage.deleteTaskOption)
    .click(TodayPage.confirmDeleteButton)
    .wait(3000)
  console.log("The task was successfully deleted.")
})

test("As a user I should be able to add 10 new tasks", async (t) => {
  await t.click(AddNewTaskPage.addTaskSignIA).wait(2000)
  let i = 1
  do {
    const taskName = TASKS.GROUP.NAME + ` ${i}`
    const taskDescription = TASKS.GROUP.DESCRIPTION + ` ${i}`
    TodayPage.addTask(taskDescription, taskName)
    await t
      //.wait(2000)
      .expect(Selector(TodayPage.taskNameSel).withExactText(TASKS.GROUP.NAME))
      .ok()
    i++
  } while (i < 11)

  await t.click(AddNewTaskPage.cancelTaskBtn)
})

test.only("As a user I should be able to delete all existing tasks", async (t) => {
  let i = 0
  let numTasks = await TodayPage.taskList.count
  if (numTasks > 0) {
    do {
      await t
        .rightClick(TodayPage.taskList)
        .click(TodayPage.deleteTaskOption)
        .click(TodayPage.confirmDeleteButton)
      i++
    } while (i < numTasks)
  }
  let allTasks = TodayPage.taskList.count
  await t.expect(allTasks).eql(0)
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
<<<<<<< Updated upstream
=======

test("As a user I should be able to delete all tasks listed in the Today page", async (t) => {
  TodayPage.deleteAllTasks()
  let numTasks = await TodayPage.allTasksNames.count
  console.log("Tasks listed = " + numTasks)
})
>>>>>>> Stashed changes
