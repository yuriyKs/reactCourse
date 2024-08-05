import { useSelector, useDispatch } from 'react-redux'
import { BsBookmarkStarFill, BsBookmarkStar } from 'react-icons/bs'
import {
  selectTitleFilter,
  selectAuthorFilter,
  selectOnlyFavorite,
} from '../../redux/slices/filterSlice.js'
import {
  setDeleteBooks,
  setToggleFavourite,
  selectBooks,
} from '../../redux/slices/booksSlice.js'
import './BookList.css'

const BookList = () => {
  const books = useSelector(selectBooks)
  const titleFilter = useSelector(selectTitleFilter)
  const authorFilter = useSelector(selectAuthorFilter)
  const onlyFavorite = useSelector(selectOnlyFavorite)
  const dispatch = useDispatch()

  const handleDeleteBook = (id) => {
    dispatch(setDeleteBooks(id))
  }

  const handleToggleFavourite = (id) => {
    dispatch(setToggleFavourite(id))
  }

  const filteredBooks = books.filter((book) => {
    const matchesTitle = book.title
      .toLowerCase()
      .includes(titleFilter.toLowerCase())

    const matchesAuthor = book.author
      .toLowerCase()
      .includes(authorFilter.toLowerCase())

    const matchesFavorite = onlyFavorite ? book.isFavorite : true

    return matchesTitle && matchesAuthor && matchesFavorite
  })

  const highlightList = (text, filter) => {
    if (!filter) return text

    const regex = new RegExp(`(${filter})`, 'gi')

    return text.split(regex).map((substring, i) => {
      console.log('substring=', substring)
      if (substring.toLowerCase() === filter.toLowerCase()) {
        return (
          <span key={i} className="highlight">
            {substring}
          </span>
        )
      }
      return substring
    })
  }

  return (
    <div className="app-block book-list">
      <h2>Book list</h2>
      {books.length === 0 ? (
        <p>No Books Avialable</p>
      ) : (
        <ul>
          {filteredBooks.map((book, i) => (
            <li key={book.id}>
              <div className="book-info">
                {++i}. {highlightList(book.title, titleFilter)} by{' '}
                <strong>{highlightList(book.author, authorFilter)}</strong>
                {' added ' + book.source}
              </div>

              <div className="book-actions">
                <span onClick={() => handleToggleFavourite(book.id)}>
                  {book.isFavorite ? (
                    <BsBookmarkStarFill className="star-icon true" />
                  ) : (
                    <BsBookmarkStar className="star-icon false" />
                  )}
                </span>

                <button onClick={() => handleDeleteBook(book.id)}>
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default BookList
