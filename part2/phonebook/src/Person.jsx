import Note from "./components/Note";
const Person = ({ personsToShow }) => {
  return (
    <div>
      <ul>
        {personsToShow.map((person) => (
          <Note key={person.name} person={person} />
        ))}
      </ul>
    </div>
  );
};
export default Person;
