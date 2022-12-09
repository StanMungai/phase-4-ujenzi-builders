import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./SignUp";
import Login from "./Login";
import NavBar from "./NavBar";
import Home from "./Home";
import ProjectList from "./ProjectList";

function App() {
  const [contractor, setContractor] = useState(null);

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((contractor) => setContractor(contractor));
      }
    });
  }, []);

  // if (!contractor) return <Login onLogin={setContractor} />;


  return (
    <>
      <BrowserRouter>
        <NavBar contractor={contractor} setContractor={setContractor} />
        <main>
          {contractor ? (
            // <BrowserRouter>
              <Routes>
                <Route path="/" element={<Home contractor={contractor}/>} />
              </Routes> 
            // </BrowserRouter>  
              ) : (
            // <BrowserRouter>    
              <Routes>  
                <Route path="/signup" element={<SignUp setContractor={setContractor}/>} />
                <Route path="/login" element={<Login setContractor={setContractor} />} />
                <Route path="/" element={<ProjectList />} />
              </Routes>
            // </BrowserRouter>
          )}
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;
