import { useEffect, useState } from "react";
import Filter from "./Filter";
import PersonForm from "./PersonForm";
import Person from "./Person";
import axios from "axios";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [searchTerm, setNewSearchTerm] = useState("");

  const handlePersonChange = (event) => setNewName(event.target.value);

  const handlePhoneChange = (event) => setNewPhone(event.target.value);

  const handleSearchChange = (event) => setNewSearchTerm(event.target.value);

  useEffect(() => {
    axios.get("http://localhost:3001/persons").then((response) => {
      setPersons(response.data);
    });
  }, []);

  const addPerson = (event) => {
    event.preventDefault();
    const nameExists = persons.some((person) => person.name === newName);

    if (nameExists) {
      alert(`${newName} is already added to phonebook`);
    } else {
      const newPerson = { name: newName, phone: newPhone };
      axios
        .post("http://localhost:3001/persons", newPerson)
        .then((response) => {
          setPersons(persons.concat(newPerson));
        });
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
      <Filter searchTerm={searchTerm} handleSearchChange={handleSearchChange} />
      <h2>Add new Numbers</h2>
      <PersonForm
        addPerson={addPerson}
        newName={newName}
        handlePersonChange={handlePersonChange}
        newPhone={newPhone}
        handlePhoneChange={handlePhoneChange}
      />
      <h2>Numbers</h2>
      <Person personsToShow={personsToShow} />
    </div>
  );
};

export default App;
