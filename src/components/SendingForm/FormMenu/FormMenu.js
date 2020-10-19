import { Button } from '@material-ui/core'
import React from 'react'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import FormatColorTextIcon from '@material-ui/icons/FormatColorText';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import AttachmentIcon from '@material-ui/icons/Attachment';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import ImageIcon from '@material-ui/icons/Image';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import './FormMenu.css';
function FormMenu() {
    return (
        <div className="formMenu">
           <div className="formMenu__button">
           <button>Send</button>
           
           </div>
           
           <div className="formMenu__middle">
           <FormatColorTextIcon/>
           <AttachFileIcon/>
            <AttachmentIcon/>
            <EmojiEmotionsIcon/>
            <ImageIcon/>
           </div>

           <div className="formMenu__right">
                <MoreVertIcon/>
                <DeleteIcon/>
           </div>


        </div>
    )
}

export default FormMenu
