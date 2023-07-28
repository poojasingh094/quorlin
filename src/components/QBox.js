import { Avatar } from '@material-ui/core'
import React from 'react'
import "./css/QBox.css";
function QBox() {
  return (
    <div className="qBox">
<div className="qBox-info">
<Avatar/>
</div>
<div className="qBox-q">
    <h5> What do you want to ask or share?</h5>
    </div>
  </div>
  );
}

export default QBox;