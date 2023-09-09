import { useState } from "react"

import Books from "../books_section/Books"
import Youtube from "../youtube_section/Youtube"
import Websites from "../websites_section/Websites"

import css from "./study.module.css"

const Study = () => {
  const components = [
    { title: "Books", component: Books },
    { title: "Youtube", component: Youtube },
    { title: "Websites", component: Websites },
  ]
  const [CurrentSection, setCurrentSection] = useState<{
    title: string
    component: () => JSX.Element
  }>(components[1])

  return (
    <div className={css.container}>
      <div className={css.buttonWrapper}>
        {components.map((section) => (
          <button
            className={
              CurrentSection.title == section.title
                ? "text-yellow-400 underline"
                : "text-gray-200"
            }
            key={section.title}
            onClick={() => setCurrentSection(section)}
          >
            {section.title}
          </button>
        ))}
      </div>
      {CurrentSection && CurrentSection.component()}
    </div>
  )
}

export default Study
