const Note = ({ person }) => {
  return (
    <li>
      {person.name} {person.phone}
    </li>
  );
};
export default Note;
