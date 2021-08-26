import './App.css';
import React, {useState} from 'react'
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light')

  // const removeBodyClasses = ()=>{
  //   document.body.classList.remove('bg-light')
  //   document.body.classList.remove('bg-dark')
  //   document.body.classList.remove('bg-primary')
  //   document.body.classList.remove('bg-danger')
  //   document.body.classList.remove('bg-success')
  //   document.body.classList.remove('bg-warning')
  // }
  
  // const toggleMode=(cls)=>{
  //   removeBodyClasses();
  //   document.body.classList.add('bg-'+cls)
  //   if(mode === 'dark'){
  //      setMode('light');
  //      document.body.style.color = 'black';
  //      document.body.style.backgroundColor = 'white';
  //      showAlert('Light Mode has been enabled', 'success');
  //    }
  //    else{
  //      setMode('dark');
  //      document.body.style.color = 'white';
  //      document.body.style.backgroundColor = 'black';
  //      showAlert('Dark Mode has been enabled', 'success');
  //    }
  //  }
  
  const toggleMode=()=>{
    if(mode === 'dark'){
      setMode('light');
      document.body.style.color = 'black';
      document.body.style.backgroundColor = 'white';
      showAlert('Light Mode has been enabled', 'success');
    }
    else{
      setMode('dark');
      document.body.style.color = 'white';
      document.body.style.backgroundColor = 'black';
      showAlert('Dark Mode has been enabled', 'success');
    }
  }
 
  const [alert, setAlert] = useState(null)

  const showAlert=(message, type)=>{
    setAlert({
      msg: message,
      typ: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }

  return (
    <>
      <Router>
        <Navbar title="Textutils" homeText="Home" aboutText="About Us" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert}/>
        <div className="container my-3">
          <Switch>
            <Route exact path="/about">
              <About mode={mode}/>
            </Route>
            <Route exact path="/">
              <TextForm heading="Enter The Text To Prettify" mode={mode} toggleMode={toggleMode} showAlert={showAlert} />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
