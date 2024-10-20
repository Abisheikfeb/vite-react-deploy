import React from 'react'
import './About.css'
import backend_img from '../../assets/backend.jpg'

const About = () => {
  return (
    <div id='about' className='about'>
        <div className="about-title">
            <h1>About me</h1>
            <img src="" alt="" />

        </div>
        <div className='about-sections'>
          <div className='about-left'>
            <img src={backend_img} alt="" className='backend' />
          </div>
          <div className='about-right'>
            <div className='about-para'>
              <p> Iam with a storng foundation in programming laguages database management,Iam adept at building APIs manging server logic </p>
              <p> I thrive in solving challenging problems and consistently high-quality code at enhances the overhall finctionality oh the software</p>

            </div>
            <div className='about-skills'>
              <div className="about-skill"><p>JAVA & C#</p><hr style={{width:"50%"}}/></div>
              <div className="about-skill"><p>PYTHON & JAVASCRIPT</p><hr style={{width:"70%"}}/></div>
              <div className="about-skill"><p>ORACAL & PHP</p><hr style={{width:"60%"}}/></div>
              <div className="about-skill"><p>REACTJS & NEXT.JS</p><hr style={{width:"50%"}}/></div>
              
            </div>
          </div>
          </div>


<div className="about-achievments">
  <div className="about-achi">
    <h1>5+</h1>
    <p>PROGRAMMING LANGUAGES</p>
  </div>
  <hr />
  <div className="about-achi">
    <h1>30+</h1>
    <p>PROJECTS COMPLETED</p>
  </div>
  </div>
  </div>

  )

}

export default About