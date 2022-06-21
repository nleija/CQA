import { Selector, t } from "testcafe"
import AddNewTaskPage from "./AddNewTaskPage"

class TodayPage {
  constructor() {
    this.titleToday = Selector("span.simple_content").withExactText("Today")
    this.todayHeader = Selector("span.simple_content")
    this.topMenuBar = Selector("div#flashdiv#top_bar_inner")
    this.addTaskEmptyBtn = Selector("button.empty-state-button")
    this.taskName = Selector("div.DraftEditor-editorContainer > div")
    this.todayButton = Selector("#list_holder>ul>li:nth-of-type(2)")
    this.plusAddBtn = Selector("button.plus_add_button")
    this.item = Selector(".task_list_item__content")
    this.confirmTaskButton = Selector(".reactist_button")
    this.confirmAddTaskBtn = Selector(
      "div[data-testid=task-editor-action-buttons]>button:nth-of-type(2)"
    )
    this.cancelAddTaskBtn = Selector(
      "div[data-testid=task-editor-action-buttons]>button:nth-of-type(1)"
    )
    this.allTasksNames = Selector(
      "div.task_list_item__content__wrapper > div > div"
    )
    this.allTasks = Selector("div.task_list_item__body>div>div>div>div")
    //this.anyTaskName = Selector("div.task_list_item__body")
    this.taskNameSel = Selector("div.markdown_content.task_content")
    this.taskDetailsModal = Selector("section.reactist_modal_box__body")
    this.createTaskBtn = Selector(".plus_add_button")
    this.moreActionsBtn = Selector(
      "div[data-testid=button-container]>div>div>button>svg>g"
    )
    this.deleteTaskOpt = Selector("div.reactist_menulist>button:nth-of-type(5)")
    this.deleteButton = Selector("footer>div>button:nth-of-type(2)")
    this.taskNameDeleted = Selector("div>div>span>strong")
    this.taskList = Selector("div.task_list_item__body")
    this.deleteTaskOption = Selector("li.menu_item.icon_menu_item.danger_menu")
    this.confirmDeleteButton = Selector("footer>div>button:nth-of-type(2)")
  }

  async addTask(description, name) {
    await t.click(AddNewTaskPage.addTaskSignIA)
    await t.typeText(AddNewTaskPage.taskDescriptionInputIA, description)
    await t.typeText(AddNewTaskPage.taskNameInputIA, name)
    await t.click(this.confirmAddTaskBtn)
    await t.click(this.cancelAddTaskBtn)
  }

  async createOneTask(name) {
    await t.click(this.createTaskBtn)
    await t.typeText(this.taskName, name, { paste: true })
    await t.click(this.confirmAddTaskBtn)
    await t.wait(1000)
  }

  async deleteTask() {
    await t
      .rightClick(this.item)
      .wait(1000)
      .click(this.deleteTaskOption)
      .click(this.confirmDeleteButton)
  }

  async deleteAllTasks() {
    let i = 0
    let numTasks = await this.allTasksNames.count
    console.log(numTasks)
    if (numTasks >= 1) {
      do {
        await t
          .rightClick(this.taskList)
          .wait(1000)
          .click(this.deleteTaskOption)
          .click(this.confirmDeleteButton)
        i++
      } while (i < numTasks)
    }
    console.log("After " + numTasks)
    //for (let i = 0; i < numTasks; i++) {
    //await t
    //.click(this.anyTaskName)
    //.click(this.moreActionsBtn)
    //.click(this.deleteTaskOpt)
    //.click(this.deleteButton)
    //}
  }

  async deleteAll() {
    await t.click(this.todayButton)
    const numTasks = await this.item.count
    if (numTasks >= 1) {
      while (await this.item.count) {
        //await this.deleteTask()
        await t.rightClick(this.item)
        await t.wait(1000)
        await t.click(this.deleteTaskOption)
        await t.click(this.confirmDeleteButton)
      }
      await t.wait(1000)
    }
  }
}

export default new TodayPage()
