import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import FullStackProgram from './Tabs/CourseAndPrograms/FullStackProgram'
import MCProgram from './Tabs/CourseAndPrograms/MCProgram'
import ElevationA from './Tabs/Elevation/ElevationA'
import Projects from './Tabs/Project/Projects'
import MockTest from './Tabs/StudyMaterial/MockTest'
import VideoTutorials from './Tabs/StudyMaterial/VideoTutorials'
import NavBar from '../NavBar/NavBar'
import HomePage from '../HomePage/HomePage'
import Private from '../Registration/Private'
import Signup from '../Registration/Signup'
import Login from '../Registration/Login'
import NextPage from '../../NextPage/NextPage'
import HTML from './Tabs/Project/HTML'
import MERN from './Tabs/Project/MERN'
import Node from './Tabs/Project/Node'
import ReactJS from './Tabs/Project/ReactJS'
import JS from './Tabs/Project/JS'
import CSS from './Tabs/Project/CSS'
// import MockTestNext from './Tabs/StudyMaterial/MockTestNext'


const RouteCompo = () => {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          {/* <Route path='/' element={<HomePage />} /> */}
          <Route path='/' element={<Private Components = {HomePage} />}/>
          <Route path='/fullstackprogram' element={<FullStackProgram />} />
          <Route path='/mastercompetativeprogram' element={<MCProgram />} />
          <Route path='/elevationacademy' element={<ElevationA />} />
          
          <Route path='/mocktest' element={<MockTest />} />
          <Route path='/videotutorial' element={<VideoTutorials />} />
          <Route path='/register' element={<Signup/>} />
          <Route path='/login' element={<Login/>}/> 
          <Route path='/dashboard' element={<NextPage/>}  />
          {/* <Route path='/NextMockPage/:id' element={<MockTestNext/>}  /> */}
          <Route path='/html' element={<HTML/>} />
          <Route path='/css' element={<CSS/>} />
          <Route path='/js' element={<JS/>} />
          <Route path='/reactjs' element={<ReactJS/>} />
          <Route path='/nodejs' element={<Node/>} />
          <Route path='/mern' element={<MERN/>}/>



          

        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default RouteCompo
