import { DataObject } from "../_layout/Study"

import { BsSpeedometer } from "react-icons/bs"

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
                <BsSpeedometer
                  className={css.diffcultyIcon}
                  size={"2.5rem"}
                  color={"gold"}
                />
                <h2>{book.diffculty}</h2>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Books
