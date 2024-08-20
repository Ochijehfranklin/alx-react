import React from 'react';
import holbertonLogo from './holberton_logo.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={holbertonLogo} className="App-logo" alt="logo" />
        <h1>School dashboard</h1>
      </header>
      <div>
        <body className="App-body">
          <p>Login to access the full dashboard</p>
        </body>
      </div>
      <div>
        <footer className="App-footer">
          <p>Copyright 2020 - holberton School</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
