import { useState } from 'react'

const Anecdote = ({header, anecdote, points}) => {
  return (
    <div>
        <h1>{header}</h1>
        <div>
          {anecdote}
        </div>
        <p>has {points} votes</p>
    </div>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.'
  ]
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(new Uint8Array(anecdotes.length))

  function randomNumber(max){
    var number = Math.floor(Math.random() * max)
    if(number === selected){
      return randomNumber(max)
    }
    return number
  }

  function vote(number){
    const copy = [...points]
    // kasvatetaan taulukon paikan number arvoa yhdellä
    copy[number] += 1 
    setPoints(copy)
  }

  //function for finding index for most poinst anecdote
  function indexOfMax(arr) {
    if (arr.length === 0) {
        return -1;
    }

    var max = arr[0];
    var maxIndex = 0;

    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            maxIndex = i;
            max = arr[i];
        }
    }

    return maxIndex;
}

  return (
    <div>
        <Anecdote header={"Anecdote of the day"} anecdote={anecdotes[selected]} points={points[selected]}></Anecdote>
        <div>
          <button onClick={() => {vote(selected)}}>vote</button>
          <button onClick={() => {setSelected(randomNumber(anecdotes.length))}}>next anecdote</button>
        </div>
        <Anecdote header={"Anecdote with most votes"} anecdote={anecdotes[indexOfMax(points)]} points={points[indexOfMax(points)]}></Anecdote>
      
    </div>
  )
}

export default App