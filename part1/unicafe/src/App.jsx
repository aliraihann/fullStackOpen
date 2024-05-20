import { useState } from 'react'

const Heading = ({text}) => <h1>{text}</h1>
const Button = (props) => <button onClick={props.onClick}>{props.text}</button>
const StatisticsLine = (props) => <p>{props.text} {props.value}</p>
const Statistics = (props) => {
  if (props.total > 0) {
    return (
      <table border={1} cellPadding={0}>
        <tr>
          <td><StatisticsLine text='good' /></td>
          <td><StatisticsLine value={props.good} /></td>
        </tr>
        <tr>
          <td><StatisticsLine text='neutral' /></td>
          <td><StatisticsLine value={props.neutral} /></td>
        </tr>
        <tr>
            <td><StatisticsLine text='bad' /></td>
            <td><StatisticsLine value={props.bad} /></td>
        </tr>
        <tr>
            <td><StatisticsLine text='all' /></td>
            <td><StatisticsLine value={props.all} /></td>
        </tr>
        <tr>
            <td><StatisticsLine text='average' /></td>
            <td><StatisticsLine value={props.average} /></td>
        </tr>
        <tr>
            <td><StatisticsLine text='positive' /></td>
            <td><StatisticsLine value={props.positive} /></td>
        </tr>
      </table>
    )
  } else {
    return(
      <p>No feedback given</p>
    )
  }
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)
  const [score, setScore] = useState(0)
  const [positive, setPositive] = useState(0)


  const handleClickGood = () => {
    setGood(good +1)
    setTotal(total + 1)
    setScore(score + 1)
    setPositive(positive + 1)

  }
  const handleClickNeutral = () => {
    setNeutral(neutral +1)
    setTotal(total + 1)
    setScore(score + 0)

  }
  const handleClickBad = () => {
    setBad(bad +1)
    setTotal(total + 1)
    setScore(score - 1)
  }

  return (
    <div>
      <Heading text='give feedback' />
      <Button onClick={handleClickGood} text='good' />
      <Button onClick={handleClickNeutral} text='neutral' />
      <Button onClick={handleClickBad} text='bad' />
      <Heading text='statistics' />
      <Statistics 
      total={total}
      good={good} 
      neutral={neutral} 
      bad={bad} 
      all={total} 
      average={score/total} 
      positive={(positive/total) * 100 + '%'} 
      />      
    </div>
  )
}
export default App
