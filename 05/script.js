const App = ({ initialBtnText, initialClasses, initialId }) => {
  const [idData, setDataId] = React.useState(initialId)
  const [btnText, setBtnText] = React.useState(initialBtnText)
  const [setClass, setClassName] = React.useState(initialClasses)

  const onBtnClick = () => {
    setBtnText('Hellssllloooo')
    setClassName(`${initialClasses} green-btn rrr`)
    setDataId('data-after-click')
  }

  return (
    <div className="app">
      <button id={idData} className={setClass} onClick={onBtnClick}>
        {btnText}
      </button>
    </div>
  )
}

const container = document.getElementById('app')
const root = ReactDOM.createRoot(container)
root.render(
  <App
    initialBtnText="Click me"
    initialId="button-id"
    initialClasses="btn test"
  />
)
