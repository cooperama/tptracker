import React from 'react';
import "./App.css";
import NavBar from './components/Navbar';
import routes from './config/routes';

function App() {
  return (
    <div className="App">
      <NavBar />
      { routes }
    </div>
  )
}

export default App;
