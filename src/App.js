import React,{ useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link
} from "react-router-dom";

function App() {
  const [mode,setMode]=useState("light");
  const [alert,setAlert]=useState(null);
  const showAlert= (type,message)=>{
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(()=>{
      setAlert(null);
    },1500)
  }
  const handleDarkMode= ()=> {
      if (mode==="light"){
        setMode("dark");
        document.body.style.backgroundColor="#081440";
        // showAlert("success","Dark Mode Enabled");
      }
      else{
        setMode("light");
        document.body.style.backgroundColor="white";
        // showAlert("success","Dark Mode Disabled");
      }
  };
  return (
    <Router>
      <Navbar title="TextAnalyzer" mode={mode} toggle={handleDarkMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
      <Routes>
        <Route exact path="/" element={<TextForm heading="Enter text to analyse" mode={mode} alert={showAlert} />}/>
        <Route exact path ="/about" element={<About mode={mode}/>}/>
      </Routes>
      </div>
    </Router>
  );
}

export default App;
