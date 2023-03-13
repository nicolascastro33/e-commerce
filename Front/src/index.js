import React from "react"
import ReactDOM from "react-dom/client"
import Home from "./pages/Home"
import Error from "./pages/Error"
import Drink from "./pages/Drinks"
import Header from "./Components/Header"
import Footer from "./Components/Footer"
import About from "./pages/About"
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <Router>
      <Header/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="*" element={<Error/>}/>
        <Route exact path="/about" element={<About/>}/>
        <Route path="/drinks/:drinkId" element={<Drink/>}/>
      </Routes>
      <Footer/>
    </Router>
  </React.StrictMode>
)
