import React from 'react'
import './Hero.css'
import porfile_img from '../../assets/my img.jpg'
import link from '../../assets/linkedinc.svg'
import github from '../../assets/githubc.svg'
import instagram from '../../assets/instagramc.svg'
import gmail from '../../assets/gmailc.svg'
import {useTypewriter, Cursor} from 'react-simple-typewriter'

const Hero = () =>  {
  const [typeEffect]=useTypewriter({
      words:[' a Backend Devoloper', ' in java' , ' And good in database' ],
      loop:{},
      typeSpeed: 80,
      deletespeed:40,
  
    })
   
  return (

    <div id='home' className='hero'>
       <p id='type'>Iam{typeEffect}
      
       </p>
      
      <img src={porfile_img} alt="" />
      
        <h1><span>I'm Abisheik ,</span> Backend Devoloper based in Java and springboot at API </h1>
       
       <div className="hero-action">
       <div className='hero-connect'><a href="#connect">Connect with me </a></div>
       <div className='hero-resume'>My resume </div>
    
       </div>
       <div className='soical'>
          <a href=""><img src={link} id="me" /></a>
          <a href=""><img src={github} id="me" /></a>
          <a href=""><img src={gmail} id="me" /></a>
          <a href=""><img src={instagram} id="me" /></a>
           
        </div>
       </div>
    
  )
}

export default Hero;