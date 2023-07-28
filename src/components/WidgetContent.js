import React from 'react'
import "./css/WidgetContent.css"
import mobImage from './mob.jpg';
function WidgetContent() {
  return (
    <div className="widget-contents">
        <div className="widget-content">
            <img src={mobImage} alt=""/>
            <div className="widget-contentTitle">
             <h5>
                Mobile App Programmer
             </h5>
             <p> The best Mobile App Development Company</p>
            </div>
        </div>
    </div>
  )
}

export default WidgetContent