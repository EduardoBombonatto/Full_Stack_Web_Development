const Header = (props) => {
  return (
    <div>
      <h1> {props.course} </h1>
    </div>
  );
};

const Content = (props) => {
  console.log(props);
  return (
    <div>
      <Part
        part={props.contents[0].name}
        exercises={props.contents[0].exercises}
      />
      <Part
        part={props.contents[1].name}
        exercises={props.contents[1].exercises}
      />
      <Part
        part={props.contents[2].name}
        exercises={props.contents[2].exercises}
      />
    </div>
  );
};

const Part = (props) => {
  return (
    <div>
      <p>
        {props.part} {props.exercises}
      </p>
    </div>
  );
};

const Total = (props) => {
  return (
    <div>
      <p>Number of exercises {props.total}</p>
    </div>
  );
};

const App = () => {
  const course = "Half Stack application development";
  const parts = [
    {
      name: "Fundamentals of React",
      exercises: 10,
    },
    {
      name: "Using props to pass data",
      exercises: 7,
    },
    {
      name: "State of a component",
      exercises: 14,
    },
  ];

  return (
    <div>
      <Header course={course} />
      <Content contents={parts} />
      <Total
        total={parts[0].exercises + parts[1].exercises + parts[2].exercises}
      />
    </div>
  );
};

export default App;
