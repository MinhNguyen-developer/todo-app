/** @format */

import React from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./screen/Login";
import Register from "./screen/Register";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/">
          <div className="todo-app">
            <TodoList />
          </div>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
