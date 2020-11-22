import React from "react";
import { Route, Switch } from "react-router-dom";

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";

import "./App.css";

const HatsPage = (props) => {
  return (
    <div>
      <h1>TOPIC PAGE</h1>
      <button onClick={() => props.history.push("/shop/hat/2")}>Detail</button>
    </div>
  );
};

const HatDetailPage = (props) => {
  return (
    <div>
      <h1>TOPIC {props.match.params.hatId}</h1>
      <button onClick={() => props.history.push("/shop/hats")}>Back</button>
    </div>
  );
};

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/shop' component={ShopPage} />
          <Route exact path='/shop/hats' component={HatsPage} />
          <Route path='/shop/hat/:hatId' component={HatDetailPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
