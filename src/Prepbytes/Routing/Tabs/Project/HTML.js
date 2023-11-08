import React from 'react'
import './Project.css'

const HTML = () => {
  return (
    <div className='projectBackground'>
        <h1>HTML</h1>
        <p>Project Name: Backtracking</p>
        <p className='ParaProject'>It is a pure HTML page. This assignment is to make sure that you understand the basic html tags like Heading, Paragraphs, Lists, Tables, Dic, etc. and their usage.</p>
        <div className='iframediv'>
        <a className='Projectbtn' href='https://github.com/P-mahima/Backtracking/blob/main/backtracking.html' target='_blank'>Repo URL</a>
        <a className='Projectbtn' href='https://p-mahima.github.io/Backtracking/backtracking.html' target='_blank'>For Project Click Here</a>
        <iframe className='IframeDemo' src='https://p-mahima.github.io/Backtracking/backtracking.html' title='Backtacking' >Demo</iframe>
      
        </div>
    </div>
  )
}

export default HTML
