import { useContext } from "react"
import { BooksContext } from "../contexts/BooksContext"
import { BookItem, queryBooksForType, SERVICE as BOOKTYPE_SERVICE } from "../services/booktype"
import { BookDetails} from "./BookDetails"
import { QueryList } from "./QueryList"


export const BookList = (props: React.PropsWithChildren): JSX.Element => {
  const { selectedGenre } = useContext(BooksContext)
  const queryKey = `${BOOKTYPE_SERVICE}Query-${selectedGenre}`
  const queryFn = () => queryBooksForType(selectedGenre)

  const listMapper = (book: BookItem) => <BookDetails book={book} />

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