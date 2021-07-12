import React, { useState } from "react";

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const Display = ({text}) => (
  <h1>{text}</h1>
)

const Statistic = (props) => (
  <tr>
    <td>{props.text}</td>
    <td>{props.val}</td>
  </tr>
)

const Percentage = (props) => (
  <tr>
    <td>{props.text}</td>
    <td>{props.val} %</td>
  </tr>
)


const Statistics = (props) => {
  let good = props.good
  let bad = props.bad
  let neutral = props.neutral
  let score = props.score

  if(good+bad+neutral === 0) {
    return (
      <div>
        <Display text="statistics" />
        No feedback given
      </div>
    )
    
    
  }
  else {
    return (
      <div>
        <Display text="statistics" />
        <table>
          <tbody>
            <Statistic text="good" val = {good} />
            <Statistic text="neutral" val = {neutral} />
            <Statistic text="bad" val = {bad} />
            <Statistic text="average" val = {score/(good+bad+neutral)} />
            <Percentage text="positive" val={good/(good+bad+neutral) * 100} />
          </tbody>
        </table>
        
      </div>
    )
  }
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [score,setScore] =useState(0)

  const incrementG = (myVal) => {
    setScore(score+1)
    setGood(myVal+1)
  }

  const incrementN = (myVal) => {
    setNeutral(myVal+1)
  }

  const incrementB = (myVal) => {
    setScore(score-1)
    setBad(myVal+1)
  }

  return (
    <div>
      <Display text="give feedback" />
      <Button text="good" handleClick={() => incrementG(good,score)} />
      <Button text="neutral" handleClick={() => incrementN(neutral)} />
      <Button text="bad" handleClick={() => incrementB(bad)} />
      <Statistics good={good} bad={bad} neutral={neutral} score={score}/>
      <br />
      
    </div>
  )

}

export default App;
