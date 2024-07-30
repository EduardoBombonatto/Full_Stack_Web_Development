import { useEffect, useState } from "react";
import axios from "axios";
import Filter from "./Filter";
import Person from "./Person";
import PersonForm from "./PersonForm";
import personService from "./services/persons";
import Notification from "./Notification";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [searchTerm, setNewSearchTerm] = useState("");
  const [notification, setNotification] = useState({ message: null });

  const handlePersonChange = (event) => setNewName(event.target.value);

  const handlePhoneChange = (event) => setNewPhone(event.target.value);

  const handleSearchChange = (event) => setNewSearchTerm(event.target.value);

  const showNotification = (message, type = "info") => {
    setNotification({ message, type });
    setTimeout(() => {
      setNotification({ message: null });
    }, 5000);
  };

  useEffect(() => {
    axios.get("http://localhost:3001/persons").then((response) => {
      setPersons(response.data);
    });
  }, []);

  const addPerson = (event) => {
    event.preventDefault();
    const nameExists = persons.find((person) => person.name === newName);

    if (nameExists) {
      if (
        window.confirm(
          `${newName} is already in the phonebook. Replace the old number with a new one?`
        )
      ) {
        const updatePerson = { ...nameExists, phone: newPhone };
        personService
          .update(nameExists.id, updatePerson)
          .then((returnedPerson) => {
            setPersons(
              persons.map((person) =>
                person.id !== nameExists.id ? person : returnedPerson
              )
            );
            showNotification(`Updated ${returnedPerson.name}'s number`);
          })
          .catch((error) => {
            showNotification(
              `The person '${nameExists.name}' was already deleted from server`,
              "error"
            );
            setPersons(persons.filter((person) => person.id !== nameExists.id));
          });
      }
    } else {
      const newPerson = { name: newName, phone: newPhone };
      personService.create(newPerson).then((returnedPerson) => {
        setPersons(persons.concat(returnedPerson));
        setNewName("");
        setNewPhone("");
        showNotification(`${returnedPerson.name} foi adicionado a sua lista`);
      });
    }
  };

  const deletePerson = (id) => {
    const person = persons.find((p) => p.id === id);
    if (window.confirm(`Deseja excluir ${person.name} da sua lista?`)) {
      personService.destroy(id).then(() => {
        setPersons(persons.filter((p) => p.id !== id));
        showNotification(`${person.name} foi excluido da sua lista`);
      });
    }
  };

  const personsToShow = persons.filter((person) =>
    person.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>Phonebook</h1>
      <Notification info={notification} />
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
      <Person personsToShow={personsToShow} deletePerson={deletePerson} />
    </div>
  );
};

export default App;
