import { configureStore } from '@reduxjs/toolkit'
import booksSlice from './slices/booksSlice.js'
import filterReducer from '../redux/slices/filterSlice.js'
import errorReducer from './slices/errorSlice.js'

const store = configureStore({
  reducer: {
    books: booksSlice,
    filter: filterReducer,
    error: errorReducer,
  },
})

export default store
