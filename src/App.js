import React, { useState } from "react";
import './App.css';
import { LoginForm } from './components/Loginform';
import { SignUpForm } from './components/Signupform';
import "./components/FontAwesomeIcons/icon";
// import { CSSTransition } from "react-transition-group";
// import swal from 'sweetalert';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <div className="main">
          <Routes>
            <Route exact path='/' element={<SignUpForm />}></Route>
            <Route exact path='/loginform' element={<LoginForm />}></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
