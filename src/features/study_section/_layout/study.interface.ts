export interface DataObject {
  BooksData: BooksArray[]
  YoutubeData: YoutubeArray[]
  WebsiteData: WebsiteArray[]
}
export interface BooksArray {
  id: string
  title: string
  srcIMG: string
  paragraf: string
  diffculty: string
  ebayLink: string
  amazonLink: string
}
export interface YoutubeArray {
  id: string
  title: string
  srcIMG: string
  diffculty: string
  paragraf: string
  channelLink: string
}
export interface WebsiteArray {
  id: string
  title: string
  srcIMG: string
  difficulty: string
  paragraf: string
  websiteLink: string
}
