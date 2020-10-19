import React from 'react'
import './Header.css';
import MenuIcon from '@material-ui/icons/Menu';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import SettingsIcon from '@material-ui/icons/Settings';
import AppsIcon from '@material-ui/icons/Apps';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
function Header() {
    return (
        <div className="header">
            <div className="header__left">
                <MenuIcon/>
                <img src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x.png"/>
            </div>

            <div className="header__middle">
                <SearchIcon/>
                <input type="text" placeholder="Search mail"/>
                <ArrowDropDownIcon/>
            </div>

            <div className="header__right">
                <HelpOutlineIcon/>
                <SettingsIcon/>
                <AppsIcon/>
                <AccountCircleIcon/>
            </div>
        </div>
    )
}

export default Header
