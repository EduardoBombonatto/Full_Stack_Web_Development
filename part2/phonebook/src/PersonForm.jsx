const PersonForm = ({
  addPerson,
  newName,
  handlePersonChange,
  newPhone,
  handlePhoneChange,
}) => {
  return (
    <div>
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
    </div>
  );
};
export default PersonForm;
