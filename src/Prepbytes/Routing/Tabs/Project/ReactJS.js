import React from 'react'
import './Project.css'
const ReactJS = () => {
  return (
    <div>

   
    <div className='projectBackground'>
    <h1>REACTJS</h1>
    <p>Project Name: React Blog App</p>
    <p>This assessment includes capabilities React.JS and React Router mainly. While developing this project you will understand that how you can create multiple components in React like Smart Components and Dummy Components and how to modify and do data operations within component using state variables and how to communicate between two components props variables. You will also be creating different components like Class Components and Functional Components, and can use Hooks, which is the newest concept of React16. And also you will get comfortable in developing single page application using Browser Router.</p>
    <div className='iframediv'>
    <a className='Projectbtn' href='https://github.com/P-mahima/R-ReactProject-ContextApi' target='_blank'>Repo URL</a>
    <a className='Projectbtn' href='https://strong-stroopwafel-751918.netlify.app' target='_blank'>For Project Click Here</a>
    <iframe className='IframeDemo' src='https://strong-stroopwafel-751918.netlify.app' title='Backtacking' >Demo</iframe>
  
    </div>
</div>

<div className='projectBackground'>
   
    <p>Project Name: React Blog App Backend</p>
    <p>This project mainly revolves around technologies like Node.JS and Express. During its development you will understand that how to create a server and then how to expose the APIs having data using express server. And also they will understand how to create the structure of data and maintain the data.</p>
    <div className='iframediv'>
    <a className='Projectbtn' href='https://github.com/P-mahima/ReactBackend/tree/main' target='_blank'>Repo URL</a>
    <a className='Projectbtn' href='https://651e3d5345bdfe339f7dfe72--majestic-swan-dd36df.netlify.app/' target='_blank'>For Project Click Here</a>
    <iframe className='IframeDemo' src='https://651e3d5345bdfe339f7dfe72--majestic-swan-dd36df.netlify.app/' title='Backtacking' >Demo</iframe>
  
    </div>
</div>


</div>
  )
}

export default ReactJS