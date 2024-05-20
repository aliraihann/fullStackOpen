import { useEffect, useState } from 'react'

const Anecdotes = (props) => <p>{props.selected}</p>
const Votes = (props) => <p>has {props.vote} votes</p>
const Button = (props) => <button onClick={props.onClick}>{props.text}</button>
const Heading = (props) => <h1>{props.text}</h1>

function App() {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)
  const [votes, setVote] = useState([0,0,0,0,0,0,0,0])
  const [highest, setHighest] = useState(0)

  const randomNumber = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length))
  }
  const addVote = () => {
    const newVotes = [...votes]
    newVotes[selected] = votes[selected] + 1
    setVote(newVotes)
  }

  useEffect(() => {
    const maxValue = Math.max(...votes);
    const index = votes.indexOf(maxValue);
    setHighest(index);
  }, [votes]);

  return (
    <div>
      <Heading text='Anecdote of the day' />
      <Anecdotes selected={anecdotes[selected]} />
      <Votes vote={votes[selected]} />
      <Button onClick={addVote} text={"vote"} />
      <Button onClick={randomNumber} text={"next anecdote"} />
      <Heading text='Anecdote with most votes' />
      <Anecdotes selected={anecdotes[highest]} />
      <Votes vote={votes[highest]} />
    </div>
  )
}

export default App
