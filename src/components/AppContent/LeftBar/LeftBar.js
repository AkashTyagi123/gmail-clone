import { Button } from '@material-ui/core'
import React from 'react'
import './LeftBar.css'
import InboxIcon from '@material-ui/icons/Inbox';
import StarIcon from '@material-ui/icons/Star';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import SendIcon from '@material-ui/icons/Send';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import KeyboardIcon from '@material-ui/icons/Keyboard';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import AddIcon from '@material-ui/icons/Add';

function LeftBar({displayForm}) {
    return (
        <div className="leftbar">
            <div className="leftbar__categories">
            <Button onClick={()=>displayForm(true)}variant="outlined"><img src="https://www.gstatic.com/images/icons/material/colored_icons/1x/create_32dp.png"/><p>Compose</p></Button>
                <div className="leftbar__category__list">
                <div className="leftbar__category">
                <InboxIcon/><p>Inbox</p>
               
            </div>

            <div className="leftbar__category">
                <StarIcon/><p>Starred</p>
            </div>

            <div className="leftbar__category">
            <QueryBuilderIcon /><p>Snoozed</p>
            </div>


            <div className="leftbar__category">
            <SendIcon /><p>Sent</p>
            </div>

            <div className="leftbar__category">
            <InsertDriveFileIcon/><p>Draft</p>
            </div>

            <div className="leftbar__category">
            <ArrowDropDownIcon /><p>More</p>
            </div>

                </div>

            </div>

           
            <div className="leftbar__meet">
            <p><strong>Meet</strong></p>
                <div className="leftbar__meetItem">
                    <VideoCallIcon/>
                    <p>Start a meeting</p>
                </div>

                <div className="leftbar__meetItem">
                    <KeyboardIcon/>
                    <p>Join a meeting</p>
                </div>
             </div>


            <div className="leftbar__hangout">
                <p><strong>Hangouts</strong></p>
                <div className="leftbar__hangoutUser">
                    <AccountCircleIcon/>
                    <p>Akash</p>
                    <ArrowDropDownIcon/>
                    <AddIcon/>
                </div>

                <div className="leftbar__hangoutSummary">
                    <p>No recent chats</p>
                    <a href="#">Start a new one</a>
                </div>
            </div>
            
        </div>
        

    )
}

export default LeftBar
