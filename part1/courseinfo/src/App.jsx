const Header = (course) => {
  console.log(course)
  return (
    <div>
      <h1> {course.course} </h1>
    </div>
  )
}

const Content = (parts) =>{
  console.log(parts)
  return (
    <div>
      <p>
        {parts.part} {parts.exercises}
      </p>
    </div>
  )
}

const Total = (total) =>{
  console.log(total)
  return (
    <div>
      <p>
      Number of exercises {total.total}
      </p>
    </div>
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
      <Header course={course} />
      <Content part={part1} exercises={exercises1}/>
      <Content part={part2} exercises={exercises2}/>
      <Content part={part3} exercises={exercises3}/>
      <Total total={exercises1+exercises2+exercises3}/>
    </div>
  )
}

export default App
