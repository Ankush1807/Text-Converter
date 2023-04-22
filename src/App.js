import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState } from 'react'



function App() {
  const [mode, setMode] = useState('light')
  const toggleMode = ()=>{
        if (mode==='light'){
          setMode("dark")
          document.body.style.backgroundColor='grey'
        }
        else{
          setMode("light")
          document.body.style.backgroundColor='white'
        }

        }
  
  return (
    <>
      <NavBar title="TConverter" mode={mode} toggleMode = {toggleMode}/>
      <div className="container">
        <TextForm heading="Enter the text to analyse"  />
        {/* <About></About> */}
      </div>
      
      
    </>

  );
}

export default App;
