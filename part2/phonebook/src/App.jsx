import { useState } from "react";
import Note from "./components/Note";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", phone: 45998329495 },
  ]);
  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");

  const handlePersonChange = (event) => setNewName(event.target.value);

  const handlePhoneChange = (event) => setNewPhone(event.target.value);

  const addPerson = (event) => {
    event.preventDefault();
    const nameExists = persons.some((person) => person.name === newName);

    if (nameExists) {
      alert(`${newName} is already added to phonebook`);
    } else {
      const newPerson = { name: newName, phone: newPhone };
      setPersons(persons.concat(newPerson));
      setNewName("");
      setNewPhone("");
    }
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handlePersonChange} />
        </div>
        <div>
          phone: <input value={newPhone} onChange={handlePhoneChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>

      <h2>Numbers</h2>
      <ul>
        {persons.map((person) => (
          <Note key={person.name} person={person} />
        ))}
      </ul>
    </div>
  );
};

export default App;
