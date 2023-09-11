import { useState } from "react"

import { useQuery } from "@tanstack/react-query"

import GetStudyData from "../getStudyData"

import Books from "../books_section/Books"
import Youtube from "../youtube_section/Youtube"
import Websites from "../websites_section/Websites"

import css from "./study.module.css"

const Study = () => {
  const { getStudyData } = GetStudyData()

  const { data, isLoading } = useQuery({
    queryFn: () => getStudyData(),
    queryKey: ["Data"],
  })

  let components = [
    { title: "Books", component: Books },
    { title: "Youtube", component: Youtube },
    { title: "Websites", component: Websites },
  ]

  const [CurrentSection, setCurrentSection] = useState<{
    title: string
    component: (props: any) => JSX.Element
  }>(components[0])

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

      {!isLoading && <CurrentSection.component data={data} />}
    </div>
  )
}

export default Study
