import { NavLink } from 'react-router-dom'

const Menu = () => {
  return (
    <nav>
      <NavLink to="." end className="test">
        Home
      </NavLink>
      <NavLink
        to="about"
        style={({ isActive }) =>
          isActive ? { color: 'red', textDecoration: 'none' } : {}
        }
      >
        About
      </NavLink>
      <NavLink
        to="contacts"
        className={({ isActive }) => (isActive ? 'activeLink' : 'notActive')}
      >
        Contacts
      </NavLink>
      <NavLink to="courses">Courses</NavLink>
    </nav>
  )
}

export default Menu
