import React from 'react'
import ReactDOM from 'react-dom'

const Header = ({course}) => {
    return (
        <div>{course}</div>
    )
}
const Part = ({part, exersises}) => {
    return (
        <div>
            <div>{part}</div>
            <div>{exersises}</div>
        </div>
    )
}
const Content = ({ parts }) => {
    return (
        <div>
            {parts.map((part, index) => (
                <Part
                    key={index + part.name}
                    part={part.name}
                    exersises={part.exersises}
                />
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
    const course = {
        course: 'Half Stack application development',
        partes: [
            {
                name: 'Fundamentals of React',
                exersises: 10
            },
            {
                name: 'Using props to pass data',
                exersises: 7
            },
            {
                name: 'State of a component',
                exersises: 14
            }
        ],
        allExercises() {
            return this.partes.reduce((acc, element) => {
                return acc += element.exersises;
            }, 0);
        }
    };


    return (
        <div>
            <Header
                course={course.course}
            />
            <Content
                parts={course.partes}
            />
            <Total
                allExercises={ course.allExercises() }
            />
        </div>

    )
}

ReactDOM.render(<App />, document.getElementById('root'))