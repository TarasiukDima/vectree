import React from 'react'
import ReactDOM from 'react-dom'

const Header = ({course}) => {
    return (
        <div>{course}</div>
    )
}
const Part = ({part, exercis}) => {
    return (
        <div>
            <div>{part}</div>
            <div>{exercis}</div>
        </div>
    )
}
const Content = ({ parts }) => {
    console.log(parts)
    return (
        <div>
            {parts.map((part, index) => (
                <Part
                    key={index + part.name}
                    part={part.name}
                    exercis={part.count} />
            ))}

        </div>
    )
}
const Total = ({allExercises}) => {
    return (
        <div>{allExercises}</div>
    )
}
const App = () => {
    const course = 'Half Stack application development'
    const part1 = 'Fundamentals of React'
    const exercises1 = 10
    const part2 = 'Using props to pass data'
    const exercises2 = 7
    const part3 = 'State of a component'
    const exercises3 = 14

    return (
        <div>
            <Header
                course={course}
            />
            <Content
                parts={[
                    { name: part1, count: exercises1 },
                    { name: part2, count: exercises2 },
                    { name: part3, count: exercises3 }
                ]}
            />
            <Total
                allExercises={ exercises1 + exercises2 + exercises3 }
            />
        </div>

    )
}

ReactDOM.render(<App />, document.getElementById('root'))