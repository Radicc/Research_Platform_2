export interface Data {
  Age: number
  RetirementAge: number
  CurrentSavings: number
  MonthlySavings: number
  IncreaseOfAnnualSaving: number
  AnnualizedReturns: number
  ExpectToLive: number
  Inflation: number
  CurrentMonthlyIncome: number
  IncomeInRetirement: number
}

export interface NewData {
  RetirementAge: number
  ExpectToLive: number
  yearsToRetireCal: number
  NormalSaveCal: number
  LastYearCal: number
  GrowthCal: number
  RetireMonthlySalary: number
  BalancedEnd: number
  Enough: string
  Data: number[][]
}
