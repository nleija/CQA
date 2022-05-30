import { Selector, t } from "testcafe"
import AddNewTaskPage from "./AddNewTaskPage"

class TodayPage {
  constructor() {
    this.titleToday = Selector("span.simple_content").withExactText("Today")
    this.todayHeader = Selector("span.simple_content")
    this.topMenuBar = Selector("div#flashdiv#top_bar_inner")
    this.listTodayTasks = Selector(
      "div.list_holder > ul[data-day-list-id=2022-05-18] > li > div > div > div > div > div.markdown_content.task_content"
    )
    this.allTasksNames = Selector(
      "div.task_list_item__content__wrapper > div > div"
    )
    this.anyTaskName = Selector("div.task_list_item__body")
    this.taskNameSel = Selector("div.markdown_content.task_content")
    this.taskDetailsModal = Selector("section.reactist_modal_box__body")
    this.moreActionsBtn = Selector(
      "div[data-testid=button-container]>div>div>button>svg>g"
    )
    this.deleteTaskOpt = Selector("div.reactist_menulist>button:nth-of-type(5)")
    this.deleteButton = Selector("footer>div>button:nth-of-type(2)")
    this.taskNameDeleted = Selector("div>div>span>strong")
  }

  async addTask(description, name) {
    await t
      //.click(AddNewTaskPage.addTaskSignIA)
      //.wait(2000)
      .typeText(AddNewTaskPage.taskDescriptionInputIA, description)
      .typeText(AddNewTaskPage.taskNameInputIA, name)
      .click(AddNewTaskPage.addTaskBtn)
    //.wait(1000)
    //.click(AddNewTaskPage.cancelTaskBtn)
  }

  async deleteAllTasks() {
    let i = 0
    let numTasks = await this.allTasksNames.count
    console.log(numTasks)
    if (numTasks > 0) {
      do {
        await t
          .click(this.anyTaskName)
          .wait(500)
          .click(this.moreActionsBtn)
          .click(this.deleteTaskOpt)
          .click(this.deleteButton)
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
}

export default new TodayPage()
