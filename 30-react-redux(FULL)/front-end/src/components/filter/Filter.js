import { useDispatch, useSelector } from 'react-redux'
import {
  setTitleFilter,
  selectTitleFilter,
  resetFilters,
  selectAuthorFilter,
  setAuthorFilter,
  setOnlyFavoriteFilter,
  selectOnlyFavorite,
} from '../../redux/slices/filterSlice'
import './Filter.css'

const Filter = () => {
  const dispatch = useDispatch()
  const titleFilter = useSelector(selectTitleFilter)
  const authorFilter = useSelector(selectAuthorFilter)
  const onlyFavoriteFilter = useSelector(selectOnlyFavorite)

  const handleTitleFilterChange = (e) => {
    dispatch(setTitleFilter(e.target.value))
  }

  const handleFilterReset = () => {
    dispatch(resetFilters())
  }

  const handleAuthorFilterChange = (e) => {
    dispatch(setAuthorFilter(e.target.value))
  }

  const handleOnlyFavoriteChange = () => {
    dispatch(setOnlyFavoriteFilter())
  }

  return (
    <div className="app-block filter">
      <div className="filter-row">
        <div className="filter-group">
          <input
            type="text"
            placeholder="Filter by title..."
            value={titleFilter}
            onChange={handleTitleFilterChange}
          />
        </div>
        <div className="filter-group">
          <input
            type="text"
            placeholder="Filter by author..."
            value={authorFilter}
            onChange={handleAuthorFilterChange}
          />
        </div>
        <div className="filter-group">
          <label>
            <input
              type="checkbox"
              checked={onlyFavoriteFilter}
              onChange={handleOnlyFavoriteChange}
            />
            Only Favorite
          </label>
        </div>
        <button onClick={handleFilterReset}>Reset Filter</button>
      </div>
    </div>
  )
}

export default Filter
