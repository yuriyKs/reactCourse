import UserContext from '../context/UserContext'
import { useContext } from 'react'

function ChangeUser() {
  const { userName, changeUserName } = useContext(UserContext)

  //   return (
  //     <button
  //       onClick={() =>
  //         changeUserName(userName === 'User-Name' ? 'Changed name' : 'User-Name')
  //       }
  //     >
  //       Change User
  //     </button>
  //   )

  function handleFormSubmit(el) {
    el.preventDefault()
    changeUserName(el.target.querySelector('#name').value)

    // el.querySelector('#name')
    // el.getElementById('name').value
    console.log('click', el.target.querySelector('#name').value)
  }

  return (
    <form onSubmit={(el) => handleFormSubmit(el)}>
      <input
        type="text"
        id="name"
        name="lname"
        // onChange={(el) => changeUserName(el.target.value)}
      ></input>
      <button type="submit">Submit</button>
    </form>
  )
}

export default ChangeUser
