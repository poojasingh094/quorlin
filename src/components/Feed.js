import React from 'react'
import QBox from './QBox'
import"./css/feed.css";
import Post from './Post';
function Feed() {
  return (
    <div className ='feed'>
     <QBox/>   
     <Post/>
     <Post/>
     <Post/>
     <Post/>
     <Post/>
     <Post/>
    </div>
  )
}

export default Feed