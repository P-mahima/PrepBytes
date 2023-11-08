import React from 'react'
import './Project.css'
const MERN = () => {
  return (
    <div className='projectBackground'>
    <h1>MERN</h1>
    <p>Project Name: E-Commerce App</p>
    <p className='ParaProject'>This assessment includes capabilities React.JS and React Router mainly. While developing this project you will understand that how you can create multiple components in React like Smart Components and Dummy Components and how to modify and do data operations within component using state variables and how to communicate between two components props variables. You will also be creating different components like Class Components and Functional Components, and can use Hooks, which is the newest concept of React16. And also you will get comfortable in developing single page application using Browser Router. You will also be developing this application using Redux library, so you will be working on concepts like setting up Redux in React Project following three principles of redux i.e. State, Action and Reducer. Also how to connect and have the communication between the React Components and Redux. You will also be developing Login functionality in this project, which includes the Registration Concept and Login Concept. You will be using JWT tokens to acheive this functionality.</p>
    <div className='iframediv'>
    <a className='Projectbtn' href='https://github.com/P-mahima/mernecommerce' target='_blank'>Repo URL</a>
    <a className='Projectbtn' href='https://653ba27f5d48a5315d3dbe46--comforting-parfait-f0e5a8.netlify.app/' target='_blank'>For Project Click Here</a>
    <iframe className='IframeDemo' src='https://653ba27f5d48a5315d3dbe46--comforting-parfait-f0e5a8.netlify.app/' title='Backtacking' >Demo</iframe>
  
    </div>
</div>
  )
}

export default MERN