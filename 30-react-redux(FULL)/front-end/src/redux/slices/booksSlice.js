import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import createBookWithId from '../../utils/createBookWithId.js'
import { setError } from './errorSlice.js'
import axios from 'axios'

const initialState = {
  books: [],
  isLoadingViaAPI: false,
}

export const fetchBook = createAsyncThunk(
  'books/fetchBook',
  async (url, thunkApi) => {
    try {
      const res = await axios.get(url)
      return res.data
    } catch (error) {
      thunkApi.dispatch(setError(error.message))
      // OPTION 1
      return thunkApi.rejectWithValue(error)
      // OPTION 2
      // throw error
    }
  }
)

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    setAddBooks: (state, action) => {
      state.books.push(action.payload)
      //   return [...state, action.payload]
    },
    setDeleteBooks: (state, action) => {
      // const index = state.findIndex((book) => book.id === action.payload)
      // if(index !== -1) {
      //state.splice(index, 1)
      //}
      return {
        ...state,
        books: state.books.filter((e) => e.id !== action.payload),
      }
    },
    setToggleFavourite: (state, action) => {
      state.books.forEach((book) => {
        if (book.id === action.payload) {
          book.isFavorite = !book.isFavorite
        }
      })
    },
  },
  // Option 1
  extraReducers: (builder) => {
    builder.addCase(fetchBook.pending, (state) => {
      state.isLoadingViaAPI = true
    })
    builder.addCase(fetchBook.fulfilled, (state, action) => {
      state.isLoadingViaAPI = false
      if (action?.payload?.title && action?.payload?.title)
        state.books.push(createBookWithId(action.payload, 'api'))
    })
    builder.addCase(fetchBook.rejected, (state) => {
      state.isLoadingViaAPI = false
    })
  },
  // Option 2
  // extraReducers: {
  //   [fetchBook.pending]: (state) => {
  //     state.isLoadingViaAPI = true
  //   },
  //   [fetchBook.fulfilled]: (state, action) => {
  //     state.isLoadingViaAPI = false
  //     if (action.payload.title && action.payload.title)
  //       state.books.push(createBookWithId(action.payload, 'api'))
  //   },
  //   [fetchBook.rejected]: (state) => {
  //     state.isLoadingViaAPI = false
  //   },
  // },
})

export const { setAddBooks, setDeleteBooks, setToggleFavourite } =
  booksSlice.actions

export const selectBooks = (state) => state.books.books //state - состояние обьекта, books - елемент обекта, books - имя слайса (createSlice {name: 'books'})
export const selectIsLoadingViaAPI = (state) => state.books.isLoadingViaAPI
export default booksSlice.reducer
