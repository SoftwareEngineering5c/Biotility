'use strict';

describe('Link Tests:', function() {

  // set up tests by returning to main page before each test
  beforeEach(function() {
    browser.get('http://localhost:3000/');
  });

  // test contact page route
  it('should send user to contact page', function() {
    element(by.id('contact')).click();

    expect(browser.getCurrentUrl()).toBe('http://localhost:3000/contact');
  });

  // test about page route
  it('should send user to about page', function() {
    element(by.id('about')).click();

    expect(browser.getCurrentUrl()).toBe('http://localhost:3000/about');
  });

  // test home page route
  it('should send user to home page', function() {
    element(by.id('home')).click();

    expect(browser.getCurrentUrl()).toBe('http://localhost:3000/');
  });
});
