import { useContext } from "react"
import { BooksContext } from "../contexts/BooksContext"
import { BookListItem, query as bookTypeQuery, SERVICE as BOOKTYPE_SERVICE } from "../services/booktype"
import { QueryList } from "./QueryList"


export const BookTypeList = (props: React.PropsWithChildren): JSX.Element => {
  const { setSelectedGenre } = useContext(BooksContext)
  const queryKey = `${BOOKTYPE_SERVICE}Query`
  const queryFn = bookTypeQuery
  const listMapper = (bookType: BookListItem) => (
    <button key={bookType.code} onClick={() => setSelectedGenre(bookType.code)}>{bookType.name}</button>
  )

  return (
    <div>
      <QueryList
        queryKey={queryKey}
        queryFn={queryFn}
        listMapper={listMapper}
      />
    </div>
  )
}