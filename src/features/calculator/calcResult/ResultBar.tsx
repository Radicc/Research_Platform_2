import { ResultArray } from "./getResultObject"
import css from "./resultBar.module.css"

interface Props {
  resultArray: ResultArray[]
}

const ResultBar = (props: Props) => {
  return (
    <div className={css.container}>
      {props.resultArray.map((result, i) => (
        <div key={i} className={css.flexWrapper}>
          <div className={css.dataContainer}>
            <h2>{result.title}</h2>
            <h3>{result.years}</h3>
          </div>
          <div className={css.dataContainer}>
            <h2
              className={
                (result.value == "Yes" && "text-green-400") ||
                (result.value == "No" && "text-red-400") ||
                ""
              }
            >
              {typeof result.value == "number"
                ? `$${result.value.toFixed(0)}`
                : result.value || "NaN"}
            </h2>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ResultBar
