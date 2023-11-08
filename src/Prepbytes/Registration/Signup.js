import React from 'react'
import './Signup.css'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'
import Layout from '../Layout';
// import imagesignup from './images/images.png'
// import { toast } from 'react-toastify';

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneno, setPhoneNo] = useState("")
  const [college, setCollege] = useState("")
  // const [passingyear, SetPassingYear] = useState("")

  const [responseData, setresponseData] = useState(null);
  const navi = useNavigate();

  const HandleName = (event) => {
    event.preventDefault();
    setName(event.target.value);
  };
  const HandleEmail = (event) => {
    event.preventDefault();
    setEmail(event.target.value);
  };

  const HandlePassword = (event) => {
    event.preventDefault();
    setPassword(event.target.value);
  };

  const HandlePhoneNo = (event) => {
    event.preventDefault();
    setPhoneNo(event.target.value);
  };

  const HandleCollege = (event) => {
    event.preventDefault();
    setCollege(event.target.value);
  };
  const HandlePassingYear = (event) => {
    event.preventDefault();
    setCollege(event.target.value);
  };


  const RegisteringUser = async (clientData) => {
    const url = "https://prepbyteclone-server.onrender.com/user/register";
    const response = await axios.post(url, clientData);
    setresponseData(response.data);

    console.log(response.data);

    if (response.data.token) {
      console.log(response.data.token);
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("loggedIn", true);
      localStorage.setItem("name", response.data.name);
      localStorage.setItem("email", response.data.email);
      localStorage.setItem("userId", response.data.userId);

      navi("/");
      console.log(responseData);
      // toast.success('register successfully')
    } else {
      window.alert("alrady registed")
      navi("/login");
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const clientData = {
      name: name,
      email: email,
      password: password,
    };
    setName("");
    setEmail("");
    setPassword("");
    RegisteringUser(clientData);
  };
  return (
    <Layout>
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
            <div className='signupDiv'>Create new account</div>
            <div class="container">

              <div class="did-floating-label-content did-error-input">
                <input class="did-floating-input" type="text" placeholder=" " name="name"
                required="required"
                
                value={name}
                onChange={HandleName} />
                <label class="did-floating-label">Name</label>
              </div>

              <div class="did-floating-label-content did-error-input">
                <input class="did-floating-input" type="email" placeholder=" " name="email"
                required="required"
                
                value={email}
                onChange={ HandleEmail}/>
                <label class="did-floating-label">Email</label>
              </div>


              <div class="did-floating-label-content did-error-input">
                <input class="did-floating-input" type="number" placeholder=" " name="phoneno"
                required="required"
             
                value={phoneno}
                onChange={HandlePhoneNo}/>
                <label class="did-floating-label">Phone no.</label>
              </div>

              <div class="did-floating-label-content did-error-input">
                <input class="did-floating-input" type="password" placeholder=" " name="password"
                required="required"
                
                value={password}
                onChange={HandlePassword}/>
                <label class="did-floating-label">Password</label>
              </div>

              <div className='college'>


                <div class="did-floating-label-content did-error-input">
                  <input class="did-floating-input" type="text" placeholder=" " name="college"
                required="required"
                
                value={college}
                onChange={HandleCollege}/>
                  <label class="did-floating-label">College</label>
                </div>



                <div class="did-floating-label-content did-error-input">
                  <select class="did-floating-input" onclick="this.setAttribute('value', this.value);" onchange="this.setAttribute('value', this.value);" value="">
                    <option value="0">Passing Year</option>
                    <option value="1">1991</option>
                    <option value="2">1992</option>
                    <option value="3">1993</option>
                    <option value="4">1994</option>
                    <option value="5">1995</option>
                    <option value="6">1996</option>
                    <option value="7">1997</option>
                    <option value="8">1998</option>
                    <option value="9">1999</option>
                    <option value="10">2000</option>
                    <option value="11">2001</option>
                    <option value="12">2002</option>
                    <option value="13">2003</option>
                    <option value="14">2004</option>
                    <option value="15">2005</option>
                    <option value="16">2006</option>
                    <option value="17">2007</option>
                    <option value="18">2008</option>
                    <option value="19">2009</option>
                    <option value="20">2010</option>
                    <option value="21">2011</option>
                    <option value="22">2012</option>
                    <option value="23">2013</option>
                    <option value="24">2014</option>
                    <option value="25">2015</option>
                    <option value="26">2016</option>
                    <option value="27">2017</option>
                    <option value="28">2018</option>
                    <option value="29">2019</option>
                    <option value="30">2020</option>
                    <option value="31">2021</option>
                    <option value="32">2022</option>
                    <option value="33">2023</option>
                    <option value="34">2024</option>
                    <option value="35">2025</option>
                    <option value="36">2026</option>

                  </select>
                  {/* <label class="did-floating-label">Passing Year</label> */}
                </div>

              </div>

              <input type="checkbox" />
              <label class="container">
                I agree to the terms and conditions.
                {/* <span class="checkmark"></span> */}
              </label>
            <br></br>
            <Link to='/'>
            <button className='buttonsignup' type="submit" value="submit" onClick={handleSubmit}>SIGNUP</button>
            </Link>
            </div>

          </div>







        </div>
      </div>
    </Layout>
  );
};


export default Signup










// import React from 'react'
// import './Signup.css'
// import { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import axios from 'axios'
// // import imagesignup from './images/images.png'
// // import { toast } from 'react-toastify';

// const Signup = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const [responseData, setresponseData] = useState(null);
//   const navi = useNavigate();

//   const HandleName = (event) => {
//     event.preventDefault();
//     setName(event.target.value);
//   };
//   const HandleEmail = (event) => {
//     event.preventDefault();
//     setEmail(event.target.value);
//   };

//   const HandlePassword = (event) => {
//     event.preventDefault();
//     setPassword(event.target.value);
//   };

//   const RegisteringUser = async (clientData) => {
//     const url = "https://prepbyteserver.onrender.com/route/register";
//     const response = await axios.post(url, clientData);
//     setresponseData(response.data);

//     console.log(response.data);

//     if (response.data.token) {
//       console.log(response.data.token);
//       localStorage.setItem("token", response.data.token);
//       localStorage.setItem("loggedIn", true);
//       localStorage.setItem("name", response.data.name);
//       localStorage.setItem("email", response.data.email);
//       localStorage.setItem("userId", response.data.userId);

//       navi("/");
//       console.log(responseData);
//       // toast.success('register successfully')
//     } else {
//       window.alert("alrady registed")
//       navi("/login");
//     }
//   };
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const clientData = {
//       name: name,
//       email: email,
//       password: password,
//     };
//     setName("");
//     setEmail("");
//     setPassword("");
//     RegisteringUser(clientData);
//   };
//   return (
{/* <>
<div className=''>
     
          
         <div >  

            <h2  >Register</h2>

            <div className='Labelinput' >
              <label className="tab">Name: </label>
              
              <input
                type="text"
                name="name"
                required="required"
                autoComplete="name"
                value={name}
                onChange={HandleName}
               className='inputField'
              />
              <i></i>
            </div>


            <div  >

              <label >Email: </label>
              <input
                type="email"
                name="email"
                required="required"
                autoComplete="email"
                value={email}
                onChange={HandleEmail}
                
              />
              <i></i>
            </div>

            <div >
              <label  className="tab">Password: </label>

              <input
                type="password"
                name="password"
                required="required"
                value={password}
                autoComplete="password"
                onChange={HandlePassword}
                
              />
              <i></i>

            </div>

          <div >

         
            <button type="submit" value="submit" onClick={handleSubmit} >
            <Link  >
              Register
            </Link>
              </button>
            


            <button>
            <Link   to="/login" >
            Already have Account

            </Link>
            </button>
            </div>
        </div>
        </div>
</> */}
//   );
// };


// export default Signup
