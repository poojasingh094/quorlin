import React from 'react'
import YogaImage from './Yoga.jpg';
import BussiImage from './Bussi.jpg';
import scieImage from './scie.jpg';
import histImage from './hist.jpg';
import psyImage from './psy.jpg';
import techImage from './tech.jpg';
import musiImage from './musi.jpg';
import educateImage from './educate.jpg';
import moveIm from './move.jpg';
import './css/SidebarOptions.css'
function SidebarOptions() {
  return (
    <div className='sidebarOptions'>
        <div className = 'sidebarOption'>
            <img src={histImage} alt=""/>
            <p>History</p>
        </div>
        <div className = "sidebarOption">
            <img src={BussiImage} alt=""/>
            <p>Business</p>
        </div>
        <div className = "sidebarOption">
            <img src={scieImage} alt=""/>
            <p>Science</p>
        </div>
        <div className = "sidebarOption">
        <img src={YogaImage} alt=""/>
            <p>Health</p>
        </div>
        <div className = "sidebarOption">
            <img src={psyImage} alt=""/>
            <p>Psychology</p>
        </div>
        <div className = "sidebarOption">
            <img src={techImage} alt=""/>
            <p>Technology</p>
        </div>
        <div className = "sidebarOption">
            <img src={musiImage} alt=""/>
            <p>Music</p>
        </div>
        <div className = "sidebarOption">
            <img src={educateImage} alt=""/>
            <p>Education</p>
        </div>
        <div className = "sidebarOption">
            <img src={moveIm} alt=""/>
            <p>Movie</p>
        </div>
    </div>
  )
}

export default SidebarOptions