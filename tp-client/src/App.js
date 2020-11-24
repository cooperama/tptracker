import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import NavBar from "./components/Navbar";
import ProductList from "./pages/ProductList";
import StoreList from "./pages/StoreList";
import Home from "./pages/Home";
import routes from "./config/routes";

function App() {
  return (
    <div className="App">
      <NavBar />
      {/* <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/products" component={ProductList} />
        <Route exact path="/stores" component={StoreList} />
      </Switch> */}
      {routes}
    </div>
  );
}

export default App;
