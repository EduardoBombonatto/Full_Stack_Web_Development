import { useState } from "react";
import Note from "./components/Note";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", phone: 11940028922 },
    { name: "Eduardo", phone: 45998329495 },
    { name: "Gabrielle", phone: 45999553926 },
    { name: "Maria", phone: 45999695678 },
  ]);
  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [searchTerm, setNewSearchTerm] = useState("");

  const handlePersonChange = (event) => setNewName(event.target.value);

  const handlePhoneChange = (event) => setNewPhone(event.target.value);

  const handleSearchChange = (event) => setNewSearchTerm(event.target.value);

  const addPerson = (event) => {
    event.preventDefault();
    const nameExists = persons.some((person) => person.name === newName);

    if (nameExists) {
      alert(`${newName} is already added to phonebook`);
    } else {
      const newPerson = { name: newName, phone: newPhone };
      setPersons(persons.concat(newPerson));
    }
    setNewName("");
    setNewPhone("");
  };

  const personsToShow = persons.filter((person) =>
    person.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>Phonebook</h1>
      <div>
        filter shown with:
        <input value={searchTerm} onChange={handleSearchChange} />
      </div>
      <h2>Add new Numbers</h2>
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
        {personsToShow.map((person) => (
          <Note key={person.name} person={person} />
        ))}
      </ul>
    </div>
  );
};

export default App;
