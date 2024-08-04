import { useEffect, useState } from 'react'
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom'
import courses from '../data/Courses'
import queryString from 'query-string'
import DropDownSelect from './DropDownSelect'

const SORT_KEYS = ['title', 'slug', 'id']

function sortCourses(courses, key) {
  const sortedCourses = [...courses]

  if (!key || !SORT_KEYS.includes(key)) {
    return sortedCourses
  }

  sortedCourses.sort((a, b) => (a[key] > b[key] ? 1 : -1))
  return sortedCourses
}

const Courses = () => {
  const location = useLocation()
  const query = queryString.parse(location.search)
  const [sortKey, setSortKey] = useState(query.sort)
  const navigate = useNavigate()
  const [sortedCourses, setSortedCourses] = useState(
    sortCourses(courses, sortKey)
  )

  //START Location filter dropdown selected item
  function handleChange(value) {
    navigate(`?sort=${value}`)
    setSortKey(value)
    setSortedCourses(sortCourses(courses, value))
  }
  //END Location filter dropdown selected item

  useEffect(() => {
    if (!SORT_KEYS.includes(sortKey)) {
      navigate('.')
      setSortKey()
      setSortedCourses([...courses])
      console.log('useEffect !SORT_KEYS.includes(sortKey)')
    }
  }, [sortKey, navigate])

  return (
    <>
      <DropDownSelect handleChange={handleChange} uniqueElements={SORT_KEYS} />

      <h1>{sortKey ? `Courses sorted by ${sortKey}` : 'Courses'}</h1>
      {sortedCourses.map((course) => {
        return (
          <div key={course.id}>
            <Link to={course.slug} className="courselink">
              {course.title}
            </Link>
          </div>
        )
      })}
    </>
  )
}

export default Courses
