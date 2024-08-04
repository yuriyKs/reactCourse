import UserContext from '../context/UserContext'
import { useContext } from 'react'

function UserInfo() {
  const { userName, changeUserName } = useContext(UserContext)
  // return without useContext
  //   return (
  //     <UserContext.Consumer>{(user) => <h1>{user}</h1>}</UserContext.Consumer>
  //   )
  return <h1>{userName}</h1>
}

export default UserInfo
