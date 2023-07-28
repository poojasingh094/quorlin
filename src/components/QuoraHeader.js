import React, { useState } from 'react'
import qnImage from './qn.jpg';
import HomeIcon from '@material-ui/icons/Home'
import { AssignmentTurnedInOutlined, ExpandMore, FeaturedPlayListOutlined, NotificationsOutlined, PeopleAltOutlined, Search } from '@material-ui/icons';
import { Avatar, Input } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import './css/Quorahead.css'
import Modal from 'react-responsive-modal';
import "react-responsive-modal/styles.css";
function QuoraHeader() {
  const [isModalOpen, setIsModalOpen]= useState(false);
  const[inputUrl, setInputUrl]=useState("")
  const Close = (<CloseIcon/>)
  return (
    <div className='qHead'>
        <div className='qHead-content'>
        <div className='qHead-logo'>
        <img src={qnImage} alt='logo'/>
        </div>
        <div className='qHead-icons'>
          <div className='qHead-icon'><HomeIcon/></div>
          <div className='qHead-icon'><FeaturedPlayListOutlined/></div>
          <div className='qHead-icon'><AssignmentTurnedInOutlined/></div>
          <div className='qHead-icon'><PeopleAltOutlined/></div>
          <div className='qHead-icon'><NotificationsOutlined/></div>
        </div>
        <div className='qHead-input'>
          <Search/>
          <input type="text" placeholder="Search questions"/>
          </div>
          <div className='qHead-Rem'>
            <Avatar/>
            </div>
          <button onClick={()=>setIsModalOpen(true)} className="post-BtnAnswer" >Add Question</button>
            
           <Modal
           open={isModalOpen} closeIcon={Close} onClose={()=> setIsModalOpen(false)}
           closeOnEsc
           center
           closeOnOverlayClick={false}
           styles={{
            overlay: {
              height:"auto",
            },
           }}
           >
           <div className="modal-title">
             <h5>Add Question</h5>
             <h5>Share Link</h5>
             </div>
              <div className= "modal-info">
                <Avatar className ="avatar"/>
                <div className="modal-scope">
                  <PeopleAltOutlined/>
                  <p>Public</p>
                  <ExpandMore/>
                </div>
              </div>
              <div className="modal-field">
                <Input type="text" placeholder="Start your question with 'What', 'How', 'Why', etc. "/>
              <div style={{
                display: "flex",
                flexDirection: "column"
              }}>
                <input type='text' 
                value={inputUrl}
                onChange={(e) =>setInputUrl(e.target.value)}
                style={{
                  margin: "5px 0",
                  border: "1px solid lightgray",
                  padding: "10px",
                  outline: "2px solid #000",
                }}
                placeholder="Optional: include a link that gives context"
                />
                {
                  inputUrl !==""&& <img style={{
                    height: "40vh",
                    objectFit: "contain",
                  }} src={inputUrl} alt= 'displayimage'/>
                }
                
              </div>
              </div>
              <div className='modal-buttons'>
              <button className = 'cancel' onClick = {()=>setIsModalOpen(false)}>
                  Cancel
                 </button>
                 <button type="submit" className = 'add'>
                  Add Question
                 </button>
                 
              </div>
             
                 
           </Modal>
           </div>
        </div>
      
  )
}

export default QuoraHeader;