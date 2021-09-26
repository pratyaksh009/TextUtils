import "./App.css";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import { useState } from "react";
import Alert from "./Components/Alert";
import React from "react";
// import About from "./Components/About";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [mode, SetMode] = useState(`light`);
  const [alert, setAlert] = useState(null);

  const showAlert = (msgType, msg) => {
    setAlert({
      type: msgType,
      message: msg,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === `dark`) {
      SetMode(`light`);
      document.body.style.backgroundColor = `white`;
      showAlert("success", "Light mode Enabled!");
    } else {
      SetMode(`dark`);
      document.body.style.backgroundColor = `#021228`;
      showAlert("success", "Dark mode Enabled!");
    }
  };

  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        <TextForm
          heading="Enter the text to analyze below"
          mode={mode}
          showAlert={showAlert}
        />
      </div>

      {/* <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Switch>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/">
              <TextForm
                heading="Enter the text to analyze below"
                mode={mode}
                showAlert={showAlert}
              />
            </Route>
          </Switch>
        </div>
      </Router> */}
    </>
  );
}

export default App;
