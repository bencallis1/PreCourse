export class PreCoursePage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('pre-course-app h1')).getText();
  }
}
