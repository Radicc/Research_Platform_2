import { Data, NewData } from "../calculator.interface"

interface Props {
  inputData: Data
  resultData: NewData
}

const getResultObject = (props: Props) => {
  let currentYear = new Date().getFullYear()
  let resultArray = [
    {
      title: "Year",
      value:
        (currentYear + props.resultData.yearsToRetireCal).toString() || "?",
    },
    { title: "Saved", value: props.resultData.NormalSaveCal || 0 },
    { title: "Growth", value: props.resultData.GrowthCal || 0 },
    {
      title: `Balance`,
      years: ` ${props.inputData.RetirementAge || 0}yo`,
      value: props.resultData.LastYearCal || 0,
    },
    {
      title: "Pension",
      value: props.resultData.RetireMonthlySalary || 0,
    },
    {
      title: `Balance`,
      years: ` ${props.inputData.ExpectToLive || 0}yo`,
      value: props.resultData.BalancedEnd || 0,
    },
    { title: "Enough", value: props.resultData.Enough || "?" },
  ]
  return { resultArray, currentYear }
}

export default getResultObject
