import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import ProductList from '../pages/ProductList';
import StoreList from '../pages/StoreList';


const routes = () => {
  <Switch>
    <Route exact path='/' component= { Home } />
    <Route path='/products' component= { ProductList } />
    <Route path='/stores' component= { StoreList } />
  </Switch>
};

export default routes;