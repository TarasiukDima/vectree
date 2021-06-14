import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({ clickFunction, text }) => {
    return (
        <button
            onClick={clickFunction}
        >{text}</button>
    )
}

const AnecdoteVotes = ({ anecdote, vote }) => {
    return (
        <div>
            <h2>Anecdote with most votes</h2>
            <p>{anecdote}</p>
            <p>Has {vote} votes</p>
        </div>
    )
}

const App = ({ anecdotes }) => {
    const lengthAnecdotes = anecdotes.length;

    const [selected, setSelected] = useState(0);
    const [points, setPoints] = useState(new Array(lengthAnecdotes).fill(0));
    const [mostAnecdote, setMostAnecdote] = useState(false);

    const changeAnegdote = () => {
        const randomIndex = Math.floor(Math.random() * (lengthAnecdotes));

        setSelected(randomIndex);
    }

    const changeVoite = () => {
        setPoints(prev => {
            let newArray = [...prev];
            newArray[selected]++;
            getNewIndexMostAnecdote(newArray);
            return newArray;
        });
    }

    const getNewIndexMostAnecdote = (arr) => {
        let maxIndex = 0;
        let maxEl = 0;

        arr.forEach((el, ind) => {
            if (el > maxEl) {
                maxEl = el;
                maxIndex = ind;
            }
        });
        if (maxIndex >= 0) {
            setMostAnecdote(maxIndex);
        }
    };

    return (
        <div>
            <h1>Anecdote of Day</h1>
            <p>{anecdotes[selected]}</p>
            <p>Has {points[selected]} votes</p>


            <Button
                clickFunction={changeVoite}
                text='vote'
            />

            <Button
                clickFunction={changeAnegdote}
                text='next anecdot'
            />

            {
                (mostAnecdote !== false) && <AnecdoteVotes anecdote={anecdotes[mostAnecdote]} vote={points[mostAnecdote]} />
            }
        </div>
    )
}

const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
    <App anecdotes={anecdotes} />,
    document.getElementById('root')
)