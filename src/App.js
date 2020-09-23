import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
//import './App.css';
import Table from "./components/Table"
import Search from "./components/Search"
import api from "./utils/api"
function App() {

  const [employee, setEmployee] = useState({
    results: [],
    search: ""
  })
  // every time we want to update a variable, useEffect will run
  useEffect(() => {
    api.randomPeople()
    .then(employees=> {
       setEmployee({
        // spread operator: includes results and search - before every update, we need to preserve the properties
         ...employee,
         // results from the API
         results: employees.data.results
       })
    })
  }, [])


  return (
    <div className="App">
      {console.log(employee.results)}
      <Search/>
      <Table employees={employee.results} />
    </div>
  );
}

export default App;
