import React from 'react'
import './Rightbar.css';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
function Rightbar() {
    return (
        <div className="rightbar">
            <img src="https://www.gstatic.com/companion/icon_assets/calendar_2x.png"/>
           <img src="https://www.gstatic.com/companion/icon_assets/keep_2x.png"/>
         <img src="https://www.gstatic.com/companion/icon_assets/tasks2_2x.png"/>
        <RemoveIcon/>
        <AddIcon/>
        
        </div>
    )
}

export default Rightbar
