# Conclusion

Congratulations, you have completed the workshop! Now run "npm test" and hopefully you should see plenty of broken unit tests. The following bugs and changes in behavior have been introduced:

* The private method getValues has been poorly refactored and now only checks if b is truthy. Operations where the second parameter is zero will now occasionally lead to unintended behavior. For example calculator.set(1) followed by calculator.add(5, 0) will return 6 instead of 5.
* The check for divisor 0 in divide has been removed.
* Storage has broken down. Your tests for load are hopefully still working!

## Talking points

Here are some talking points.

* Were your tests written as stand alone tests? Can they be run individually?
* The real value of test coverage.
* Did you write stable tests or did you end up relying on randomness?
* Utilizing the functionality of the testing framework. If you feel like you are doing something weird then the framework can probably assist you
* Testing in frontend
