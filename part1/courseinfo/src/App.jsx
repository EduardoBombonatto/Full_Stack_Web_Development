const Header = (props) => {
  console.log(props);
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
  console.log(props);
  return (
    <div>
      <p>
        {props.part} {props.exercises}
      </p>
    </div>
  );
};

const Total = (props) => {
  console.log(props);
  return (
    <div>
      <p>
        Number of exercises{" "}
        {props.total[0].exercises +
          props.total[1].exercises +
          props.total[2].exercises}
      </p>
    </div>
  );
};

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
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
    ],
  };

  return (
    <div>
      <Header course={course.name} />
      <Content contents={course.parts} />
      <Total total={course.parts} />
    </div>
  );
};

export default App;
