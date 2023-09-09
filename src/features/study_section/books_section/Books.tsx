import { BsSpeedometer } from "react-icons/bs"

import { booksArray } from "./booksData"

import css from "./books.module.css"

const Books = () => {
  return (
    <div className={css.container}>
      <div className={css.gridWrapper}>
        {booksArray.map((book) => (
          <div key={book.title} className={css.bookContainer}>
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
