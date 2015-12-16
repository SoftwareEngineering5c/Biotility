'use strict';

describe('Link Tests:', function() {

  // set up tests by returning to main page before each test
  beforeEach(function() {
    browser.get('http://localhost:3000/');
  });

  afterEach(function() {
    browser.sleep(3000);
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

  // test resources page route
  it('should send user to subject resources page', function() {
   element(by.repeater('subject in subjects').row(11)).element(by.id('resources')).click();;

    expect(browser.getCurrentUrl()).toBe('http://localhost:3000/Applications/resources');
  });

  // test assessment page route
  it('should send user to subject resources page', function() {
   element(by.repeater('subject in subjects').row(11)).element(by.id('assessment')).click();;

    expect(browser.getCurrentUrl()).toBe('http://localhost:3000/Applications/quiz');
  });

});
