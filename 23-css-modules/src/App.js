import './App.css'
import Info from './components/Info'
import Test from './components/Test'

function App() {
  return (
    <div className="App">
      <Info />
      <h1>APP heading H1</h1>
      <h2>H2 in App components</h2>
      <button className="my-btn">APP compnent btn</button>
      <Test />
    </div>
  )
}

export default App
