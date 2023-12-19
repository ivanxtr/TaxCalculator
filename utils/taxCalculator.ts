interface IPrices {
  taxBracket: {
    max?: number
    min: number
    rate: number
  }[]
  income: number
}

export const taxCalculator = ({ taxBracket, income }: IPrices) => {
  let totalTax = 0
  let remanent = 0

  taxBracket.forEach(({ max, rate }, idx: number) => {
    if (max && income < +max && idx === 0) {
      return (totalTax += +income * rate)
    } else {
      if (max && income > +max && idx === 0) {
        totalTax += +max * rate
        return (remanent = +income - +max)
      }

      if (max && income > +max && idx !== 0) {
        totalTax += remanent * rate
        return (remanent = +income - +max)
      }

      if (max && income < +max && idx !== 0) {
        totalTax += remanent * rate
        return (remanent = 0)
      }
    }

    if (!max) {
      return (totalTax += remanent * rate)
    }
  })

  console.log({ totalTax })
  return totalTax
}
