import { useState } from 'react'
import React from 'react'

const Person = ({person}) => {
  return (
    <div>{person.name} : {person.number}</div>
  )
}


const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [condition, setCondition] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
    //if person name found from phonebook alert and DONT add it
    if (persons.find(person=> person.name === newName)) {
      window.alert(`${newName} is already added to phonebook`);
    }
    else{
      const personObject = {
      name: newName,
      number: newNumber
      }
      setPersons(persons.concat(personObject))
      setNewName('')
      setNewNumber('')
    } 
  }

  const personsToShow = (condition === '')
    ? persons
    : persons.filter(person => person.name.toLowerCase().includes(condition.toLowerCase()) === true)

  const handleSearch = (event) => {
    console.log(event.target.value)
    setCondition(event.target.value)
  }

  const handlePersonChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <div>filter shown with <input onChange={handleSearch}></input></div>
      <h2>add a new</h2>
      <form onSubmit={addPerson}>
        <div>name: <input value={newName} onChange={handlePersonChange}/></div>
        <div>number: <input value={newNumber} onChange={handleNumberChange}/></div>
        <div><button type="submit">add</button></div>
      </form>
      <h2>Numbers</h2>
      <div>
        {personsToShow.map(person => 
          <Person key={person.name} person={person} />
        )}
      </div>
      

    </div>
  )

}

export default App