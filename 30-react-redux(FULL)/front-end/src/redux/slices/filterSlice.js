import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  title: '',
  author: '',
  onlyFavorite: false,
}

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setTitleFilter: (state, action) => {
      // you can mutate state thanks to Immer libarary
      state.title = action.payload

      // you can also return new state as usually
      // return {...state, action.payload}
    },
    setAuthorFilter: (state, action) => {
      state.author = action.payload
    },
    setOnlyFavoriteFilter: (state) => {
      state.onlyFavorite = !state.onlyFavorite
    },
    resetFilters: () => {
      return initialState
    },
  },
})

export const {
  setTitleFilter,
  resetFilters,
  setAuthorFilter,
  setOnlyFavoriteFilter,
} = filterSlice.actions

export const selectTitleFilter = (state) => state.filter.title
export const selectAuthorFilter = (state) => state.filter.author
export const selectOnlyFavorite = (state) => state.filter.onlyFavorite

export default filterSlice.reducer
