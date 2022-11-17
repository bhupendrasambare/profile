import React from "react";
import About from "./components/About/About";
import Header from "./components/header/Header"
import Home from "./components/Home/Home";
import Skills from "./components/Skills/Skills";

function App() {
  return (
    <div className="App">
        <Header/>
        <main className="main">
            <Home/>
            <About/>
            <Skills/>
        </main>
    </div>
  );
}

export default App;
