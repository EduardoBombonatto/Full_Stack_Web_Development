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
        part={contents.contents[0].part1}
        exercises={contents.contents[0].exercises1}
      />
      <Part
        part={contents.contents[1].part2}
        exercises={contents.contents[1].exercises2}
      />
      <Part
        part={contents.contents[2].part3}
        exercises={contents.contents[2].exercises3}
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
          { part1: part1.name, exercises1: part1.exercises },
          { part2: part2.name, exercises2: part2.exercises },
          { part3: part3.name, exercises3: part3.exercises },
        ]}
      />
      <Total total={part1.exercises + part2.exercises + part3.exercises} />
    </div>
  );
};

export default App;
