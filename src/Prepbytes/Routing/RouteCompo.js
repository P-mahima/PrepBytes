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
import MockTestNext from './Tabs/StudyMaterial/MockTestNext'


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
          <Route path='/projects' element={<Projects />} />
          <Route path='/mocktest' element={<MockTest />} />
          <Route path='/videotutorial' element={<VideoTutorials />} />
          <Route path='/register' element={<Signup/>} />
          <Route path='/login' element={<Login/>}/> 
          <Route path='/NextPage/:id' element={<NextPage/>}  />
          <Route path='/NextMockPage/:id' element={<MockTestNext/>}  />
          

        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default RouteCompo
