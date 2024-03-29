import React from 'react'
import {useState, useEffect} from 'react'
import axios from 'axios'

const Person = ({person}) => {
  return (
    <div>{person.name} : {person.number}</div>
  )
}
const ListOfPersons = ({persons}) => {
  return (
    <div>
      {persons.map(person => 
      <Person key={person.name} person={person} />
      )}
    </div>
  )
}
// Ongelmaksi osoittautui onChange käyttö esim filtterin kohdalla
const Section = ({header, component : Comp}) => {
  return (
    <div>
      <h2>{header}</h2>
      <Comp></Comp>
    </div>
  )
}
const Filter = ({handler}) => {
  return (
    <div>filter shown with <input onChange={handler}></input></div>
  )
  }

const PersonForm = ({addPerson, newName, handlePersonChange, newNumber, handleNumberChange}) => {
  return (
    <form onSubmit={addPerson}>
      <div>name: <input value={newName} onChange={handlePersonChange}/></div>
      <div>number: <input value={newNumber} onChange={handleNumberChange}/></div>
      <div><button type="submit">add</button></div>
    </form>
  )
  }


const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [condition, setCondition] = useState('')

  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  }, [])
  console.log('render', persons.length, 'persons')

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
      <Filter handler={handleSearch}></Filter>
      <h2>add a new</h2>
      <PersonForm addPerson={addPerson} newName={newName} handlePersonChange={handlePersonChange} newNumber={newNumber} handleNumberChange={handleNumberChange}></PersonForm>
      <Section header={"Numbers"} component={() => {return <ListOfPersons persons={personsToShow}></ListOfPersons>}}></Section>
    </div>
  )

}

export default App