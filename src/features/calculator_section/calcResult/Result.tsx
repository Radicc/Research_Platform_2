import { Data, NewData } from "../calculator.interface"

import ResultData from "./ResultData"
import ResultYears from "./ResultYears"
import ResutlBar from "./ResultBar"

import getResultObject from "./getResultObject"

import css from "./result.module.css"

interface Props {
  resultData: NewData
  inputData: Data
}

const Result = (props: Props) => {
  const { resultArray, currentYear } = getResultObject({ ...props })
  return (
    <div className={css.container}>
      <ResutlBar resultArray={resultArray} />

      {!props.resultData.Data && (
        <div className={css.informationWrapper}>
          <h1>Inputs are empty!</h1>
          <h2>{`<= Enter data for calculation of your future pension`}</h2>
        </div>
      )}

      {props.resultData.Data && (
        <div className={css.renderWrapper}>
          <ResultYears
            resultData={props.resultData}
            currentYear={currentYear}
          />
          <ResultData resultData={props.resultData} />
        </div>
      )}
    </div>
  )
}

export default Result
