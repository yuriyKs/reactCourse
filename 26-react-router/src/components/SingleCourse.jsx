import { Link, useNavigate, useParams, useLocation } from 'react-router-dom'
import courses from '../data/Courses'
import { useEffect } from 'react'

function SingleCourse() {
  const params = useParams()
  const course = courses.find((course) => course.slug === params.courseSlug)
  const navigate = useNavigate()
  const location = useLocation()

  // console.log(location)

  useEffect(() => {
    if (!course) {
      navigate('..', { relative: 'path' })
    }
  }, [course, navigate])

  return (
    <>
      <div>Single Course Info</div>
      <p> {course?.title}</p>
      <Link to=".." relative="path">
        All courses
      </Link>
    </>
  )
}

export default SingleCourse
