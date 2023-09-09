import { NewData } from "../calculator.interface"
import css from "./resultYears.module.css"

interface Props {
  resultData: NewData
  currentYear: number
}

const ResultYears = (props: Props) => {
  return (
    <div className={css.container}>
      {Array(props.resultData.ExpectToLive)
        .fill(0)
        .map((x, i) => (
          <h2 key={i} className={css.dataItem}>
            {props.currentYear + i}
          </h2>
        ))}
    </div>
  )
}

export default ResultYears
