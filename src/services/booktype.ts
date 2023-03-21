import { API } from "../config/api-endpoints"

type QueryData<ItemType> = {
  results: Array<ItemType>
}
export type BookListItem = {
  code: string
  name: string
}
export type BookItem = {
  title: string
  author: string
  rank: number
  isbn10: string
  isbn13: string
  reviews: Array<Review>
}
export type Review = {
  byLine: string
  url: string
}

export const SERVICE = 'BookType'
export const query = async (): Promise<QueryData<BookListItem>> => {
  const response = await fetch(API.BOOKTYPE_LIST)
  const jsonData = await response.json()
  
  return jsonData
}
export const queryBooksForType = async (booktypeCode: string = ''): Promise<QueryData<BookItem>> => {
  if (booktypeCode.length > 0) {
    const response = await fetch(`${API.BOOKTYPE_LIST}/${booktypeCode}`)
    const jsonData = await response.json() 
    return jsonData
  }
  return { results: [] }
}