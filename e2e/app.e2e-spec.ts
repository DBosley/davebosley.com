import { Davebosley.ComPage } from './app.po';

describe('davebosley.com App', () => {
  let page: Davebosley.ComPage;

  beforeEach(() => {
    page = new Davebosley.ComPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
