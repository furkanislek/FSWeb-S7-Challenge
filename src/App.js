import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import Home from "./components/Home";
import Form from "./components/Form";
import "./App.css";

const App = () => {
  return (
    <>
      <div className="slogan">
        <h2>777 777 777</h2>
        <div>Pizza Aldım Kabul Ettim</div>
      </div>
      <header className="header">
      <img src="https://i.ibb.co/PgVkY8P/pizza.png" alt="pizza" className="pizzaImg" />
      <img src="https://i.ibb.co/PgVkY8P/pizza.png" alt="pizza" className="pizzaImg2" />
    
        <Link to="/">
          <h1>Teknolojik Yemekler</h1>
        </Link>
        <div className="links">
          <Link className="link" to="/" >
            Ana Sayfa
          </Link>
          <Link className="link" to="/pizza" id="order-pizza">
            Sipariş Formu
          </Link>
        </div>
      </header>
      <Switch>
        <Route exact path="/" component={Home}></Route>

        <Route path="/pizza" component={Form}></Route>
      </Switch>
    </>
  );
};
export default App;
