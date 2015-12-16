'use strict';

describe('Signin Tests:', function() {

  // element variables for easy accessibility
  var userField = element(by.model('credentials.username'));
  var passField = element(by.model('credentials.password'));
  var submitButton = element(by.css('button[type=submit]'));

  beforeEach(function() {
    browser.get('http://localhost:3000/authentication/signin');
  });

  afterEach(function() {
    browser.sleep(3000);
  });

  // good login test
  it('should login user', function() {

    // valid login credentials
    userField.sendKeys('abc');
    passField.sendKeys('abc');

    submitButton.click();

    // user logged in successfully and was re-routed to main page
    expect(browser.getCurrentUrl()).toBe('http://localhost:3000/');
  });

  // logout user test
  it('should logout user', function() {

    element(by.id('logout')).click();

    // user is logged out, logout button should not be visible.
    expect(element(by.id('logout')).isDisplayed()).toBeFalsy();

    //  Login button should be visible.
    expect(element(by.id('login')).isDisplayed()).toBeTruthy();

  });

  // bad login test
  it('should not login user', function() {

    // invalid login credentials
    userField.sendKeys('abc');
    passField.sendKeys('abc2');

    submitButton.click();

    // alert is thrown for bad login
    browser.switchTo().alert().then(
      function(alert) {
        alert.accept();

        // user did not leave page because login failed.
        expect(browser.getCurrentUrl()).toBe('http://localhost:3000/authentication/signin');
      },
      function(error) {}
    );
  });

});

describe('Signup Tests:', function() {


});
