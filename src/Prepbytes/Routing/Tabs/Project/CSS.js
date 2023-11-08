import React from 'react'
import './Project.css'
const CSS = () => {
  return (
    <div>

    
    <div className='projectBackground'>
    <h1>Todo App UI Web</h1>
    <p className='ParaProject'>This project contains the capabilties of HTML, CSS. During the development of this project you will understand that how do you connect the HTML pages with CSS files and style the pages, you will be developing styled static application containing HTML files and CSS files. And understand the difference between Internal CSS, External CSS and Inline CSS and CSS properties like margin, display, box property, padding etc.</p>
    <div className='iframediv'>
    <a className='Projectbtn' href='https://github.com/P-mahima/css-project1-todo' target='_blank' >Repo URL</a>
    <a className='Projectbtn' href='https://p-mahima.github.io/css-project1-todo/' target='_blank'>For Project Click Here</a>
    <iframe className='IframeDemo' src='https://p-mahima.github.io/css-project1-todo/' title='Backtacking' >Demo</iframe>
    </div>
  
    </div>

<div className='projectBackground'>
<h1>Todo App UI Mobile</h1>
<p>TIn this project you will be developing the application in a way that same website can work on multiple devices having different screen sizes in pixels. To acheive this you will be using Media Queries, one of the finest concept in CSS to build responsive applications.</p>
<div className='iframediv'>
<a className='Projectbtn' href='https://github.com/P-mahima/CSS-todo-mediaQuery' target='_blank' >Repo URL</a>
<a className='Projectbtn' href='https://p-mahima.github.io/CSS-todo-mediaQuery/' target='_blank'>For Project Click Here</a>
<iframe className='IframeDemo' src='https://p-mahima.github.io/CSS-todo-mediaQuery/' title='Backtacking' >Demo</iframe>
</div>
</div>

</div>

  )
}

export default CSS
