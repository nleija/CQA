import { Selector, t } from "testcafe"

class AddNewTaskPage {
  constructor() {
    this.todayHeader = Selector("span.simple_content")
    this.topMenuBar = Selector("div#flashdiv#top_bar_inner")
    this.addTaskSignIA = Selector("button.plus_add_button")
    this.addTaskSignTB = Selector("button#quick_add_task_holder")
    this.modalAddBox = Selector("div#reactist-modal-box-0")
    this.taskNameInput = Selector(
      "div.DraftEditor-editorContainer > div > div > div >div"
    )
    this.taskNameInputIA = Selector(
      "div.notranslate.public-DraftEditor-content"
    )
    this.taskDescriptionInput = Selector(
      "div.f9408a0e._6e9db9aa._6cad1a19:nth-child(2)"
    )
    this.taskDescriptionInputIA = Selector(
      "textarea.task_editor__description_field.no-focus-marker"
    )
    this.todayBtn = Selector("span.date.date_today")
    this.todayDaySelected = Selector(
      "button.calendar__day.calendar__day--selected"
    )
    this.addTaskBtn = Selector(
      "div.task_editor__form_actions > div > button:nth-of-type(1)"
    )
    this.addTaskBtnIA = Selector(
      "button._7a2031d6.a878a9a4._949f7858._7e5800ce.f9408a0e._56a651f6>span"
    )
    this.cancelTaskBtn = Selector(
      "div.task_editor__form_actions > div > button:nth-of-type(2)"
    )
    this.taskAddedToast = Selector("div[data-testid=toaster]")
  }

  async addingNewTaskTB(taskdescription, taskname) {
    await t
      .click(this.addTaskSignTB)
      .wait(5000)
      .typeText(this.taskDescriptionInput, taskdescription)
      .typeText(this.taskNameInput, taskname)
      .click(this.addTaskBtn)
      .wait(5000)
  }

  async addingNewTaskIA(taskdescription, taskname) {
    await t
      .click(this.addTaskSignIA)
      .wait(5000)
      .typeText(this.taskDescriptionInputIA, taskdescription)
      .typeText(this.taskNameInputIA, taskname)
      .click(this.addTaskBtn)
      .wait(5000)
      .click(this.cancelTaskBtn)
  }
}

export default new AddNewTaskPage()
