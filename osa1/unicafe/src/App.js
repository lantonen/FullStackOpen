import { useState } from 'react'

const Statistics = ({good, neutral, bad}) => {
  if(good === 0 && neutral === 0 && bad ===0 ){
    return <p> No feedback given </p>
  }
  else{
    return (
      <div>
        <StatisticLine text = {"good"} amount = {good} ></StatisticLine>
        <StatisticLine text = {"neutral"} amount = {neutral} ></StatisticLine>
        <StatisticLine text = {"bad"} amount = {bad} ></StatisticLine>
        <StatisticLine text = {"all"} amount = {good + neutral + bad}></StatisticLine>
        <StatisticLine text = {"average"} amount = {(good * 1 + bad * (-1)) / (good + neutral + bad) }></StatisticLine>
        <StatisticLine text = {"positive"} amount = { `${good / (good + neutral + bad) * 100} %` }></StatisticLine>
      </div>
    )
  }
  
}

const StatisticLine = ({text, amount}) => {
  return(
    <p>{text} {amount}</p>
  )    
}

const Button = ({text, amount, callback}) => {
  return(
    <button onClick={() => callback(amount + 1)}> {text}</button>
  )    
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
        <Button text={"good"} amount={good} callback={setGood}></Button>
        <Button text={"neutral"} amount={neutral} callback={setNeutral}></Button>
        <Button text={"bad"} amount={bad} callback={setBad}></Button>
      <h2>statistics</h2>
      <div>
        <Statistics good={good} neutral={neutral} bad={bad}></Statistics>
      </div>
    

      
      
    </div>
  )
}

export default App