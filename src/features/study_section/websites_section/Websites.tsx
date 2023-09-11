import { DataObject } from "../_layout/study.interface"

import { BsSpeedometer } from "react-icons/bs"

import css from "./websites.module.css"

interface Props {
  data: DataObject | undefined
}

const Websites = (props: Props) => {
  return (
    <div className={css.container}>
      <div className={css.gridWrapper}>
        {props.data?.WebsiteData.map((website) => (
          <div key={website.id} className={css.bookContainer}>
            <img
              src={website.srcIMG}
              onClick={() => window.open(website.websiteLink, "_blank")}
            />
            <div className={css.flexWrapper}>
              <h1>{website.title}</h1>
              <p>{website.paragraf}</p>

              <div className={css.difficultyWrapper}>
                <div>
                  <BsSpeedometer
                    className={css.diffcultyIcon}
                    size={"2.5rem"}
                    color={"gold"}
                  />
                  <h2>{website.difficulty}</h2>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Websites
