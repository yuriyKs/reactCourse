import { useState } from 'react'
import './App.css'
import Button from './components/Button'
import Counter from './components/Counter'

const text = ['Click ME', 'Click', 'Click ME', 'Click', 'Again', 'Press']

function App() {
  const [count, setCount] = useState(0)
  const incrementCount = () => {
    setCount(count + 1)
  }

  return (
    <div className="App">
      <Counter num={count} />
      {/* <Button onClicks={incrementCount} btnText={text[0]} />
      <Button onClicks={incrementCount} btnText={text[1]} />
      <Button onClicks={incrementCount} btnText={text[2]} />
      <Button onClicks={incrementCount} btnText={text[3]} /> */}
      {text.map((currentEleement, i) => {
        return (
          <Button onClicks={incrementCount} btnText={currentEleement} key={i} />
        )
      })}
    </div>
  )
}

export default App
