import { BsSpeedometer } from "react-icons/bs"

import { youtubeArray } from "./youtubeData"

import css from "./youtube.module.css"

const Youtube = () => {
  return (
    <div className={css.container}>
      <div className={css.gridWrapper}>
        {youtubeArray.map((channel) => (
          <div key={channel.title} className={css.bookContainer}>
            <div className={css.flexWrapper}>
              <h1>{channel.title}</h1>
              <p>{channel.paragraf}</p>

              <div className={css.difficultyWrapper}>
                <BsSpeedometer
                  className={css.diffcultyIcon}
                  size={"2.5rem"}
                  color={"gold"}
                />
                <h2>{channel.diffculty}</h2>
              </div>
            </div>
            <img src={channel.srcIMG} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Youtube
