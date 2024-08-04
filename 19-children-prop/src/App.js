import './App.css'
import Wrapper from './components/Wrapper'

function App() {
  return (
    <div className="App">
      <Wrapper color="green">
        <h2>Text in App in Wrapper</h2>
        <button>CLICK</button>
      </Wrapper>
      <Wrapper color="blue">
        <h2>Text in App in Wrapper</h2>
        <button>CLICK</button>
        <input></input>
      </Wrapper>
    </div>
  )
}

export default App
