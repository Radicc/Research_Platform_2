import { Data } from "./calculator.interface"

const Math = (data: Data) => {
  let Age = data.Age || 0
  let RetirementAge = data.RetirementAge || 0
  let ExpectToLive = data.ExpectToLive || 0
  let yearsToRetireCal = 0
  let NormalSaveCal = 0
  let IncreaseOfAnnualSavingCal = (data.IncreaseOfAnnualSaving || 0) / 100
  let Inflation = (data.Inflation || 0) / 100
  let SalaryRetirement = (data.IncomeInRetirement || 0) / 100
  let CurrentSavings = data.CurrentSavings || 0

  let AnnualizedReturnsCal = (data.AnnualizedReturns || 0) / 100

  let Enough = "?"
  let firstYearCal = 0
  let LastYearCal = 0
  let GrowthCal = 0
  let AnnualSavings = (data.MonthlySavings || 0) * 12
  let RetirementIncome = data.CurrentMonthlyIncome || 0
  let BalancedEnd = 0

  firstYearCal = // $3600 + $10 000 + $1 000 = $14 600 => First year of investing
    AnnualSavings +
    CurrentSavings + // $10 000
    AnnualizedReturnsCal * CurrentSavings // 10 / 100 * 10 000 = $1 000 => (1year annualized returns of current savings)

  LastYearCal = firstYearCal // First year of investing
  let LastYearCalArray = [firstYearCal - CurrentSavings - AnnualSavings]

  NormalSaveCal = firstYearCal
  let NormalSaveArray = [firstYearCal]
  let BalanceArray = [firstYearCal]
  let BalancedEndArray = [0]

  yearsToRetireCal = RetirementAge - Age // 60y(retireAge) - 20y(how old are we) Years to retirement

  //yearsToDieCal = data.ExpectToLive - data.RetirementAge; // 90y(Death year) - 60y(retireAge) Years in retirement

  for (let i = 1; i < yearsToRetireCal; i++) {
    NormalSaveCal += AnnualSavings + IncreaseOfAnnualSavingCal * AnnualSavings
    NormalSaveArray.push(NormalSaveCal)

    LastYearCal +=
      AnnualizedReturnsCal * LastYearCal +
      (AnnualSavings * IncreaseOfAnnualSavingCal + AnnualSavings)
    BalanceArray.push(LastYearCal) // pushing data when balance is accumulation mode
    BalancedEndArray.push(0)

    const newGrowItem = LastYearCal - NormalSaveCal
    LastYearCalArray.push(newGrowItem)
  }

  GrowthCal = LastYearCal

  let RetirementIncomeArray = [RetirementIncome]
  for (let i = 1; i < yearsToRetireCal; i++) {
    RetirementIncome += RetirementIncome * Inflation
    RetirementIncomeArray.push(RetirementIncome)
  }
  const RetireMonthlySalary = RetirementIncome * SalaryRetirement
  RetirementIncome = RetirementIncome * SalaryRetirement // Uprava standartu v dochodku podla percent IncomeInRetirement

  BalancedEnd = LastYearCal

  for (let i = RetirementAge; i < ExpectToLive; i++) {
    BalancedEnd -= RetirementIncome * 12
    BalancedEndArray.push(BalancedEnd)

    RetirementIncome += RetirementIncome * Inflation
    RetirementIncomeArray.push(RetirementIncome)
  }

  if (BalancedEnd > 0) {
    Enough = "Yes"
  } else {
    Enough = "No"
  }

  for (let i = 0; i < ExpectToLive - RetirementAge; i++) {
    NormalSaveArray.push(0)
    LastYearCalArray.push(0)
    BalanceArray.push(0)
  }

  let Data = [
    NormalSaveArray,
    LastYearCalArray,
    BalanceArray,
    RetirementIncomeArray,
    BalancedEndArray,
  ]
  ExpectToLive = ExpectToLive - Age
  return {
    RetirementAge,
    ExpectToLive,
    yearsToRetireCal,
    RetireMonthlySalary,
    NormalSaveCal,
    LastYearCal,
    GrowthCal,
    BalancedEnd,
    Enough,
    Data,
  }
}
export default Math
