import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FaSpinner } from 'react-icons/fa'
import {
  setAddBooks,
  fetchBook,
  selectIsLoadingViaAPI,
} from '../../redux/slices/booksSlice.js'
import { setError } from '../../redux/slices/errorSlice.js'
import createBookWithId from '../../utils/createBookWithId.js'
import booksData from '../../data/books.json'
import './BookForm.css'

const BookForm = () => {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const isLoadingViaAPI = useSelector(selectIsLoadingViaAPI)
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()

    if (title && author) {
      const book = createBookWithId({ title, author }, 'manual')

      dispatch(setAddBooks(book))

      setTitle('')
      setAuthor('')
    } else {
      console.log('test')
      dispatch(setError('You must fill Title and Author!'))
    }
  }

  const addRandomeBook = () => {
    const randomindex = Math.floor(Math.random() * booksData.length)
    const randomBook = booksData[randomindex]

    dispatch(setAddBooks(createBookWithId(randomBook, 'random')))
  }

  const handleAddRandomBookByApi = () => {
    dispatch(fetchBook('http://localhost:4000/random-book-delayed'))
  }

  return (
    <div className="app-block book-form">
      <h2>Add a New Book</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor="author">Author:</label>
          <input
            type="text"
            id="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          ></input>
        </div>
        <button type="submit">Add Book</button>
        <button type="button" onClick={addRandomeBook}>
          Add RAndom
        </button>

        <button
          type="button"
          onClick={handleAddRandomBookByApi}
          disabled={isLoadingViaAPI}
        >
          {isLoadingViaAPI ? (
            <>
              <span>Loading Book...</span>
              <FaSpinner className="spinner" />
            </>
          ) : (
            ' Add RAndom via API'
          )}
        </button>
      </form>
    </div>
  )
}

export default BookForm
