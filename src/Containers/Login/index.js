import React from 'react';
import Lottie from 'react-lottie';
import { Input } from 'antd';
import { Link } from 'react-router-dom';
import './index.scss';

import animationData from '../../assets/images/animation.json';
import Logo from '../../assets/images/logo.svg';
import lightLogo from '../../assets/images/logo-light.svg';

const Login = () => {
    const loginAnimation = {
        loop: true,
        autoplay: true, 
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };
    return (
        <div className='login-wrapper'>
            <div className='login-left'>
                <div className='login-left-inner'>
                    <div className='logo'>
                        <img className='dark-logo' src={Logo} alt='' />
                        <img className='light-logo' src={lightLogo} alt='' />
                    </div>
                    <h2>LOG IN</h2>
                    <div>
                        <Input type='text' />
                        <Input type='password' />
                        <div>
                            <Link to='/customers'><button className='main-btn'>Login</button></Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className='login-right'>
                <div className='right-header'>
                    <h2>LUXARE CRM</h2>
                    <p>Log in to your LUXARE CRM solution</p>
                </div>
                <Lottie options={loginAnimation}
                    height={400}
                    width={400}
                    />
            </div>
        </div>
    )
}

export default Login;