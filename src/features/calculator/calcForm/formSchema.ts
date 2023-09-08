import { z } from "zod"
import { Data } from "../calculator.interface"

interface Props {
  inputData: Data
}

const formSchema = (props: Props) => {
  return z.object({
    Age: z
      .number({ invalid_type_error: "Age is required!" })
      .min(0, { message: "Number must be positive" }),
    RetirementAge: z
      .number({ invalid_type_error: "Retirement Age is required!" })
      .min(0, { message: "Number must be positive" })
      .refine((data) => data > props.inputData.Age, {
        message: "Retirement Age has to be bigger than Age!",
      }),
    CurrentSavings: z
      .number({ invalid_type_error: "Current Savings is required!" })
      .min(0, { message: "Number must be positive" }),
    MonthlySavings: z
      .number({ invalid_type_error: "Annual Savings is required!" })
      .min(0, { message: "Number must be positive" }),
    IncreaseOfAnnualSaving: z
      .number({ invalid_type_error: "Increase Of AnnualSaving is required!" })
      .min(0, { message: "Number must be positive" }),
    AnnualizedReturns: z
      .number({ invalid_type_error: "Annualized Returns is required!" })
      .min(0, { message: "Number must be positive" }),
    ExpectToLive: z
      .number({ invalid_type_error: "Expect To Live is required!" })
      .min(0, { message: "Number must be positive" })
      .refine((data) => data > props.inputData.RetirementAge, {
        message: "Has to be bigger than Retirement Age!",
      }),
    Inflation: z
      .number({ invalid_type_error: "Inflation is required!" })
      .min(0),
    CurrentMonthlyIncome: z
      .number({ invalid_type_error: "Current Monthly Income is required!" })
      .min(0, { message: "Number must be positive" }),
    IncomeInRetirement: z
      .number({ invalid_type_error: "Income In Retirement is required!" })
      .min(0, { message: "Number must be positive" }),
  })
}

export default formSchema
