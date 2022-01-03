import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "reactstrap";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TableList from "./components/TableList";
import TodosContextProvider from "./contexts/TodosContext";

function App() {
  return (
    <div className="App">
      <Container>
        <h1 className="mt-4">Todo List</h1>
        <TodosContextProvider>
          <TodoForm />
          <TableList />
        </TodosContextProvider>
      </Container>
    </div>
  );
}

export default App;
