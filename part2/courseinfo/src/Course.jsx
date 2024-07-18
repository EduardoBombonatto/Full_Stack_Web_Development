import Header from "./Header";
import Content from "./Content";
import Total from "./Total";

const Course = ({ course }) => {
  console.log(course);
  return (
    <div>
      <Header courseName={course.name} />
      <Content parts={course.parts} />
      <Total
        sumOfExercises={course.parts.reduce(
          (sum, part) => sum + part.exercises,
          0
        )}
      />
    </div>
  );
};

export default Course;
