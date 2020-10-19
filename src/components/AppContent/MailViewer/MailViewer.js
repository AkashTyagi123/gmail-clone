import React, { useState } from 'react';
import './MailViewer.css';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import RefreshIcon from '@material-ui/icons/Refresh';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import KeyboardIcon from '@material-ui/icons/Keyboard';
import PeopleIcon from '@material-ui/icons/People';
import WebAssetIcon from '@material-ui/icons/WebAsset';
import LoyaltyIcon from '@material-ui/icons/Loyalty';
import Mail from './Mail/Mail';
import Data from '../../../DummyData/data';
import { TabRounded } from '@material-ui/icons';
import { Badge } from '@material-ui/core';
function MailViewer() {
    const primary = Data.primary;
    const [mails,setMails]=useState(primary);
    const social = Data.social;
    const promotion = Data.promotion;

    const [activePrimary,setPrimary]=useState(true);
    const [activeSocial,setSocial]=useState(false);
    const [activePromotion,setPromotion]=useState(false);

    let primaryClass= activePrimary?"primary--active":"";
    let socialClass=activeSocial?"social--active":"";
    let promoClass = activePromotion?"promotion--active":"";


    
   
    
    return (
        <div className="mailViewer">
            <div className="mailViewer__header">
                <div className="mailViewer__headerLeftIcons">
                    <CheckBoxOutlineBlankIcon/>
                    <ArrowDropDownIcon/>
                    <RefreshIcon/>
                    <MoreVertIcon/>
                </div>

                <div className="mailViewer__headerRightIcons">
                    <p>1-50 of 2,445</p>
                    <ArrowLeftIcon/>
                    <ArrowRightIcon/>
                    <KeyboardIcon/>
                    <ArrowDropDownIcon/>
                </div>


            </div>


            <div className="mailViewer__navigation">
                <div onClick={()=>{
                  setMails(primary);
                  setPrimary(true);
                  setPromotion(false);
                  setSocial(false);

                }} className={`mailViewer__navigationItem ${primaryClass}`}>
                    <WebAssetIcon/>
                    <p>Primary</p>
                </div>

                <div onClick={()=>{
                    setMails(social);
                    setPrimary(false);
                    setPromotion(false);
                    setSocial(true);
                        
                }} className={`mailViewer__navigationItem ${socialClass}`}>
                    
                    <PeopleIcon/>
                    <p>Social</p>
                   
                </div>

                <div onClick={()=>{
                    setMails(promotion);
                    setPrimary(false);
                    setPromotion(TabRounded);
                    setSocial(false);
                }} className={`mailViewer__navigationItem ${promoClass}`}>
                    <LoyaltyIcon/>
                    <p>Promotion</p>
                </div>
            </div>

            
            <div className="mailViewer__mails">
                {mails.map(m=><Mail
                    sender={m.sender_name}
                    subject={m.subject}
                    time={m.time}
                    key={m.id}
                    isRead={m.is_read}
            
                />)}
            </div>

            
        </div>
    )
}

export default MailViewer
