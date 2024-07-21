import PersonShow from "./components/PersonShow";
const Person = ({ personsToShow, deletePerson }) => {
  return (
    <div>
      <ul>
        {personsToShow.map((person) => (
          <PersonShow
            key={person.name}
            person={person}
            deletePerson={deletePerson}
          />
        ))}
      </ul>
    </div>
  );
};
export default Person;
