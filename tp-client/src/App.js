import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import routes from "./config/routes";
import NavBar from "./components/Navbar";
import ProductList from "./pages/ProductList";
import Home from "./pages/Home";
import StoreShow from "./pages/StoreShow";
import Cart from "./pages/Cart";

function App() {
  return (
    <div className="App">
      <NavBar />
      {/* {routes} */}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/products" component={ProductList} />
        <Route exact path="/store" component={StoreShow} />
        <Route exact path="/cart" component={Cart} />
      </Switch>
    </div>
  );
}

export default App;
