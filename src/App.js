import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
//import './App.css';
import Table from "./components/Table";
import Search from "./components/Search";
import api from "./utils/api";
import axios from 'axios';
function App() {

  const [employee, setEmployee] = useState({
    results: [],
    search: ""
  })
  // search button 
  const [search, setSearch] = useState("")
  const [searchResults, setSearchResults] = useState([])


  // every time we want to update a variable, useEffect will run
  useEffect(() => {
    api.randomPeople()
      .then(employees => {
        setEmployee({
          // spread operator: includes results and search - before every update, we need to preserve the properties
          ...employee,
          // results from the API
          results: employees.data.results
        })
      })
  }, [])


  const handleInputChange = e => {
    const { value } = e.target
    setSearch(value)
  }

  const handleSubmit = e => {
    e.preventDefault()
  
  const filteredResults =  employee.results.filter((employee) => {
    const firstName = employee.name.first.toLowerCase()
    const lastName = employee.name.last.toLowerCase()
      return (firstName.includes(search) || lastName.includes(search))
    })
    console.log(filteredResults)
  }
  

  return (
    <div className="App">
      {console.log(employee.results)}
      <Search
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit} />
      <Table employees={employee.results} />
    </div>
  );
}

export default App;
