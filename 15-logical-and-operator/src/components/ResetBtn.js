function ResetBtn({ count, state }) {
  return (
    count > 0 && (
      <div>
        <button style={{ backgroundColor: 'lightblue' }} onClick={state}>
          Reset
        </button>
      </div>
    )
  )
}

export default ResetBtn
