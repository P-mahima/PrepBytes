import React, { useEffect, useState } from 'react'
import Layout from '../../../Layout'
import './MCProgram.css'
import TestCardMaster from '../../../../Dashboard/AddtocartMaster'
import axios from 'axios'

const MCProgram = () => {
  const [mockData, SetMockData] = useState([])

  // url = 
  useEffect(() => {
      axios.get('https://prepbyteclone.onrender.com/user/master')
          .then((response) => {
              // console.log(response);
              SetMockData(response.data)
              // setLoading(false);
          })
          .catch((err) => {
              console.log(err);
          })
  }, [])
  return (
    <Layout>
      <div className='Main_Mater_Program'>

     

      <div  className='MCProgramMainDivFirst'>
        <div>
          <h3 className='MCProgramHeading'>MASTER COMPETITIVE <br></br> PROGRAMMING</h3>
          <p className='MCProgramHeadingpara'>Master Competitive Programming Fom Zero And Become A Top-Rated Coder <span className='SapnDiv'>Under The Guidance Of Top Competitive Programmers</span> </p>
          <button className='MCProgramHeadingButton'>Enrol Now</button>
        </div>
        <div>
          <img className='MCProgramHeadingImage' src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/MCPWebp/mcp-header-image-mobile.webp' alt=''></img>
        </div>
      </div>


    <div className='MCSUBdiv_SUB_'>

    

      <div className='MCSUBdiv_SUB_Div_Main'>
        <div className='MCSUBdiv_SUB_Div_First'>
        <div>
          <img className='MCSUBdivImage' src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/MCPWebp/mcp-usp-one.webp' alt=''></img>
        </div>
        <div>
          <p>9 months intensive bootcamp</p>
        </div>
        </div>

        <div className='MCSUBdiv_SUB_Div_Second'>
        <div>
          <img className='MCSUBdivImage' src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/MCPWebp/mcp-usp-two.webp' alt=''></img>
        </div>
        <div>
          <p>Quick doubt resolution</p>
        </div>
        </div>


        </div>


        <div className='MCSUBdiv_SUB_Div_Main'>
        <div className='MCSUBdiv_SUB_Div_Third'>
        <div>
          <img className='MCSUBdivImage' src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/MCPWebp/mcp-usp-three.webp' alt=''></img>
        </div>
        <div>
          <p>Live coding sessions with top-rated coders</p>
        </div>
        </div>

        <div className='MCSUBdiv_SUB_Div_Four'>
        <div>
          <img className='MCSUBdivImage' src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/MCPWebp/mcp-usp-four.webp' alt=''></img>
        </div>
        <div>
          <p>Get certificate on course completion</p>
        </div>
        </div>

        </div>
    
    </div>


      <div className='Founderinfo'>
        <div>
          <h4>Get Guidance From Industry Leading Mentors</h4>
        </div>

        <div>
          <h6>Other Mentors You Will Be Interacting With</h6>
        </div>

        <div className='Founder'>
          <div className='FounderDiv'>
            <div>
              <img className='FounderDivImageFounder' src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/Student+Placed+Section/Mentor_Mamta.webp' alt=''></img>
            </div>
            <div className='Founderdetail'>
              <div>

            <h4>Mamta</h4>
              </div>
              <div>

            <p>Co-Founder, PrepBytes</p>
              </div>
              <div>
            <img className='FounderDivImageCompany' src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/zenithWebp/Mentor-Company1.webp' alt=''></img>

              </div>
            </div>
          </div>


          <div className='FounderDiv'>
            <div>
              <img className='FounderDivImageFounder' src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/Student+Placed+Section/Mentor_Kushdeep.webp' alt=''></img>
            </div>
            <div className='Founderdetail'>
            <h4>Khusdeep</h4>
            <p>SDE, sharechat</p>
            <img className='FounderDivImageCompany' src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/zenithWebp/logo-01.webp' alt=''></img>
            </div>
          </div>


          <div className='FounderDiv'>
          <div>
            <img className='FounderDivImageFounder' src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/Student+Placed+Section/Mentor_Aveek.webp' alt=''></img>
          </div>

          <div className='Founderdetail'>
            <h4>Aveek</h4>
            <p>Mentor, prepBytes</p>
            <img className='FounderDivImageCompany' src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/zenithWebp/logo-02.webp' alt=''></img>
          </div>

          </div>



        </div>

      </div>


      <h3 className='Master_Program'>Master Competitive Programming With Us</h3>

      <div className='MasterCompetitiveProgramming'>
        <div className='MasterCompetitiveProgramming_Left'>

          <div>
          <div>
            <h6>Personalised Program</h6>
          </div>
          <div>
            <h6 className='MasterCompetitiveProgramming_Para'>Master your skills from where you are, with India's only personalised program</h6>
          </div>
          </div>

          <div>
          <div>
            <h6>Quick Doubt Support</h6>
          </div>
          <div>
            <h6 className='MasterCompetitiveProgramming_Para'>Get your doubts cleared by coding experts and have a smooth learning</h6>
          </div>
          </div>

          <div>
          <div>
            <h6>250+ Coding Questions</h6>
          </div>
          <div>
            <h6 className='MasterCompetitiveProgramming_Para'>Best way to master a language is by coding in the language</h6>
          </div>
          </div>

          <div>
          <div>
            <h6>50+ Hours of Videos</h6>
          </div>
          <div>
            <h6 className='MasterCompetitiveProgramming_Para'>Recorded video lectures by experts to help you understand the concepts easily</h6>
          </div>
          </div>

        </div>



        <div>
          <img className='MaterImage' src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/zenithWebp/Vector.svg' alt=''></img>
        </div>



        <div className='MasterCompetitiveProgramming_Right'>
        <div>
          <div>
            <h6>Expert Mentors</h6>
          </div>
          <div>
            <h6 className='MasterCompetitiveProgramming_Para'>Get career guidance, mentorship, time management strategies from industry experts</h6>
          </div>
          </div>

          <div>
          <div>
            <h6>Get Certified</h6>
          </div>
          <div>
            <h6 className='MasterCompetitiveProgramming_Para'>Get recognized on course completion with highly reputed PrepBytes certificates</h6>
          </div>
          </div>

          <div>
          <div>
            <h6>20+ Live Coding Sessions</h6>
          </div>
          <div>
            <h6 className='MasterCompetitiveProgramming_Para'>Code live and get mentorship with the top-rated coders of the country.</h6>
          </div>
          </div>

          <div>
          <div>
            <h6>40+ Coding quizes</h6>
          </div>
          <div>
            <h6 className='MasterCompetitiveProgramming_Para'>Small quizzes after every topic to give you a quick check on your understandings</h6>
          </div>
          </div>
        </div>




      </div>


      <div className='MainCount'>

      <div>
        <div className='MainCount_Count'>100K+</div>
        <div>Students Enrolled</div>
      </div>

      <div>
      <div className='MainCount_Count'>1000K+</div>
      <div>Doubts Solved</div>
      </div>

      <div>
      <div className='MainCount_Count'>2k+ hrs</div>
      <div>Mentor Interaction</div>
      </div>


      </div>

      <div>
        <h4>Crack Reputed Coding Contests</h4>
        <img className='MaterCodingImage' src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/MCPWebp/MCP-company-new.webp' alt=''></img>
      </div>


      <div className='SelectBatch'>
      {/* <hr></hr> */}
        <div className='Select_Batch_Div'>SELECT BATCH</div>

        <div className='Select_Batch_Second_Div'>
          <div className='Select_Batch_Second'>1st December <br></br> <span className='Span_Div'>Enrolment start</span></div>
          <div className='Select_Batch_Second'>15th December <br></br> <span className='Span_Div'>Enrolment start</span></div>
        </div>


        <div>

        {mockData.map((item, ind) => (
                  <TestCardMaster
                  
                   no={item.no} 
                  image={item.image}
                  title={item.title}
                  price={item.price}
                  />
                ))}
        {/* ₹25000 <br></br> <br></br> <span className='Select_Batch_Second_Button'>Enroll Now</span> */}
        </div>
      </div>


      </div>
    </Layout>
  )
}

export default MCProgram
