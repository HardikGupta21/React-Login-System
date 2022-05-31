import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';
import '../components/myStyles.css';
import welcome from "../welcome.jpg";

export const SignUpForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [cpassword, setConpass] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        if (!name || !email || !password || !cpassword) {
            swal({
                title: "Oops!!",
                text: "Please Fill Every Field !!",
                icon: "info"
            })
        } else if (password !== cpassword) {
            swal({
                title: "Oops!!",
                text: "Those passwords didn’t match. Try again.",
                icon: "warning"
            })
        } else {
            localStorage.setItem("Username", JSON.stringify(name));
            localStorage.setItem("Email", JSON.stringify(email));
            localStorage.setItem("Password", JSON.stringify(password));
            swal({
                title: "Great!!",
                text: "You have registered successfully.",
                icon: "success"
            })
        }
    }

    return (
        <div className="sg-main">
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
                <div className="head"><h1>Sign Up</h1></div>
                <form onSubmit={handleSubmit} id='signup' className='signup-form' action="">
                    <div className='fields'>
                        <input onChange={(event) => { setName(event.target.value) }} type="text" placeholder='Username'
                            // value={signupData.username}
                            name="username" id='username' autoComplete='off' />
                    </div>
                    <div className='fields'>
                        <input onChange={(event) => { setEmail(event.target.value) }} type="email" placeholder='Email'
                            // value={signupData.email}
                            name="email" id='email' autoComplete='off' />
                    </div>
                    <div className='fields'>
                        <input onChange={(event) => { setPassword(event.target.value) }} type="password" placeholder='Password'
                            // value={signupData.password}
                            name="password" id='password' autoComplete="off" />
                    </div>
                    <div className='fields'>
                        <input onChange={(event) => { setConpass(event.target.value) }} type="password" placeholder='Confirm Password'
                            // value={signupData.cpassword}
                            name="cpassword" id='cpassword' autoComplete="off" />
                    </div>
                    <div className='fields'>
                        <p>Already a user? <Link className="login-btn" to="/loginform">Login</Link></p>
                    </div>
                    <button type="submit" className="btn">Sign Up</button>
                </form>
            </div>
        </div>
    )
};

// export default SignUpForm;