import React, { useState } from 'react'

const Button = (props) => {
  return (
    <button onClick = {props.handleClick}>
      {props.text}
    </button>
  )
}

const Display = (props) => {
  return (
    <div>
      <h1>{props.header}</h1>
      <p>{props.anec}</p>
      <p>has {props.votes} votes</p>
    </div>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blod tests when dianosing patients'
  ]

  const votes = Array.apply(null, new Array(anecdotes.length)).map(Number.prototype.valueOf,0)
  const [selected, setSelected] = useState(0)
  const [counts, setCount] = useState(votes)

  const randomize = () => {
    setSelected(Math.floor(Math.random()*anecdotes.length))
  }

  const vote = () => {
    let copy = [...counts]
    copy[selected] += 1
    setCount(copy)
  }

  return (
    <div>
      <Display header = "Anecdote of the day" anec={anecdotes[selected]} votes={counts[selected]} />
      <Button text="next anecdote" handleClick={() => randomize()} />
      <Button text="Vote" handleClick={() => vote()} />
      <br />
      <Display header="Anecdote with most votes" anec={anecdotes[counts.indexOf(Math.max(...counts))]} votes={counts[counts.indexOf(Math.max(...counts))]} />
    </div>
  )
}

export default App