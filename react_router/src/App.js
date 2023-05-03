import "./App.css";

import { Routes, Route, Router } from "react-router-dom";
import Home from "./compo/Home";
import ToDoList from "./compo/ToDoList";
import Login from "./compo/Login";
import Join from "./compo/Join";

function App() {
  return (
    <>
      <h1>절거운 React 수업</h1>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/join" element={<Join></Join>}></Route>
        <Route path="/todoList" element={<ToDoList></ToDoList>}></Route>
      </Routes>
    </>
  );
}

export default App;
