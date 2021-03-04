import { Calculator } from '../src/calculator'

describe('calculator', () => {
  const calculator = new Calculator()

  beforeEach(() => {
    calculator.reset()
  })

  describe('add', () => {
    it('should add two numbers', () => {
      const output = calculator.add(5, 3)

      expect(output).toEqual(8)
    })

    it('should add to existing value in memory', () => {
      calculator.set(38)

      const output = calculator.add(4)

      expect(output).toEqual(42)
    })
  })
})
