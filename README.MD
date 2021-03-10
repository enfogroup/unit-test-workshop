# About

This is a small unit test workshop. Your task is to work on unit tests for a simple calculator. 

## Getting started

* Clone the repository
* Run npm install
* Run npm test
* Work on improving test coverage by adding tests to calculator.spec.ts. Avoid updating other files
* When you are feeling done pull from the branch broken-refactoring
* Run your tests again and see which bugs you find

## The calculator

This project implements a simple calculator. The idea is that previous values can be reused for the next operation. In addition it has support for storing/loading data. Example usage:

```
import { Calculator } from './src/calculator'

const calculator = new Calculator()

calculator.add(5, 3) // returns 8 which is also stored internally
calculator.add(32) // adds 8+34 returning 42 which is also stored internally
calculator.store() // stores 42
calculator.multiply(5, 3) // returns 15 which is also stored internally
calculator.get() // returns 15
calculator.load() // attempts to load 42 from memory
calculator.get() // might return 42 or 0 as a fallback
```

## Writing tests

Most tests you will write for this project will be of a basic testing nature. Update internal value, perform an action and check the output. One method will require you to mock a function from another file.