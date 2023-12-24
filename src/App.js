import React, { useEffect, useState } from "react";
import About from "./About/Component/About";
import Header from "./Navbar/Header"
import Home from "./Home/Components/Home";
import Portfolio from "./Portfolio/Component/Portfolio";
import Qualifications from "./Qualification/Component/Qualifications.jsx";
import Skills from "./Skills/Component/Skills";
import { Route, Routes } from "react-router-dom";
import { RingLoader } from "react-spinners";
import Contact from "./Contact/Component/Contact";

window.addEventListener('load', (event) => {
  console.log('page is fully loaded');
});
function App() {
    const [loading,setLoading] = useState(false);
    
    useEffect(()=>{
      setLoading(true);
      setTimeout(()=>{
        setLoading(false)
      },1000)
    },[])

  return (
    
    <div className="App">
      {loading?
        <div className="loading-box">
          <RingLoader color="rgb(0 222 255)" size={60} loading={loading} />
        </div>
        :<>
          <Header/>
          <main className="main">
              <Routes>
                  <Route path="/" element={<Home/>}/>
                  <Route path="/about" element={<About/>}/>
                  <Route path="/qualification" element={<Qualifications/>}/>
                  <Route path="/skills" element={<Skills/>}/>
                  <Route path="/portfolio" element={<Portfolio/>}/>
                  <Route path="/contact" element={<Contact/>}/>
              </Routes>
          </main>
        </>
      }
        </div>
  );
}

export default App;
