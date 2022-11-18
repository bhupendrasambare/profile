import React from "react";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Header from "./components/header/Header"
import Home from "./components/Home/Home";
import Portfolio from "./components/Portfolio/Portfolio";
import Qualifications from "./components/Qualifications/Qualifications";
import Skills from "./components/Skills/Skills";

function App() {
  return (
    <div className="App">
        <Header/>
        <main className="main">
            <Home/>
            <About/>
            <Qualifications/>
            <Skills/>
            <Portfolio/>
            <Footer/>
        </main>
    </div>
  );
}

export default App;
