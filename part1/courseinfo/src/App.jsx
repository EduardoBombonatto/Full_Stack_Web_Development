const Header = (course) => {
  return (
    <div>
      <h1> {course.course} </h1>
    </div>
  );
};

const Content = (contents) => {
  return (
    <div>
      <Part
        part={contents.contents[0].part}
        exercises={contents.contents[0].exercises}
      />
      <Part
        part={contents.contents[1].part}
        exercises={contents.contents[1].exercises}
      />
      <Part
        part={contents.contents[2].part}
        exercises={contents.contents[2].exercises}
      />
    </div>
  );
};

const Part = (parts) => {
  return (
    <div>
      <p>
        {parts.part} {parts.exercises}
      </p>
    </div>
  );
};

const Total = (total) => {
  return (
    <div>
      <p>Number of exercises {total.total}</p>
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
      <Content
        contents={[
          { part: parts[0].name, exercises: parts[0].exercises },
          { part: parts[1].name, exercises: parts[1].exercises },
          { part: parts[2].name, exercises: parts[2].exercises },
        ]}
      />
      <Total
        total={parts[0].exercises + parts[1].exercises + parts[2].exercises}
      />
    </div>
  );
};

export default App;
