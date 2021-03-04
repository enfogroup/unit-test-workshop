import * as storage from './storage'

/**
 * Calculator class aiming to act like a basic graph calculator
 */
export class Calculator {
  private currentValue: number
  /**
   * Creates a new calculator
   */
  constructor() {
    this.currentValue = 0
  }

  /**
   * Parses values from operator input
   * @param a 
   * A number
   * @param b
   * Number or undefined 
   */
  private getValues = (a: number, b?: number): number[] => {
    return !b ? [a, b] : [this.currentValue, a]
  }

  /**
   * Adds two values together
   * @param a 
   * Leftside value in operation. If second parameter is not defined this becomes the right hand side operator
   * @param b 
   * Rightside value. Optional
   */
  public add = (a: number, b?: number): number => {
    const [left, right] = this.getValues(a, b)
    const result = left + right
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
    const [left, right] = this.getValues(a, b)
    const result = left - right
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
    const [left, right] = this.getValues(a, b)
    const result = left * right
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
    const [left, right] = this.getValues(a, b)
    const result = left / right
    this.currentValue = result
    return result
  }

  /**
   * Returns current value
   */
  public get = (): number => {
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
  public reset = (): void => {
    this.currentValue = 0
  }

  /**
   * Stores current value for later usage
   */
  // istanbul ignore next, nohing to test here
  public store = async (): Promise<void> => {
    storage.storeData(this.currentValue)
  }

  /**
   * Loads value from storage
   */
  public load = async (): Promise<void> => {
    this.currentValue = storage.loadData()
  }
}
