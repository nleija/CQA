import { Selector, t } from "testcafe"
import AddNewTaskPage from "./AddNewTaskPage"

class TodayPage {
  constructor() {
    this.titleToday = Selector("span.simple_content").withExactText("Today")
    this.todayHeader = Selector("span.simple_content")
    this.topMenuBar = Selector("div#flashdiv#top_bar_inner")
    this.addTaskEmptyBtn = Selector("button.empty-state-button")
    this.plusAddBtn = Selector("button.plus_add_button")
    this.confirmAddTaskBtn = Selector(
      "div[data-testid=task-editor-action-buttons]>button:nth-of-type(2)"
    )
    this.cancelAddTaskBtn = Selector(
      "div[data-testid=task-editor-action-buttons]>button:nth-of-type(1)"
    )
    this.allTasksNames = Selector(
      "div.task_list_item__content__wrapper > div > div"
    )
    //this.anyTaskName = Selector("div.task_list_item__body")
    this.taskNameSel = Selector("div.markdown_content.task_content")
    this.taskDetailsModal = Selector("section.reactist_modal_box__body")
    this.moreActionsBtn = Selector(
      "div[data-testid=button-container]>div>div>button>svg>g"
    )
    this.deleteTaskOpt = Selector("div.reactist_menulist>button:nth-of-type(5)")
    this.deleteButton = Selector("footer>div>button:nth-of-type(2)")
    this.taskNameDeleted = Selector("div>div>span>strong")
<<<<<<< Updated upstream
    this.taskList = Selector("div.task_list_item__body")
    this.deleteTaskOption = Selector("li.menu_item.icon_menu_item.danger_menu")
    this.confirmDeleteButton = Selector("footer>div>button:nth-of-type(2)")
=======
    this.buttonSettings = Selector(
      "button.reactist_menubutton.top_bar_btn.settings_btn>img"
    )
    this.logoutOption = Selector(
      "div.reactist_menulist.user_menu>button:nth-of-type(2)"
    )
>>>>>>> Stashed changes
  }

  async addTask(description, name) {
    await t
      //.click(AddNewTaskPage.addTaskSignIA)
      .wait(2000)
      .typeText(AddNewTaskPage.taskDescriptionInputIA, description)
      .typeText(AddNewTaskPage.taskNameInputIA, name)
      .click(this.confirmAddTaskBtn)
      .wait(3000)
    //.click(AddNewTaskPage.cancelTaskBtn)
  }

  async deleteAllTasks() {
    let i = 0
    let numTasks = await this.allTasksNames.count
    console.log(numTasks)
    if (numTasks > 0) {
      do {
        await t
          .rightClick(this.taskList)
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

  async logOut() {
    await t.click(this.buttonSettings).click(this.logoutOption)
  }
}

export default new TodayPage()
