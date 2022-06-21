import TodayPage from "../pages/TodayPage"
import { Selector, fixture, test } from "testcafe"
import { URLS, TASKS } from "../data/Constants"
import { STANDARD_USER } from "../data/Roles"

fixture("Today page")
  .meta("Regression", "Mobile")
  .page(URLS.LOGIN_URL)
  .beforeEach(async (t) => {
    // function for a successfull login process
    await t.useRole(STANDARD_USER).wait(5000)
    const numTasks = await TodayPage.item.count
    if (numTasks > 0) {
      await TodayPage.deleteAllTasks()
    }
  })
  .afterEach(async (t) => {
    const numTasks = await TodayPage.item.count
    if (numTasks >= 1) {
      await t.rightClick(TodayPage.item)
      await TodayPage.deleteAll()
    }
  })

test.meta({ feature: "task", type: "smoke" })(
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
  // Function to add a new task
  await TodayPage.addTask(TASKS.SINGLE.DESCRIPTION, TASKS.SINGLE.NAME)
  const allTasks = Selector("div.task_list_item__body>div>div>div>div")
  const taskAdded = allTasks.withExactText(TASKS.SINGLE.NAME).toString()
  await t.expect(taskAdded).exists
})

test.meta("type", "smoke")(
  "As a user, I should be able to add one task by providig only the task name",
  async () => {
    await TodayPage.createOneTask(TASKS.SINGLE.NAME)
  }
)

test.only("As a user I should be able to add 10 new tasks", async (t) => {
  // Function to add new tasks
  let i = 1
  do {
    const taskName = TASKS.GROUP.NAME + ` ${i}`
    const taskDescription = TASKS.GROUP.DESCRIPTION + ` ${i}`
    await TodayPage.addTask(taskDescription, taskName)
    const allTasks = TodayPage.allTasks
    const taskAdded = allTasks.withExactText(taskName).toString()
    await t.expect(taskAdded).exists
    i++
  } while (i < TASKS.AMOUNT_TASKS + 1)
  await t.expect(TodayPage.item.count).eql(TASKS.AMOUNT_TASKS)
})

test.skip("As a user I should  be able to delete one task", async (t) => {
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

test.skip("As a user I should be able to delete all existing tasks", async (t) => {
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

test.skip("As a user I should be able to delete all tasks listed in the Today page", async () => {
  TodayPage.deleteAllTasks()
  let numTasks = await TodayPage.allTasksNames.count
  console.log("Tasks listed = " + numTasks)
})
