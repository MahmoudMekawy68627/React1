import Counter from "./components/counter";
import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from "bootstrap";
import Navbar from './components/navbar/Navbar';
import About from './Pagess/about';
import Home from './Pagess/home';
import Shop from './Pagess/shop';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Product from "./Pagess/shop/Product";
import Todo from './Pagess/todo/Todo'

function App() {


  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="counter" element={<Counter />} />
        <Route path="about" element={<About />} />
        <Route path="about" element={<About />} />
        <Route path="shop" element={<Shop />} />
        <Route path="product/:id" element={<Product />} />
        <Route path="/todo" element={<Todo />} />

      </Routes>


    </BrowserRouter>
  );
}

export default App;
