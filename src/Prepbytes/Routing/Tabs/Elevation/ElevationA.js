import React from 'react'
import Layout from '../../../Layout'
import './Elevation.css'
import image from './Images/Year.png'

const ElevationA = () => {
  return (
    <Layout>

      <div className='Elevation_Main_Div'>

      <div>

     
      <div className='Elevation_First_Div'>        
        <div className='Elevation_First_para'>
          <h3 className='Elevation_Div_First_heading'>PrepBytes Elevation Academy - Full Stack Web Development Career</h3>
          <p className='Elevation_Div_First_para'>Enroll in PrepBytes Elevation Academy - Full Stack Program and Guaranteed Tech Job of minimum 5 LPA.</p>
          <ul>
            <li>Complete Live Class from experts</li>
            <li>Be the best Full stack developer</li>
            <li>Job Guarantee</li>
          </ul>
          <div>
            <button className='Elevation_First_Div_Button'>Apply Now</button>
            <button className='Elevation_First_Div_Button'>Get a Call Back </button>
          </div>
        </div>


        <div>
          <img className='Elevation_First_Div_Image' src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/elevation-academy/ISA-masthead-mern-5.webp' alt=''></img>
        </div>

      </div>

      <div>
        <img className='Elevation_First_Div_Second_Image' src={image} alt=''></img>
      </div>

      </div>

      <br></br>
      <br></br>
        <h3>Why PrepBytes Elevation Academy?</h3>
      
      <div className='Elevation_second_div'>

        <div className='Live_Learning'>
          <img className='Live_Learning_image' src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/elevation-academy/Images/Live+Learning.webp' alt=''></img>
          <p className='LiveLearningpara'>Live Learning</p>
          <p className='Live_Learning_Paragraph'>Master Mern Stack in Live Classes taken by Experts in live classes</p>
        </div>

        <div className='Live_Learning'>
        <img className='Live_Learning_image' src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/elevation-academy/Images/1+week+of+Free+Classes.webp' alt=''></img>
          <p className='LiveLearningpara'>Learn with Experts</p>
          <p className='Live_Learning_Paragraph'>Learn with gain access to real-time web development experience.</p>
        </div>

        <div className='Live_Learning'>
        <img className='Live_Learning_image' src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/elevation-academy/Images/Learn+by+Doing.webp' alt=''></img>
          <p className='LiveLearningpara'>Learn by Doing</p>
          <p className='Live_Learning_Paragraph'>Gain in depth experience by building real world projects with accuracy</p>
        </div>

        <div className='Live_Learning'>
        <img className='Live_Learning_image' src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/elevation-academy/Images/Resume+Building.webp' alt=''></img>
          <p className='LiveLearningpara'>Resume Building</p>
          <p className='Live_Learning_Paragraph'>Get a resume that companies would shortlist with expertise.</p>
        </div>
        

        <div className='Live_Learning'>
        <img className='Live_Learning_image' src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/elevation-academy/Images/Mock+Interviews.webp' alt=''></img>
          <p className='LiveLearningpara'>Mock Interviews</p>
          <p className='Live_Learning_Paragraph'>Interview practice with industry veterans with real-time feedbacks</p>
        </div>

        <div className='Live_Learning'>
        <img className='Live_Learning_image' src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/elevation-academy/Images/Interview+Opportunities.webp' alt=''></img>
          <p className='LiveLearningpara'>Interview Opportunities</p>
          <p className='Live_Learning_Paragraph'>Get developer interview opportunities after course completion</p>
        </div>

  
      </div>





      </div>
    </Layout>
  )
}

export default ElevationA