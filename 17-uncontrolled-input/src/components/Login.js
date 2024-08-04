function Login() {
  function handleFormSubmit(event) {
    event.preventDefault()

    const userData = {
      username: event.target.username.value,
      password: event.target.password.value,
    }

    console.log(userData)
    alert(JSON.stringify(userData))
  }

  return (
    <>
      <h1>TITLE</h1>
      <form onSubmit={handleFormSubmit}>
        <label>
          User:
          <input type="text" name="username" />
        </label>
        <label>
          Password:
          <input type="password" name="password" />
        </label>
        <button type="submin">Submit</button>
      </form>
    </>
  )
}

export default Login
