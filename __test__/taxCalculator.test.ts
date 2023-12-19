import { TaxCalculator } from '../utils/taxCalculator'
import successResponse from '../__mocks__/200.json'

describe('Tax Calculator', () => {
  it('should calculate the tax for an income of 6000', () => {
    const taxCalculator = TaxCalculator({
      taxBracket: successResponse.tax_brackets,
      income: 5000
    })
    expect(+taxCalculator.toFixed(2)).toBe(750.0)
  })
  it('should calculate the tax for an income of 60000', () => {
    const taxCalculator = TaxCalculator({
      taxBracket: successResponse.tax_brackets,
      income: 60000
    })
    expect(+taxCalculator.toFixed(2)).toBe(9539.16)
  })
  it('should calculate the tax for an income of 101000', () => {
    const taxCalculator = TaxCalculator({
      taxBracket: successResponse.tax_brackets,
      income: 101000
    })
    expect(+taxCalculator.toFixed(2)).toBe(18102.25)
  })
})
