import React from 'react'
import Layout from '../Layout'
import './HomePage.css'

const HomePage = () => {
  return (
    <Layout>
      {/* text+image */}
      <div className='textImage'>

        <div>
          <div>
            <h1> <span className='spanelement'> Start your journey of success </span> <br></br>
              Personalised Coding Programs to <br></br> make coding easier for you</h1>
          </div>
          <div>
            <h5 className='spanelement'>Want to know how PrepBytes can help you?</h5>
          </div>
          <div>
            <button className='knowmorebtn'>Know More</button>
          </div>
        </div>

        <div>
         
            <img className='imageprepbytes' src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/Masterhead(web).svg' alt=''></img>
          
        </div>

      </div>

      {/* tags */}
      <div className='Home_Image'>
        <div><img className='homeImagediv' src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/Google-launchpad.webp' alt=''></img></div>
        <div><img className='homeImagediv' src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/future-skills-homepage.webp' alt=''></img></div>
        <div><img className='homeImagediv' src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/she-leads.webp' alt=''></img></div>
        <div><img className='homeImagediv' src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/aws-ed-start.webp' alt=''></img></div>
      </div>


      {/* text+image */}
      <div className='SecondMainDiv'>
        <div>
          <img className='FirstImageSeconddiv' src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/stairs_of_approach(web).svg' alt=''></img>
        </div>
        
        <div>
          <h1>How PrepBytes Mentorship driven Personalised Learning works?</h1>
          <div className='first_div_box'>

            <div className='firstdivborder'>
            <div>
              <h5 className='firstheading'>PERSONALISED LECTURES & WEEKLY PLAN</h5>
            </div>
            <div className='firstheadingdiv'>
              <h6>Get learning videos & weekly plan based on your coding skills</h6>
            </div>
            </div>
            <div>
              <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNDEuMTkiIGhlaWdodD0iODUuOTUzIiB2aWV3Qm94PSIwIDAgMTQxLjE5IDg1Ljk1MyI+CiAgPGcgaWQ9Ikdyb3VwXzQ5MjEiIGRhdGEtbmFtZT0iR3JvdXAgNDkyMSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4xOSAxLjAxNSkiPgogICAgPHBhdGggaWQ9IlBhdGhfNTE1MyIgZGF0YS1uYW1lPSJQYXRoIDUxNTMiIGQ9Ik02NjgsNDc3MS4xNTRzMTM5LjE4OS0yNywxMzIuNjQ0LDc1IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNjY3Ljk5OSAtNDc2Ny45MTkpIiBmaWxsPSJub25lIiBzdHJva2U9IiM3MDcwNzAiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWRhc2hhcnJheT0iNCIvPgogICAgPHBhdGggaWQ9Ikljb25faW9uaWMtaW9zLWFycm93LWJhY2siIGRhdGEtbmFtZT0iSWNvbiBpb25pYy1pb3MtYXJyb3ctYmFjayIgZD0iTTIuOTUsOC41NTgsOS40MjgsMi4wODVBMS4yMjMsMS4yMjMsMCwwLDAsNy43LjM1N0wuMzU2LDcuNjkxQTEuMjIxLDEuMjIxLDAsMCwwLC4zMjEsOS4zNzhMNy42OSwxNi43NjNhMS4yMjMsMS4yMjMsMCwwLDAsMS43MzMtMS43MjhaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMjMuODggODQuOTM4KSByb3RhdGUoLTkwKSIgZmlsbD0iIzQyNDI0MiIvPgogIDwvZz4KPC9zdmc+Cg=="   alt=''></img>
            </div>

          </div>

          <div className='first_div_box'>

          <div>
              <img src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNDEuMTkiIGhlaWdodD0iODUuOTUzIiB2aWV3Qm94PSIwIDAgMTQxLjE5IDg1Ljk1MyI+CiAgPGcgaWQ9Ikdyb3VwXzQ5MjIiIGRhdGEtbmFtZT0iR3JvdXAgNDkyMiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCA1LjE1NykiPgogICAgPHBhdGggaWQ9IlBhdGhfNTE1MyIgZGF0YS1uYW1lPSJQYXRoIDUxNTMiIGQ9Ik04MDAuODY2LDQ3NzEuMTU0cy0xMzkuMTg5LTI3LTEzMi42NDQsNzUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC02NTkuODY2IC00NzcyLjA2MSkiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzcwNzA3MCIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtZGFzaGFycmF5PSI0Ii8+CiAgICA8cGF0aCBpZD0iSWNvbl9pb25pYy1pb3MtYXJyb3ctYmFjayIgZGF0YS1uYW1lPSJJY29uIGlvbmljLWlvcy1hcnJvdy1iYWNrIiBkPSJNMi45NSw4LjU2Mmw2LjQ3OCw2LjQ3MkExLjIyMywxLjIyMywwLDAsMSw3LjcsMTYuNzYyTC4zNTYsOS40MjhBMS4yMjEsMS4yMjEsMCwwLDEsLjMyMSw3Ljc0MUw3LjY5LjM1N0ExLjIyMywxLjIyMywwLDAsMSw5LjQyMywyLjA4NFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgODAuNzk2KSByb3RhdGUoLTkwKSIgZmlsbD0iIzQyNDI0MiIvPgogIDwvZz4KPC9zdmc+Cg==' alt=''></img>
            </div>


          <div className='firstdivbordersecond' >

            <div >
              <h5 className='HeadigTwo'>PERSONALISED CODING ASSIGNMENTS</h5>
            </div>

            <div >
              <h6 className='HeadingtwoDiv'>Practice coding questions that adapts based on your progress</h6>
            </div>

            </div>


           
          </div>

          <div className='first_div_box'>

          <div className='firstdivborder'>
            <div>
              <h5 className='HeadingThree'>DOUBT SOLVING BY CODING EXPERTS</h5>
            </div>
            <div>
              <h6 className='headingthreediv'>Getting Stuck While Coding? Get all your doubts resolved.</h6>
            </div>
            </div>
            <div>
              <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNDEuMTkiIGhlaWdodD0iODUuOTUzIiB2aWV3Qm94PSIwIDAgMTQxLjE5IDg1Ljk1MyI+CiAgPGcgaWQ9Ikdyb3VwXzQ5MjEiIGRhdGEtbmFtZT0iR3JvdXAgNDkyMSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4xOSAxLjAxNSkiPgogICAgPHBhdGggaWQ9IlBhdGhfNTE1MyIgZGF0YS1uYW1lPSJQYXRoIDUxNTMiIGQ9Ik02NjgsNDc3MS4xNTRzMTM5LjE4OS0yNywxMzIuNjQ0LDc1IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNjY3Ljk5OSAtNDc2Ny45MTkpIiBmaWxsPSJub25lIiBzdHJva2U9IiM3MDcwNzAiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWRhc2hhcnJheT0iNCIvPgogICAgPHBhdGggaWQ9Ikljb25faW9uaWMtaW9zLWFycm93LWJhY2siIGRhdGEtbmFtZT0iSWNvbiBpb25pYy1pb3MtYXJyb3ctYmFjayIgZD0iTTIuOTUsOC41NTgsOS40MjgsMi4wODVBMS4yMjMsMS4yMjMsMCwwLDAsNy43LjM1N0wuMzU2LDcuNjkxQTEuMjIxLDEuMjIxLDAsMCwwLC4zMjEsOS4zNzhMNy42OSwxNi43NjNhMS4yMjMsMS4yMjMsMCwwLDAsMS43MzMtMS43MjhaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMjMuODggODQuOTM4KSByb3RhdGUoLTkwKSIgZmlsbD0iIzQyNDI0MiIvPgogIDwvZz4KPC9zdmc+Cg=="   alt='' ></img>
            </div>

          </div>

          <div className='first_div_box'>

          <div>
              <img src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNDEuMTkiIGhlaWdodD0iODUuOTUzIiB2aWV3Qm94PSIwIDAgMTQxLjE5IDg1Ljk1MyI+CiAgPGcgaWQ9Ikdyb3VwXzQ5MjIiIGRhdGEtbmFtZT0iR3JvdXAgNDkyMiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCA1LjE1NykiPgogICAgPHBhdGggaWQ9IlBhdGhfNTE1MyIgZGF0YS1uYW1lPSJQYXRoIDUxNTMiIGQ9Ik04MDAuODY2LDQ3NzEuMTU0cy0xMzkuMTg5LTI3LTEzMi42NDQsNzUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC02NTkuODY2IC00NzcyLjA2MSkiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzcwNzA3MCIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtZGFzaGFycmF5PSI0Ii8+CiAgICA8cGF0aCBpZD0iSWNvbl9pb25pYy1pb3MtYXJyb3ctYmFjayIgZGF0YS1uYW1lPSJJY29uIGlvbmljLWlvcy1hcnJvdy1iYWNrIiBkPSJNMi45NSw4LjU2Mmw2LjQ3OCw2LjQ3MkExLjIyMywxLjIyMywwLDAsMSw3LjcsMTYuNzYyTC4zNTYsOS40MjhBMS4yMjEsMS4yMjEsMCwwLDEsLjMyMSw3Ljc0MUw3LjY5LjM1N0ExLjIyMywxLjIyMywwLDAsMSw5LjQyMywyLjA4NFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgODAuNzk2KSByb3RhdGUoLTkwKSIgZmlsbD0iIzQyNDI0MiIvPgogIDwvZz4KPC9zdmc+Cg==' alt=''></img>
            </div>

          <div  className='firstdivborder'>
            <div>
              <h5 className='HeadingFour'>CODE LIVE WITH TOP CODERS</h5>
            </div>
            <div>
              <h6 className='HeadingFourDiv' >Topic wise Live Coding sessions with top rated coders</h6>
            </div>
            </div>
           

          </div>

          <div>
            <img className='DivIMAGEDiv' src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/achieve_your_coding_dream.svg' alt=''></img>
          </div>

        </div>
      </div>


      {/* text+image */}
      <div className='DivMainFive'>
        <div>
          <h2 className='HeadingWant'>I WANT TO</h2>
        </div>
        <div className='ArticelBoxs'>

          <div className='Box_Div_section'>
            <img className='Box_Image'  src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/prepare_for_campus.webp' alt=''></img>
            <h4 className='Box_Heading_One'>PREPARE FOR CAMPUS PLACEMENT</h4>
          </div>

          <div className='Box_Div_section'>
            <img className='Box_Image' src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/master_competetive_pgm.webp' alt=''></img>
            <h4  className='Box_Heading_Two'>MASTER COMPETATIVE PROGRAMMIG</h4>
          </div>

          <div className='Box_Div_section'>
            <img className='Box_Image' src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/learn_full_stack.webp' alt=''></img>
            <h4  className='Box_Heading_One'>BUILD DEVELOPMENT PROJECTS</h4>
          </div>

        </div>
      </div>



    </Layout>
  )
}

export default HomePage


