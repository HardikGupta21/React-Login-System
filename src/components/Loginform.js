import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';
import '../components/myStyles.css';
import welcome from "../welcome.jpg";
export const LoginForm = () => {
  const [emailLog, setEmailLog] = useState("");
  const [passwordLog, setPasswordLog] = useState("");
  let email1 = localStorage.getItem("Email").replace(/"/g, "");
  let pass1 = localStorage.getItem("Password").replace(/"/g, "");
  let name1 = localStorage.getItem("Username").replace(/"/g, "");

  function checkLogin(e) {
    e.preventDefault();
    if (emailLog === email1 && passwordLog === pass1) {
      swal({
        title: "Login Success",
        text: "Welecome " + [name1] + " !!",
        icon: "success"
      })
      console.log(email1);
      console.log(pass1);
    } else if (!emailLog || !passwordLog) {
      swal({
        title: "Oops!!",
        text: "Please Fill Every Field !!",
        icon: "info"
      })
    } else {
      swal({
        title: "Login Failed",
        text: "Invalid Email ID or Password",
        icon: "error"
      })
    }

  }

  return (
    <div className="lg-main">
      <div className="form-image">
        <img src={welcome} alt="Welcome" />
        <div className="welcome">
          <h1>Welcome</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quas voluptatibus laboriosam quibusdam iste est vitae quo similique,
            vero corporis alias quis,vel suscipit odit consequuntur enim quos amet assumenda. Ipsam.
          </p>
        </div>
      </div>
      <div className="sub-main">
        <div className="head"><h1>Login</h1></div>
        <form onSubmit={checkLogin} id='login' className='login-form' action="">
          <div className='fields'>
            <input onChange={(event) => { setEmailLog(event.target.value) }} type="email" placeholder='Email' id='email' autoComplete="off" />
          </div>
          <div className='fields'>
            <input onChange={(event) => { setPasswordLog(event.target.value) }} type="Password" placeholder='Password' id='password' autoComplete="off" />
          </div>
          <div className='fields'>
            <p>Need an Account? <Link className="signup-btn" to="/">SignUp</Link></p>
          </div>
          <button type="submit" className="btn">Login</button>
        </form>
      </div>
    </div>
  )
};

// export default LoginForm;
