import './BookDetails.css'
import { BookItem } from "../services/booktype"
import { RenderGate } from './RenderGate'

interface BookDetailsProps {
  book: BookItem
}
export const BookDetails = (props: BookDetailsProps): JSX.Element => {
  const { book } = props
  const reviews = book.reviews.map(review => (<span className='book-review'><a href={review.url}>Review by {review.byLine}</a></span>))
  return (
    <div className='book-details'>
      <div className='book-detail-entry'>
          <span>{book.rank}. {book.title} - {book.author}</span>
       </div>
      <div className='book-detail-entry'>
          <span>{book.isbn10}</span>
       </div>
       <RenderGate renderIf={reviews.length > 0}>
        {reviews}
       </RenderGate>
    </div>
  )
}