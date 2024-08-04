import './App.css'
import RandomNumber from './components/RandomNumber'

function App() {
  return (
    <div className="App">
      <RandomNumber maxNum={10} />
      <RandomNumber maxNum={30} />
    </div>
  )
}

export default App
