import React, { useState } from "react";
import './Profile.css'
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";

const Profile = () => {
  const name = localStorage.getItem("name");
  const [show, setShow] = useState(localStorage.getItem("loggedIn"));

  // console.log(show);

  const handleLogout = () => {
    localStorage.clear();
    setShow(!show);
    toast.info("Logout successfully", { position: toast.POSITION.TOP_RIGHT });
  };

  const RenderProfile = () => {
    if(show){
        return (
          <div className="registerdemo"  >


            
<div className="dropdown">
              <label>
                <button className="Hi_Name" >Hi {name}</button>
              </label>
              <div className="dropdown-content">

                <div>

                <div > 
                <NavLink to='/NextPage/:id' className="registerlog">   Dashboard</NavLink>
             </div>
                
                </div>

                <div>
                <div><NavLink to="/login" onClick={handleLogout}  className="registerlog" >Logout</NavLink>  </div>
                </div>

              </div>
            </div>
        
          </div>
        )
      }
      else{
        return(

          <div className="dropdown">
              {/* <label className="nav-logo ">
                <img className="profilelogo" src= 'https://cdn-icons-png.flaticon.com/128/9131/9131529.png' alt=""></img>
              </label> */}
              <div className="mainPageLogin">

                <div>

                <div><NavLink to="/register" className="registerR" >Register</NavLink></div>
                </div>

                <div>
                <div><NavLink to="/login" className="register">Login</NavLink></div>
                </div>

              </div>
            </div>
     
      
        )
      }
  
  }

  return (
    <>
      <RenderProfile />
    </>
  );
};

export default Profile; 