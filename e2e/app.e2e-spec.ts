import { LessonOnePage } from './app.po';

describe('lesson-one App', function() {
  let page: LessonOnePage;

  beforeEach(() => {
    page = new LessonOnePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
