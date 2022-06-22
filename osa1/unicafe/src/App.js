import { useState } from 'react'

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const TextBox = ({text, amount}) => {
    return(
      <p>{text} {amount}</p>
    )    
  }

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={() => setGood(good + 1)}> good</button>
      <button onClick={() => setNeutral(neutral + 1)}> neutral</button>
      <button onClick={() => setBad(bad + 1)}> bad</button>
      <h2>statistics</h2>
      <div>
        <TextBox text = {"good"} amount = {good} ></TextBox>
        <TextBox text = {"neutral"} amount = {neutral} ></TextBox>
        <TextBox text = {"bad"} amount = {bad} ></TextBox>
      </div>
    

      
      
    </div>
  )
}

export default App