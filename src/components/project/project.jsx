import React from 'react'
import './project.css'
import banking from '../../assets/banking.svg'
import bus from "../../assets/bus booking.svg"
import electric from '../../assets/electricity bill.svg'
import atm from '../../assets/atm.svg'
import translate from '../../assets/translate.svg'
import face from '../../assets/face.svg'
import hub from '../../assets/hub.svg'

const project = () => {
  return (
      
        
    <div id='Project' className='pro'>
      <h1>PROJECTS</h1>
      
      <div className="card-container">
        <div className="card">
            <img src={banking} className="banking" />
            <img src={hub} className="hub"/>
        </div>
        
        <div className="card">
            <img src={bus} className="bus" />
            <img src={hub} className="hub"/>
        </div>
        <div className="card">
            <img src={electric} className="bill" />
            <img src={hub} className="hub"/> 
        </div>
        <div className="card">
            <img src={face} className="bus" />
            <img src={hub} className="hub"/>
        </div>
        <div className="card">
            <img src={atm} className="bus" />
            <img src={hub} className="hub"/>
        
        </div>
        <div className="card">
            <img src={translate} className="bus" />
            <img src={hub} className="hub"/>
        </div>
        
        
  </div>
  </div>
      
      
  )
}

export default project