const PersonShow = ({ person, deletePerson }) => {
  return (
    <li>
      {person.name} {person.phone}
      <button onClick={() => deletePerson(person.id)}>delete</button>
    </li>
  );
};
export default PersonShow;
