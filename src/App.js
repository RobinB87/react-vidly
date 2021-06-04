import React, { Component } from "react";
import { Route } from "react-router-dom";

import Movies from "./components/movies/movies";
import Customers from "./components/fake/customers";
import Rentals from "./components/fake/rentals";
import NotFound from "./components/fake/notFound";

import LoginForm from "./components/login/loginForm";
import ParentForm from "./components/test/forms/parentForm";

import "./App.css";

function App() {
  return (
    <main className="container">
      <Route path="/login" component={LoginForm}></Route>

      <Route path="/movies" component={Movies}></Route>
      <Route path="/customers" component={Customers}></Route>
      <Route path="/rentals" component={Rentals}></Route>
      <Route path="/not-found" component={NotFound}></Route>

      <Route path="/parent" component={ParentForm}></Route>
    </main>
  );
}

export default App;
