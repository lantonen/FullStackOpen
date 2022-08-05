import React from 'react'
import {useState, useEffect} from 'react'
import axios from 'axios'

const View = ({listOfCountries}) => {
  console.log(listOfCountries)
  return (
    <div>
      {listOfCountries.map(country => 
      <Country key={country.name.official} object={country} />
      )}
    </div>
  )
}

const Country = ({object}) => {
  return (
    <div>{object.name.official}</div>
  )
}

const App = () => {
  
  const [condition, setCondition] = useState('') 
  const [countries, setCountries] = useState([]) 

  const handleInputChange = (event) => {
    console.log(event.target.value)
    setCondition(event.target.value)
  }

  useEffect(() => {
    console.log('effect')
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        console.log(response.data)
        setCountries(response.data)
      })
  }, [])
  console.log('render', countries.length, 'countries')

  const countriesToShow = (condition === '')
    ? countries
    : countries.filter(country => country.name.official.toLowerCase().includes(condition.toLowerCase()) === true)

  return (
    <div>
      <form>
        <div>find countries <input onChange={handleInputChange} value={condition} ></input></div>
      </form>
      <View listOfCountries={countriesToShow} ></View>
    </div>
  )
  }
export default App;