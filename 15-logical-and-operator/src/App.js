import { useState } from 'react'
import './App.css'
import Button from './components/Button'
import Counter from './components/Counter'
import ResetBtn from './components/ResetBtn'

function App() {
  const [count, setCount] = useState(0)
  const incrementCount = () => {
    setCount(count + 1)
  }

  const resetCount = () => {
    setCount(0)
  }

  return (
    <div className="App">
      <Counter num={count} />
      <Button onClicks={incrementCount} />
      <Button onClicks={incrementCount} />
      <Button onClicks={incrementCount} />
      <Button onClicks={incrementCount} />
      <ResetBtn count={count} state={resetCount} />
    </div>
  )
}

export default App
