import React from 'react'
import Header from './Header'
import Content from './Content'
import Total from './Total'

const Part = ({part}) => {
    return(
        <p>
            {part.name} {part.exercises}
        </p>
    )
    
}

const Course = (course) => {
    return (
            <div>
                <Header name={course.name} />
                <Content parts={course.parts}/>
                <Total parts={course.parts}/>
            </div>
    )
}

export default Course