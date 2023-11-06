import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import image from './images/loginLL.jpg'
import Footer from "../../Footer/Footer";
// import Layout from "../../components/layout/Layout";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [responseData, setResponseData] = useState(null);
  const navi = useNavigate();

  const emailHandler = (event) => {
    event.preventDefault();
    setEmail(event.target.value);
  };

  const passwordHandler = (event) => {
    event.preventDefault();
    setPassword(event.target.value);
  };

  const loginUser = async (userData) => {
    const api = "https://prepbyteserver.onrender.com/route/login";
    const response = await axios.post(api, userData);
    setResponseData(response.data);

    console.log(response.data);

    if (response.data.token) {
      console.log(responseData);
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("loggedIn", true);
      localStorage.setItem("name", response.data.userData.name);
      localStorage.setItem("userId", response.data.userData._id);

      navi("/");
    } else {
      window.alert("invalide Credential");
      navi("/register");
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const userData = {
      email: email,
      password: password,
    };
    setEmail("");
    setPassword("");
    loginUser(userData);
  };

  return (
    <div>
  


        

  <div className='maingrid'>

<div class="grid-container">
  <div>
    <img className='signuplogin' src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/illustrated.webp' alt=''></img>
  </div>




  <div className='SigninAchievements'>
    <div className='signupmerge'>
      <div>
        <img className='signupimage' src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/students.webp' alt=''></img>
      </div>
      <div className="flexsignup">
        <div className='signupK'>10K+</div>
        <div className='signupDivStudents'>Students Enrolled</div>
      </div>
    </div>

    <div className='signupmerge'>
      <div>
        <img className='signupimage' src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/college.webp' alt=''></img>
      </div>
      <div className="flexsignup">
        <div className='signupK'>1000+</div>
        <div className='signupDivStudents'>Reach in Colleges</div>
      </div>
    </div>

    <div className='signupmerge'>
      <div>
        <img className='signupimage' src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/learning.webp' alt=''></img>
      </div>
      <div className="flexsignup">
        <div className='signupK'>10K+</div>
        <div className='signupDivStudents'>Hours of Learning</div>
      </div>
    </div>

    <div className='signupmerge'>
      <div>
        <img className='signupimage' src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/social.webp' alt=''></img>
      </div>
      <div className="flexsignup">
        <div className='signupK'>150K+</div>
        <div className='signupDivStudents'>Social Community</div>
      </div>
    </div>
  </div>





  <div className='maindivsignup'>
    <div className='signupDivLogin'>
      <Link to='/register'>
        <div>SignUp</div>
      </Link>
      <Link to='/login'>
        <div>Login</div>
      </Link>
    </div>
    <div className='signupDiv'>Sign in to your account</div>
    <div class="container">

      

      <div class="did-floating-label-content did-error-input">
        <input class="did-floating-input" type="email" placeholder=" " name="user-name"
        required="required"
        value={email}
        onChange={emailHandler}/>
        <label class="did-floating-label">Email</label>
      </div>


      

      <div class="did-floating-label-content did-error-input">
        <input class="did-floating-input" type="password" placeholder=" " name="user-password"
        required="required"
        autoComplete="name"
        value={password}
        onChange={passwordHandler}/>
        <label class="did-floating-label">Password</label>
      </div>

      <div className='college'>


    



       

      </div>

  
    <br></br>
    <Link to='/'>
    <button className='buttonsignup' onClick={submitHandler}>SIGNIN</button>
    </Link>
    </div>

  </div>







</div>
</div>
     
 
   
   <Footer/>
    </div>
  );
};

export default Login;




// <div className="loginform">


// <h2 className='labeltext'>Good to see you again 😊</h2>

// <div className="inputBox">
//   <span className="tab"  >Email: </span>
//   <input
//     type="text"
//     name="user-name"
//     required="required"
//     onChange={emailHandler}
//     value={email}
//   />
//   <i></i>
// </div>
// <div className="inputBox">
//   <span className="tab" >Password: </span>
//   <input
//     type="password"
//     name="user-password"
//     required="required"
//     onChange={passwordHandler}
//     value={password}
//   />
//   <i></i>
// </div>

// <div className="buttonflex">

//   <Link  className="loginregister" to="/register"  >
// <button >
  
//     Don't have an account
// </button>
//     </Link>

// <button type="submit" value="login" onClick={submitHandler}>
// <Link className="loginregist" to={'/'}>

//   Login
// </Link>
// </button>
// </div>
// </div>