import React from "react";
import "./App.css";
// import State from "./components/state";
// import Login from "./components/Login";
// import Register from "./components/Register";
// import Cart from "./components/Cart";
// import Color from "./components/Color";
// import Assesment from "./components/Assesment";
// import Textfunction from "./components/Textfunction";
// import Login2 from "./components/Login2";
// import Profile from "./components/Profile";
import { BrowserRouter,Routes,Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Home from "./components/Home";
import Menubar from "./bootstrap/Menubar"
import Login from "./bootstrap/Login";
import Registration from "./bootstrap/Registration";

export default function App () {
  return (
    <>
    <BrowserRouter>
    <Menubar/>
    <Routes>
      <Route path="/login" element={<Login/>}/>
      <Route path="/registration" element={<Registration/>}/>
    </Routes>
    </BrowserRouter>
    </>
 );
}
