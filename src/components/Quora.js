import React from 'react'
import QuoraHeader from './QuoraHeader';
import './css/Quora.css';
import Sidebar from './Sidebar.js';
import Feed from './Feed.js';
import Widget from './Widget.js';
function Quora() {
  return (
    <div className='quora'>
        <QuoraHeader/>
        <div className='quora-contents'>
          <div className='quora-content'>
            <Sidebar/>
            <Feed/>
            <Widget/>
          </div>
        </div>
    </div>
  )
}
export default Quora