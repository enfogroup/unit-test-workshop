/**
 * Calculator class aiming to act like a basic graph calculator
 */
export class Calculator {
  private storedValue: number
  private currentValue: number
  /**
   * Creates a new calculator
   */
  constructor() {
    this.storedValue = 0
    this.currentValue = 0
  }

  /**
   * Adds two values together
   * @param a 
   * Leftside value in operation. If second parameter is not defined this becomes the right hand side operator
   * @param b 
   * Rightside value. Optional
   */
  public add = (a: number, b?: number): number => {
    const result = b ? a + b : a + this.currentValue
    this.currentValue = result
    return result
  }

  /**
   * Subtracts one value from another
   * @param a 
   * Leftside value in operation. If second parameter is not defined this becomes the right hand side operator
   * @param b 
   * Rightside value. Optional
   */
  public subtract = (a: number, b?: number): number => {
    const result = b ? a - b : a - this.currentValue
    this.currentValue = result
    return result
  }

  /**
   * Adds two values together
   * @param a 
   * Leftside value in operation. If second parameter is not defined this becomes the right hand side operator
   * @param b 
   * Rightside value. Optional
   */
  public multiply = (a: number, b?: number): number => {
    const result = b ? a * b : a * this.currentValue
    this.currentValue = result
    return result
  }

  /**
   * Adds two values together
   * @param a 
   * Dividend value in operation. If second parameter is not defined this becomes the divisor
   * @param b 
   * Rightside value. Optional
   */
  public divide = (a: number, b?: number): number => {
    const [dividen, divisor] = typeof b !== 'undefined' ? [a, b] : [this.currentValue, a]
    if (!divisor) {
      throw new Error('Unable to divide by 0')
    }
    const result = dividen/divisor
    this.currentValue = result
    return result
  }

  /**
   * Returns current value
   */
  public getValue = (): number =>{
    return this.currentValue
  }

  /**
   * Sets the current value
   * @param value 
   */
  public set = (value: number) => {
    this.currentValue = value
  }

  /**
   * Resets current value
   */
  public reset = () => {
    this.currentValue = this.storedValue = 0
  }

  /**
   * Stores current value for later usage
   */
  public store = () => {
    this.storedValue = this.currentValue
  }

  /**
   * Loads value from storage
   */
  public load = () => {
    this.currentValue = this.storedValue
  }
}