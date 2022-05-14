import { Selector, t } from "testcafe"

class AddNewTaskPage {
  constructor() {
    this.todayHeader = Selector("span.simple_content")
    this.topMenuBar = Selector("div#flashdiv#top_bar_inner")
    this.addTaskSign = Selector("button#quick_add_task_holder")
    this.modalAddBox = Selector("div#reactist-modal-box-0")
    this.taskNameInput = Selector(
      "div.public-DraftStyleDefault-block.public-DraftStyleDefault-ltr"
    )
    this.taskDescriptionInput = Selector(
      "textarea.task_editor__description_field.no-focus-marker"
    )
    this.todayBtn = Selector("span.date.date_today")
    this.todayDaySelected = Selector(
      "button.calendar__day.calendar__day--selected"
    )
    this.addTaskBtn = Selector(
      "button._7a2031d6.a878a9a4._949f7858.f9408a0e._56a651f6"
    )
    this.cancelTaskBtn = Selector(
      "button._7a2031d6._81c213d2._949f7858.f9408a0e._56a651f6"
    )
    this.taskAddedWarning = Selector(
      "div.MMvZR6tDpos6lWkPSaNI6w==._5641699f.f9408a0e._6e9db9aa._9510d053._41ef5755._21b8bafa _8c75067a"
    )
  }

  async clickOnAddTaskSign() {
    await t.click(this.addTaskSign)
  }

  async setTaskName(taskName) {
    await t.typeText(this.taskNameInput, taskName)
  }

  async setUserName(taskDescription) {
    await t.typeText(this.taskDescriptionInput, taskDescription)
  }

  async clickOnAddTaskBtn() {
    await t.click(this.addTaskBtn)
  }

  async clickOnTaskName() {
    await t.click(this.taskNameInput)
  }
}

export default new AddNewTaskPage()
