import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'
import Alert from './components/Alert';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {

  const [mode, setMode] = useState(`light`);
  const [alert, setaAlert] = useState(null)

  const showAlert = (message, type) =>{
    setaAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setaAlert(null);
    }, 2000);
  }

  const toggleMode =()=>{
    if(mode==='dark'){
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode enabled", "success");
      document.title = 'Text Utils - Dark Mode';
    }
    else{
      setMode('dark');
      document.body.style.backgroundColor = '#4682B4';
      showAlert("Dark mode enabled", "success");
      document.title = 'Text Utils - Light Mode';
    }  
  }

  return (
    <>
    <Router>
      <Navbar title="Text Utils" mode={mode} toggleMode={toggleMode}/>
        <Alert alert={alert}/> 
        <div className="container my-3">
          <Switch>
            <Route exact path="/about">
              <About/>
            </Route>
            <Route exact path="/">
              <TextForm showAlert={showAlert} heading="Enter your Text" mode={mode}/>  
            </Route>
          </Switch>
        </div>
    </Router>
    </>
  );
}

export default App;

