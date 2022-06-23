import { useState } from 'react'

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

  function randomNumber (max) {
    return Math.floor(Math.random() * max)
  }

  function vote (number) {
    const copy = [...points]
    // kasvatetaan taulukon paikan number arvoa yhdellä
    copy[number] += 1 
    setPoints(copy)
  }

  return (
    <div>
        <div>
          {anecdotes[selected]}
        </div>

        <div>
          <p>has {points[selected]} votes</p>
          <button onClick={() => {vote(selected)}}>vote</button>
          <button onClick={() => {setSelected(randomNumber(anecdotes.length))}}>next anecdote</button>
        </div>
      
    </div>
  )
}

export default App