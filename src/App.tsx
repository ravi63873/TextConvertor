import React, { useState } from 'react';

import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light'); //whether darkmode enable or not...
  const [alert, setAlert] = useState(null);

  const showAlert = (message, Type) => {
    setAlert({
      msg: message,
      type: Type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const removeBodyClasses = () => {
    document.body.classList.remove('bg-light ');
    document.body.classList.remove('bg-dark ');
    document.body.classList.remove('bg-warning ');
    document.body.classList.remove('bg-sucess ');
    document.body.classList.remove('bg-danger ');
  };

  const toggleMode = (cls) => {
    removeBodyClasses();
    document.body.classList.add('bg-' + cls);
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      // showAlert("Dark mode has enabled","success");
      // document.title = 'TextUtils - Dark Mode';
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'light';
      // showAlert("Light mode has been enabled","success");
      // document.title = 'TextUtils - light Mode';
    }
  };
  return (
    <>
      <Router>
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<About mode={mode} />}></Route>
            <Route
              exact
              path="/"
              element={
                <TextForm
                  showAlert={showAlert}
                  heading="Try TextUtils - word Counter, Character Counter, Remove extra Spaces"
                  mode={mode}
                />
              }
            />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
