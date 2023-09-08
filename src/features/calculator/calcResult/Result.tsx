import { Data, NewData } from "../calculator.interface"
import { numberWithCommas } from "../numberWithCommas"

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
      <div className="flex">
        <div className={css.resultsWrapper}>
          {resultArray.map((result, i) => (
            <div className="flex flex-col py-4 gap-5">
              <div className="w-full flex gap-1">
                <h2 key={i}>{result.title}</h2>
                <h3 className={" text-yellow-400 text-xl"}>{result.years}</h3>
              </div>
              <div className="w-full flex gap-1">
                <h2
                  key={i}
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
      </div>

      {props.resultData.Data && (
        <div className="flex py-5 overflow-y-scroll">
          <div className={css.dataWrapper}>
            {Array(props.resultData.ExpectToLive)
              .fill(0)
              .map((x, i) => (
                <h2 key={i} className={css.dataItem}>
                  {currentYear + i}
                </h2>
              ))}
          </div>

          {props.resultData.Data.map((array) => (
            <div className={css.dataWrapper}>
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
        </div>
      )}
    </div>
  )
}

export default Result
