const Note = ({ person }) => {
  console.log(person);
  return (
    <li>
      {person.name} {person.phone}
    </li>
  );
};
export default Note;
