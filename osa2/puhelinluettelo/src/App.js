import { useState } from 'react'
import React from 'react'

const Person = ({person}) => {
  return (
    <div>{person.name}</div>
  )
}



const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
    //if person name found from phonebook alert and DONT add it
    if (persons.find(person=> person.name === newName)) {
      window.alert(`${newName} is already added to phonebook`);
    }
    else{
      const personObject = {
      name: newName
      }
      setPersons(persons.concat(personObject))
      setNewName('')
    } 
  }

  const handlePersonChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handlePersonChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map(person => 
          <Person key={person.name} person={person} />
        )}
      </ul>

    </div>
  )

}

export default App