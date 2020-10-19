import React from 'react'
import './Mail.css';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import DeleteIcon from '@material-ui/icons/Delete';
import GetAppIcon from '@material-ui/icons/GetApp';
import DraftsIcon from '@material-ui/icons/Drafts';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
function Mail({sender,subject,time,isRead}) {
    let modifier="";
    if(isRead){
        modifier="--bold"
    }
    return (
        <div className={`mail mail${modifier}`}>
           <div className="mail__icons">
                <CheckBoxOutlineBlankIcon/>
                <StarBorderIcon/>
           </div>

           <div className="mail__content">
                <div className="mail__sender">
                        <p>{sender}</p>
                </div>
                <div className="mail__subject">
                   
                        <p>{subject}</p>
                </div>
           </div>


           <div className="mail__time">
              <p>{time}</p>
           </div>

           <div className="mail__hoverIcon">
                <GetAppIcon/>
                <DeleteIcon/>
                <DraftsIcon/>
                <QueryBuilderIcon/>
                
           </div>
            
        </div>
    )
}

export default Mail
