import { useState } from 'react'
import './App.css'
import Button from './components/Button'
import Counter from './components/Counter'

function App() {
  console.log('render')
  const [count, setCount] = useState(0)
  const incrementCount = () => {
    setCount(count + 1)
  }

  return (
    <div className="App">
      <Counter num={count} />
      <Button onClicks={incrementCount} />
      <Button onClicks={incrementCount} />
      <Button onClicks={incrementCount} />
      <Button onClicks={incrementCount} />
    </div>
  )
}

export default App
