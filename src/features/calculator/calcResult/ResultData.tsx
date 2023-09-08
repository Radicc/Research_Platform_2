import { NewData } from "../calculator.interface"
import { numberWithCommas } from "../numberWithCommas"

import css from "./resultData.module.css"

interface Props {
  resultData: NewData
}

const ResultData = (props: Props) => {
  return (
    <>
      {props.resultData.Data.map((array) => (
        <div className={css.container}>
          {array.map((item, i) =>
            item != 0 ? (
              <h2
                key={i}
                className={`${css.dataItem}
              ${
                (array[0] == 0 && item < 0 && "text-red-400") ||
                (array[0] == 0 && item > 0 && "text-green-400") ||
                ""
              }
            `}
              >
                $ {numberWithCommas(item.toFixed(0))}
              </h2>
            ) : (
              <h2 key={i} className={css.dataItem}>
                ~
              </h2>
            )
          )}
        </div>
      ))}
    </>
  )
}

export default ResultData
