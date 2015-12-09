'use strict';

describe('Protractor Demo App', function() {
  

  // it('should add a todo', function() {
  //   browser.get('https://angularjs.org');
  //   browser.sleep(5000);

  //   element(by.model('todoList.todoText')).sendKeys('write first protractor test');
  //   element(by.css('[value="add"]')).click();
    
  //   browser.sleep(5000);
    
  //   var todoList = element.all(by.repeater('todo in todoList.todos'));
  //   expect(todoList.count()).toEqual(3);
  //   expect(todoList.get(2).getText()).toEqual('write first protractor test');

  //   // You wrote your first test, cross it off the list
  //   todoList.get(2).element(by.css('input')).click();
  //   var completedAmount = element.all(by.css('.done-true'));
  //   expect(completedAmount.count()).toEqual(2);

  //   browser.sleep(10000);

  // });

  it('should take a quiz' ,function () {
    browser.get('http://localhost:3000/');
    browser.sleep(3000);
    element(by.css('[value="Applications_quiz"]')).click();
    browser.sleep(1000);
    element(by.css('[value="start"]')).click();
    browser.sleep(1000);
    
    element(by.css('[value="1"]')).click();
        browser.sleep(2000);
        element(by.css('[value="next"]')).click();

    element(by.css('[value="3"]')).click();
        browser.sleep(2000);
        element(by.css('[value="next"]')).click();
    element(by.css('[value="1"]')).click();
        browser.sleep(2000);
        element(by.css('[value="next"]')).click();
    element(by.css('[value="T"]')).click();
        browser.sleep(2000);
        element(by.css('[value="next"]')).click();
    
    element(by.css('[value="finished"]')).click();
        browser.sleep(2000);

    var score = element(by.id('results'));
    //expect(score.value).toEqual(4);
    //var score = angular
    expect(score.getText()).toEqual('4 / 4');
    browser.sleep(2000);

  });





  
  // beforeEach(module( ApplicationConfiguration.registerModule('quiz') ));

  // var $controller;

  // beforeEach(inject(function(_$controller_){
  //   // The injector unwraps the underscores (_) from around the parameter names when matching
  //   $controller = _$controller_;
  // }));

  // describe('$QuizController', function() {
  //   it('sets the strength to "strong" if the password length is >8 chars', function() {
  //     var $scope = {};
  //     var controller = $controller('PasswordController', { $scope: $scope });
  //     $scope.password = 'longerthaneightchars';
  //     $scope.grade();
  //     expect($scope.strength).toEqual('strong');
  //   });
  // });

});