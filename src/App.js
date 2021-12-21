import React, { useState, useEffect } from 'react'
import logo from './logo.svg';
import './App.css';


const testData = [
  {Username: 'KennyJ'},
  {Username: 'KennyJTest'},
  {Username: 'MelanieJ'},
]


function App() {
  const [data, setData] = useState([])

  useEffect(() => {
    fetchProfilesPartialMatch()
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  const fetchProfilesPartialMatch = async () => {
    setData(testData)
  }

  return (
    <div className="App">
      
      

      <header className="App-header">
        {
          data.map((item) => (
            <div>{item.Username}</div>
          ))
        }


        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>


    </div>
  );
}

export default App;
