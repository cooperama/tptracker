import React from "react";
import "./App.css";
import routes from "./config/routes";
import NavBar from "./components/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <NavBar />
      {routes}
      <Home />
    </div>
  );
}

export default App;
