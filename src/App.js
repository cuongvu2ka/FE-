import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/contact";
import Account from "./pages/account";
import Layout from "./pages/layout/layout";
import Product from "./pages/Product";
import Bank from "./pages/Bank";
import Todos from "./todo/Todos";
import AddTodo from "./todo/AddTodo";
import EditTodo from "./todo/EditTodo";
function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/account" element={<Account />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/bank" element={<Bank />} />
          <Route path="/todo" element={<Todos />} />
          <Route path="/addtodo" element={<AddTodo />} />
          <Route path="/edittodo/:id" element={<EditTodo />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
