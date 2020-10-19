import React from 'react'
import './AppContent.css'
import LeftBar from './LeftBar/LeftBar'
import MailViewer from './MailViewer/MailViewer'
import Rightbar from './Rightbar/Rightbar'
function AppContent({setShowForm}) {
    return (
        <div className="appContent">
            <div className="appContent__sidebar">
                
                <LeftBar displayForm={setShowForm}/>
            </div> 

            <div className="appContent__mails">
                <MailViewer/>
            </div> 

            <div className="appContent__rightbar">
                <Rightbar/>
            </div> 
        </div>
    )
}

export default AppContent
