const App = () => {
  const course = 'Half Stack application development'

  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  const Header = ({course}) => {
    return(
      <h1>{course}</h1>
    )
    
  }
  const Part = ({part}) => {
    return(
      <p>
        {part.name} {part.exercises}
      </p>
    )
    
  }

  const Content = ({parts}) => {
    return(
      <div>
        {
          parts.map((part) => {
            return <Part part={part}></Part>
          })
        }
        
      </div>
    )
  }

  const Total = ({parts}) => {
    let total = 0;
    parts.map((part) => {
      total += part.exercises
    })
    return(
        <p>Number of exercises {total}</p>
      )
    
  }
  return (
    <div>
      <Header course={course} />
      <Content parts={parts}/>
      <Total parts={parts}/>
    </div>
  )
}

export default App