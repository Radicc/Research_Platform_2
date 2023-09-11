import { collection, getDocs } from "firebase/firestore"
import DB from "@/config/firestore"

import { DataObject } from "./_layout/Study"

const GetStudyData = () => {
  const db = DB()

  const getStudyData = async () => {
    const querySnapshot = await getDocs(collection(db, "BooksData"))
    const booksData = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }))
    const querySnapshot2 = await getDocs(collection(db, "YoutubeData"))
    const youtubeData = querySnapshot2.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }))
    const querySnapshot3 = await getDocs(collection(db, "WebsiteData"))
    const websiteData = querySnapshot3.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }))

    const dataObject: DataObject = {
      BooksData: booksData,
      YoutubeData: youtubeData,
      WebsiteData: websiteData,
    }
    return dataObject
  }
  return { getStudyData }
}

export default GetStudyData
