import { PreCoursePage } from './app.po';

describe('pre-course App', function() {
  let page: PreCoursePage;

  beforeEach(() => {
    page = new PreCoursePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('pre-course works!');
  });
});
