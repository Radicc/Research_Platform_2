import { useState } from "react"
import { Data, NewData } from "../calculator.interface"

import Result from "../calcResult/Result"
import Form from "../calcForm/Form"

import css from "./calculator.module.css"

const Calculator = () => {
  const [inputData, setInputData] = useState<Data>({} as Data)
  const [resultData, setResultData] = useState<NewData>({} as NewData)
  return (
    <div className={css.container}>
      <Form
        inputData={inputData}
        setInputData={(e) => setInputData(e)}
        setResultData={(e) => setResultData(e)}
      />
      <Result inputData={inputData} resultData={resultData} />
    </div>
  )
}

export default Calculator
