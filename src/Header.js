import React, { Component } from 'react';
import Avatar from '@material-ui/core/Avatar';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import SearchIcon from '@material-ui/icons/Search';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import "./header.css"
import { useStatevalue } from './StateProvider';

const Header = () => {
    const [{user}] = useStatevalue()
    return ( 
        <div className="header" >
            <div className="header__left" >
                {/* Avatar */}
                <Avatar alt={user?.displayName} src={user?.photoURL} />
                {/* Time */}
                <AccessTimeIcon/>
            </div>

            <div className="header__search" >
                {/* Search icon */}
                <SearchIcon/>
                {/* Input */}
                <input placeholder="Write here" />
            </div>

            <div className="header__right" >
                {/* Help */}
                <HelpOutlineIcon/>
            </div>
            
        </div>
     );
}
 
export default Header;