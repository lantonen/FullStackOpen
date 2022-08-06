import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

const View = ({ listOfCountries }) => {
  console.log(listOfCountries.length)
  if (listOfCountries.length === 1) {
    return (
      <div>
        <Country key={listOfCountries.at(0).name.official} object={listOfCountries.at(0)} />
      </div>
    )
  }
  else if (2 <= listOfCountries.length && listOfCountries.length <= 10){
    return (
      <div>
        {listOfCountries.map(country =>
          <div key={country.name.official}>{country.name.common}</div>
        )}
      </div>
    )
  }
  else if(listOfCountries.length > 10){
    return(
      <div>Too many matches, specify another filter</div>
    )
  }
}

const Country = ({ object }) => {
  console.log(object)
  return (
    <div>
      <h1>{object.name.common}</h1>
      <div>capital: {object.capital}</div>
      <div>area: {object.area}</div>
      <h2>languages:</h2>
      {Object.values(object.languages).map(language =>
        <div key={language} >&bull; {language}</div>
      )}
      <img src={object.flags.png} alt={"flag"}></img>
    </div>
    
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
    : countries.filter(country => country.name.common.toLowerCase().includes(condition.toLowerCase()) === true)

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