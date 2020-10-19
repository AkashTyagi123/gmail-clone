import React from 'react';
import FormMenu from './FormMenu/FormMenu';
import './SendingForm.css';
import CloseIcon from '@material-ui/icons/Close';
import RemoveIcon from '@material-ui/icons/Remove';
import FormattingMenu from './FormattingMenu/FormattingMenu';
function SendingForm({setShowForm}) {
    return (
        <div className="sendingForm">
            <div className="sendingForm__title">
                <h5>New Message</h5>
                <div className="sendingForm__controls">
                <RemoveIcon/> 
                <CloseIcon onClick={()=>setShowForm(false)}/>
                  
            </div>
            </div>
           
            <div className="sendingForm__form">
                <input placeholder="Recipient" type="text"/>
                <input placeholder="Subject" type="text" />
                <textarea rows={20}></textarea>
                <FormattingMenu/>
                <FormMenu/>
            </div>
        </div>
    )
}

export default SendingForm
