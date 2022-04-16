import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Main from "./pages/main/Main";
import About from "./pages/about/About";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import { useEffect } from "react";
import Admin from "./pages/admin/Admin";
import Dashboard from "./pages/dashboard/Dashboard";
import CreatePizza from "./pages/create-pizza/CreatePizza";
import { Api } from "./api/Api";
import { pizzaApi } from "./constants";
import { useDispatch } from "react-redux";
import { SET_PIZZAS } from "./redux/actionType";

export default function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    
    Api.get(pizzaApi).then((response) => {
      dispatch({ 
        type: SET_PIZZAS, 
        data: response.data 
      })
    });
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Navbar/>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/aboute-us" element={<About />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/create-pizza" element={<CreatePizza />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
