import React from 'react';
import './index.scss';
import { NavLink } from 'react-router-dom';

import logolight from '../../assets/images/logo-light.svg';
import Menus from '../Menus';

const LeftBar = () => {
    return (
        <div className='leftbar'>
            <div className='logo'>
                <img className='logo-light' src={logolight} alt='' />
            </div>
            <Menus />
        </div>
    )
}

export default LeftBar;