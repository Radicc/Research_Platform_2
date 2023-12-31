export interface Inputs {
  id: number
  title: string
  schemaName: string
  info: string
  placeholder: string
  information: string
  symbol: string
}

export const inputs: Inputs[] = [
  {
    id: 1,
    title: "Age",
    schemaName: "Age",
    info: "",
    placeholder: "18",
    information: "Age when will you start investing.",
    symbol: "yo",
  },
  {
    id: 2,
    title: "Retirement Age",
    schemaName: "RetirementAge",
    info: "",
    placeholder: "60",
    information: "Age when will you stop investing.",
    symbol: "yo",
  },
  {
    id: 3,
    title: "Current Savings",
    schemaName: "CurrentSavings",
    info: "",
    placeholder: "$10 000",
    information: "Savings that are going to be invested.",
    symbol: "$",
  },
  {
    id: 4,
    title: "Monthly Savings",
    schemaName: "MonthlySavings",
    info: "",
    placeholder: "$300",
    information: "Money that you want to invest monthly.",
    symbol: "$",
  },
  {
    id: 5,
    title: "Increase of Annual Savings",
    schemaName: "IncreaseOfAnnualSaving",
    info: "",
    placeholder: "3%",
    information:
      "Increase monthly savings every year. You want at least the same percentual as inflation to not lose money over time.",
    symbol: "%",
  },
  {
    id: 6,
    title: "Annualized Returns",
    schemaName: "AnnualizedReturns",
    info: "",
    placeholder: "10%",
    information:
      "Annualized Returns mean how much money you will get from investing every year over XY years. Regular ETF SP500 had a 10% returns.",
    symbol: "%",
  },
  {
    id: 7,
    title: "Expected age To Live To?",
    schemaName: "ExpectToLive",
    info: "",
    placeholder: "90",
    information: "What age do you expect to live to.",
    symbol: "yo",
  },
  {
    id: 8,
    title: "Inflation",
    schemaName: "Inflation",
    info: "",
    placeholder: "3%",
    information:
      "You can place here the average inflation that's 2.5% or you can increase it if you think that the low inflation environment is over.",
    symbol: "%",
  },
  {
    id: 9,
    title: "Current Monthly Income ?",
    schemaName: "CurrentMonthlyIncome",
    info: "",
    placeholder: "$2 000",
    information:
      "Your monthly salary. We calculate how much money you are going to get monthly in retirement.",
    symbol: "$",
  },
  {
    id: 10,
    title: "Income in retirement",
    schemaName: "IncomeInRetirement",
    info: "",
    placeholder: "100%",
    information:
      "How much money as salary will you get monthly from retirement. 100% means that you want to have the same standard of living as now. You can increase by over 100% to improve your standards or decrease by under 100% to lower your standards in retirement.",
    symbol: "%",
  },
]
