import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import NavBar from "./components/Navbar";
import ProductList from "./pages/ProductList";
import StoreList from "./pages/StoreList";
import Home from "./pages/Home";
import StoreShow from "./pages/StoreShow";
import Cart from "./pages/Cart";
import routes from "./config/routes";

function App() {
  return (
    <div className="App">
      <NavBar />

      {routes}
    </div>
  );
}

export default App;
