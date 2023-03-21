import { createContext } from "react"

type BooksContextProps = {
  selectedGenre?: string
  setSelectedGenre: Function
}
export const BooksContext = createContext<BooksContextProps>({ setSelectedGenre: () => {} })

