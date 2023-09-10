import { useEffect, useState } from "react"
import { collection, getDocs } from "firebase/firestore"
import DB from "@/config/firestore"

import Books from "../books_section/Books"
import Youtube from "../youtube_section/Youtube"
import Websites from "../websites_section/Websites"

import css from "./study.module.css"

const Study = () => {
  const [data, setData] = useState<any[]>([])

  const components = [
    { title: "Books", component: <Books data={data} /> },
    { title: "Youtube", component: <Youtube data={data} /> },
    { title: "Websites", component: <Websites data={data} /> },
  ]
  const [CurrentSection, setCurrentSection] = useState<{
    title: string
    component: JSX.Element
  }>(components[1])

  const db = DB()

  const getBooksData = async () => {
    const querySnapshot = await getDocs(collection(db, "ReasearchPlatform"))
    const booksData = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }))
    setData(booksData)
  }

  useEffect(() => {
    getBooksData()
  }, [])

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
      {CurrentSection && CurrentSection.component}
    </div>
  )
}

export default Study
