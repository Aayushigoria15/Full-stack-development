import React, { useContext, useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Routing-in-react/Home";
import About from "./Routing-in-react/About";
import Contact from "./Routing-in-react/Contact";
import UserTable from "./Json/UserTable";
import UserCrud from "./Json/UserCrud";
import UserTableWithLoader from "./Error-handling/UserTableWithLoader";
import { ThemeProvider } from "./ThemeContext";
import ThemeToggle from "./ThemeToggle";
import Content from "./Content";
import { AuthContext, AuthProvider } from "./Login/AuthContext";
import Login from "./Login/Login";
import Welcome from "./Login/Welcome";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./State-management/store";
import { useRecoilState } from "recoil";
import { todoListState } from "./state";

// function Main() {
//   const { user } = useContext(AuthContext);

//   return (
//     <div style={{ padding: "20px" }}>{user ? <Welcome /> : <Login />}</div>
//   );
// }

// function App() {
//   return (
//     <AuthProvider>
//       <Main />
//     </AuthProvider>

// <BrowserRouter>
//   <div style={{ padding: "20px", backgroundColor: "pink" }}>
//     <nav>
//       <Link
//         to="/"
//         style={{
//           marginRight: "10px",
//           color: "white",
//           textDecoration: "none",
//         }}
//       >
//         {" "}
//         Home
//       </Link>
//       <Link to="/about" style={{ color: "white", textDecoration: "none" }}>
//         {" "}
//         About{" "}
//       </Link>
//       <Link
//         to="/contact"
//         style={{
//           marginLeft: "10px",
//           color: "white",
//           textDecoration: "none",
//         }}
//       >
//         {" "}
//         Contact{" "}
//       </Link>
//     </nav>

//     <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="/about" element={<About />} />
//       <Route path="/contact" element={<Contact />} />
//     </Routes>
//   </div>
//   <UserTable />
//   <UserCrud />
//   <UserTableWithLoader />
//   <ThemeProvider>
//     <ThemeToggle />
//     <Content />
//   </ThemeProvider>

// </BrowserRouter>
//   );
// }

// function App() {
//   const count = useSelector((state) => state.counter.value);
//   const dispatch = useDispatch();

//   return (
//     <div style={{ padding: "20px" }}>
//       <h1>Counter: {count}</h1>
//       <button
//         onClick={() => dispatch(increment())}
//         style={{ marginRight: "10px" }}
//       >
//         Increment
//       </button>
//       <button onClick={() => dispatch(decrement())}>Decrement</button>
//     </div>
//   );
// }

// todolist

function App() {
  const [todoList, setTodoList] = useRecoilState(todoListState);
  const [inputValue, setInputValue] = useState("");

  // Add new task
  const addTask = () => {
    if (!inputValue.trim()) return;
    const newTask = {
      id: Date.now(),
      text: inputValue,
      isComplete: false,
    };
    setTodoList([...todoList, newTask]);
    setInputValue("");
  };

  // Toggle complete status
  const toggleComplete = (id) => {
    const updatedList = todoList.map((task) =>
      task.id === id ? { ...task, isComplete: !task.isComplete } : task
    );
    setTodoList(updatedList);
  };

  // Remove a task
  const removeTask = (id) => {
    const updatedList = todoList.filter((task) => task.id !== id);
    setTodoList(updatedList);
  };

  return (
    <div style={{ padding: "30px", maxWidth: 400, margin: "auto" }}>
      <h2>Todo List with Recoil</h2>
      <input
        type="text"
        placeholder="Enter new task"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        style={{ width: "70%", padding: "8px" }}
      />
      <button onClick={addTask} style={{ padding: "8px 12px", marginLeft: 10 }}>
        Add
      </button>

      <ul style={{ listStyle: "none", padding: 0, marginTop: 20 }}>
        {todoList.map(({ id, text, isComplete }) => (
          <li
            key={id}
            style={{ marginBottom: 10, display: "flex", alignItems: "center" }}
          >
            <input
              type="checkbox"
              checked={isComplete}
              onChange={() => toggleComplete(id)}
            />
            <span
              style={{
                marginLeft: 10,
                textDecoration: isComplete ? "line-through" : "none",
                flexGrow: 1,
              }}
            >
              {text}
            </span>
            <button
              onClick={() => removeTask(id)}
              style={{ marginLeft: 10, padding: "2px 6px" }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default App;
