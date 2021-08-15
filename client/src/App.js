import axios from 'axios';
import React from 'react';
import './App.css';

function App() {

  const setCookieRequest = async (event) => {
    console.log(`[Front-end request] (create-cookie)`);
    try {
      let result = await axios.post(`http://localhost:${5201}/create-cookie`, {}, {
        withCredentials: "true"
      });
      console.log(`Result from http request: ${JSON.stringify(result)}`);
    } catch (err) {
      console.log(`An error occurred when making an HTTP request from the front-end: ${err}`);
    }
  }

  const checkCookieRequest = async (event) => {
    console.log(`[Front-end request] (check-cookie)`);
    try {
      let result = await axios.get(`http://localhost:${5201}/check-cookie`, {
        withCredentials: "true"
      });
      console.log(`Result from http request: ${JSON.stringify(result)}`);
    } catch (err) {
      console.log(`An error occurred when making an HTTP request from the front-end: ${err}`);
    }
  }
  
  return (
    <div className="App">
      <header className="App-header">

        <button onClick={setCookieRequest}>Set Cookie</button>
        <button onClick={checkCookieRequest}>Check cookie</button>
      </header>
    </div>
  );
}

export default App;
