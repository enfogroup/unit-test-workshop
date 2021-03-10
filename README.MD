# About

This is a small unit test workshop. Your task is to work on unit tests for a simple calculator. In terms of time you should aim for 1-1.5 hours. The level of the workshop is easy and should be well suited for people with little to no testing experience.

## Getting started

* Clone the repository
* Run npm install
* Run npm test
* Work on improving test coverage by adding tests to calculator.spec.ts. Avoid updating other files
* When you are feeling done pull from the branch broken-refactoring. You can achieve this by running "git pull origin broken-refactoring"
* Make sure you read UPDATES.MD on the branch. It contains information about the introduced changes in behavior and bugs. In addition there are a few talking points regarding testing.

## The calculator

This project implements a simple calculator. The idea is that previous values can be reused for the next operation. In addition it has support for storing/loading data. Example usage:

```
import { Calculator } from './src/calculator'

const calculator = new Calculator()

calculator.add(5, 3) // returns 8 which is also stored internally
calculator.add(34) // adds 8+34 returning 42 which is also stored internally
calculator.store() // stores 42
calculator.multiply(5, 3) // returns 15 which is also stored internally
calculator.get() // returns 15
calculator.load() // attempts to load 42 from memory
calculator.get() // might return 42 or 0 as a fallback
```

## Writing tests

Most tests you will write for this project will be of a basic testing nature. Update internal value, perform an action and check the output. One method will require you to mock a function from another file. Here are a few pointers:

* While reaching full test coverage is nice but consider what you logically expect from the different methods. You probably not only want to check if it is possible to add two positive values together but also negative values and zero.
* When testing throwing of errors it is easy to end up going for a dirty try-catch solution. Most testing framework has proper support for this and many other situations.
* The load method is best handled using a mock of the loadData function from storage. You can achieve this by using jest.spyOn
