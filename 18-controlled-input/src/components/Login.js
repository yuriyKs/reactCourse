import { useState } from 'react'

function Login({ test1, tst2 }) {
  // const [username, setUserName] = useState('')
  // const [password, setPassword] = useState('')

  console.log(test1, tst2)

  const [data, setData] = useState({
    username: '',
    password: '',
    test1: test1,
    tst2,
  })

  const ClickedState = () => {
    console.log('testCONSOLE')
    setData({ ...data, test1: 'afterUse' })
  }

  function handleFormSubmit(event) {
    event.preventDefault()

    // const userData = {
    //   username: username,
    //   password: password,
    // }

    const userData = {
      username: data.username,
      password: data.password,
      test1: test1,
    }

    console.log(userData)
    alert(JSON.stringify(userData))
  }

  function hendleInputChange(e, name) {
    setData({ ...data, [name]: e.target.value })
  }

  return (
    <>
      <h1>TITLE</h1>
      <form onSubmit={handleFormSubmit}>
        <label onClick={ClickedState} data-attr={data.test1}>
          User:
          <input
            type="text"
            value={data.username}
            onChange={(e) => hendleInputChange(e, 'username')}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={data.password}
            onChange={(e) => hendleInputChange(e, 'password')}
          />
        </label>
        <button type="submin">Submit</button>
      </form>
    </>
  )
}

export default Login
