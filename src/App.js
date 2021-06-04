import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";

import NavBar from "./components/navBar";
import Movies from "./components/movies/movies";
import MovieForm from "./components/movies/movieForm";
import Customers from "./components/fake/customers";
import Rentals from "./components/fake/rentals";
import NotFound from "./components/fake/notFound";

import LoginForm from "./components/login/loginForm";
import RegisterForm from "./components/login/registerForm";

import ParentForm from "./components/test/forms/parentForm"; // just some test form

import "./App.css";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <main className="container">
        <Switch>
          <Route path="/login" component={LoginForm} />
          <Route path="/register" component={RegisterForm} />

          <Route path="/movies/:id" component={MovieForm} />
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
