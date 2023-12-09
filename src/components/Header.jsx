import React from "react";
import '../styles/Header.css';
import PersonIcon from '@mui/icons-material/Person';
import IconButton from '@mui/material/IconButton';
import ForumIcon from '@mui/icons-material/Forum';
import Logo192 from '../assets/logo192.png';

const Header = () => {
    return(<div className="header">
        <IconButton>
            <PersonIcon fontSize="large" className="header__icon"/>
        </IconButton>
        <img className="header__logo" src={Logo192} alt="header"/>
        <IconButton>
            <ForumIcon fontSize="large" className="header__icon"/>
        </IconButton>
    </div>)
};

export default Header;








