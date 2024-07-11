const Header = (course) => {
  return (
    <div>
      <h1> {course.course} </h1>
    </div>
  );
};

const Content = (contents) => {
  console.log(contents);
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
  console.log(total);
  return (
    <div>
      <p>Number of exercises {total.total}</p>
    </div>
  );
};

const App = () => {
  const course = "Half Stack application development";
  const part1 = {
    name: "Fundamentals of React",
    exercises: 10,
  };
  const part2 = {
    name: "Using props to pass data",
    exercises: 7,
  };
  const part3 = {
    name: "State of a component",
    exercises: 14,
  };

  return (
    <div>
      <Header course={course} />
      <Content
        contents={[
          { part: part1.name, exercises: part1.exercises },
          { part: part2.name, exercises: part2.exercises },
          { part: part3.name, exercises: part3.exercises },
        ]}
      />
      <Total total={part1.exercises + part2.exercises + part3.exercises} />
    </div>
  );
};

export default App;
