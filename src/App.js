import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";

import NavBar from "./components/navBar";
import Movies from "./components/movies/movies";
import Customers from "./components/fake/customers";
import Rentals from "./components/fake/rentals";
import NotFound from "./components/fake/notFound";

import LoginForm from "./components/login/loginForm";
import ParentForm from "./components/test/forms/parentForm";

import "./App.css";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <main className="container">
        <Switch>
          <Route path="/login" component={LoginForm} />

          <Route path="/movies" component={Movies} />
          <Route path="/customers" component={Customers} />
          <Route path="/rentals" component={Rentals} />
          <Route path="/not-found" component={NotFound} />

          <Route path="/parent" component={ParentForm} />
          <Redirect from="/" exact to="/movies" component />
          <Redirect to="not-found" />
        </Switch>
      </main>
    </React.Fragment>
  );
}

export default App;
