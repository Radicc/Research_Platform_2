import { BsSpeedometer } from "react-icons/bs"

import { DataObject } from "../_layout/study.interface"

import css from "./youtube.module.css"

interface Props {
  data: DataObject | undefined
}

const Youtube = (props: Props) => {
  return (
    <div className={css.container}>
      <div className={css.gridWrapper}>
        {props.data?.YoutubeData.map((channel) => (
          <div key={channel.id} className={css.bookContainer}>
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
            <img
              src={channel.srcIMG}
              onClick={() => window.open(channel.channelLink, "_blank")}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Youtube
