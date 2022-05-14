import { Selector } from "testcafe"

class TodayPage {
  constructor() {
    this.titleToday = Selector("span.simple_content").withExactText("Today")
    this.todayHeader = Selector("span.simple_content")
    this.topMenuBar = Selector("div#flashdiv#top_bar_inner")
  }
}

export default new TodayPage()
