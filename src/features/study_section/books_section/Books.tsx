import { DataObject } from "../_layout/study.interface"

import { AiFillAmazonCircle } from "react-icons/ai"
import { BsSpeedometer } from "react-icons/bs"
import { FaEbay } from "react-icons/fa"

import css from "./books.module.css"

interface Props {
  data: DataObject | undefined
}

const Books = (props: Props) => {
  return (
    <div className={css.container}>
      <div className={css.gridWrapper}>
        {props.data?.BooksData.map((book) => (
          <div key={book.id} className={css.bookContainer}>
            <img src={book.srcIMG} />
            <div className={css.flexWrapper}>
              <h1>{book.title}</h1>
              <p>{book.paragraf}</p>

              <div className={css.difficultyWrapper}>
                <div>
                  <BsSpeedometer
                    className={css.diffcultyIcon}
                    size={"2.5rem"}
                    color={"gold"}
                  />
                  <h2>{book.diffculty}</h2>
                </div>
                <div>
                  <h2>Where to buy:</h2>
                  <AiFillAmazonCircle
                    onClick={() => window.open(book.amazonLink, "_blank")}
                    size={"2.5rem"}
                    color={"gold"}
                    className={"cursor-pointer"}
                  />
                  <FaEbay
                    onClick={() => window.open(book.ebayLink, "_blank")}
                    size={"2.5rem"}
                    color={"gold"}
                    className={"cursor-pointer"}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Books
