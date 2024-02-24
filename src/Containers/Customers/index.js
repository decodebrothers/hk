import React, { useRef, useState, useEffect } from 'react';
import './index.scss';
import { Link } from 'react-router-dom';
import SvgIcon from '../../Components/svg-icon/svg-icon';
import { Tour } from 'antd';

import logolight from '../../assets/images/logo-light.svg';
import dargImg from '../../assets/images/darg.gif';
import Menus from '../../Components/Menus';
import CrmChat from '../CrmChat';

const Customers = () => {
    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const ref3 = useRef(null);
    const ref4 = useRef(null);
    const ref5 = useRef(null);

    const [open, setOpen] = useState(true);

    const onClose = () => {
        localStorage.setItem("seenPopUp", true);
        setOpen(false);
      };
      
    useEffect(() => {
        let userreturn = localStorage.getItem("seenPopUp");
        setOpen(!userreturn);
    }, []);

    const steps = [
        {
            title: 'Upload File',
            description: 'Put your files here.',
            target: () => ref1.current,
        },
        {
            title: 'Theme Change',
            description: 'Change your theme as Light Or Dark.',
            target: () => ref2.current,
        },
        {
            title: 'Actions',
            description: 'Click to Edit Details here',
            target: () => ref3.current,
        },
        {
            title: 'Change Menu Position',
            description: 'Darg and Drop to change Menu Positions/',
            cover: (
                <>
                <img
                    alt="tour.png"
                    src={dargImg}
                />
                <button className="skip-btn" onClick={onClose}>
                    Skip
                </button></>
            ),
            target: () => ref4.current,
        },
        {
            title: 'Chat With Luxare AI',
            description: 'You can take some help if you need.',
            target: () => ref5.current,
        },
    ];

    

    return (
        <div className='main-wrapper'>
            <div className='dummychat-tour' ref={ref5}></div>
            <CrmChat />
            <Tour open={open} onClose={() => setOpen(false)} steps={steps} />
            <div className='dummylight-dark' ref={ref2}></div>
            <div className='leftbar'>
                <div className='logo'>
                    <img className='logo-light' src={logolight} alt='' />
                </div>
                <div ref={ref4}>
                    <Menus />
                </div>
            </div>
            <div className='right-wrapper'>
                <div className='main-title'>Customers List
                    <button ref={ref1} className='main-btn'>add Customer</button>
                </div>
                <table className='list-table'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Phone</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>001</td>
                            <td>Maynk</td>
                            <td>9865986598</td>
                            <td>Maynk@gmail.com</td>
                            <td>
                                <Link ref={ref3} to='/'><SvgIcon name='edit' viewbox="0 0 43 43" /></Link>
                            </td>
                        </tr>
                        <tr>
                            <td>001</td>
                            <td>Maynk</td>
                            <td>9865986598</td>
                            <td>Maynk@gmail.com</td>
                            <td>
                                <Link to='/'><SvgIcon name='edit' viewbox="0 0 43 43" /></Link>
                            </td>
                        </tr>
                        <tr>
                            <td>001</td>
                            <td>Maynk</td>
                            <td>9865986598</td>
                            <td>Maynk@gmail.com</td>
                            <td>
                                <Link to='/'><SvgIcon name='edit' viewbox="0 0 43 43" /></Link>
                            </td>
                        </tr>
                        <tr>
                            <td>001</td>
                            <td>Maynk</td>
                            <td>9865986598</td>
                            <td>Maynk@gmail.com</td>
                            <td>
                                <Link to='/'><SvgIcon name='edit' viewbox="0 0 43 43" /></Link>
                            </td>
                        </tr>
                        <tr>
                            <td>001</td>
                            <td>Maynk</td>
                            <td>9865986598</td>
                            <td>Maynk@gmail.com</td>
                            <td>
                                <Link to='/'><SvgIcon name='edit' viewbox="0 0 43 43" /></Link>
                            </td>
                        </tr>
                        <tr>
                            <td>001</td>
                            <td>Maynk</td>
                            <td>9865986598</td>
                            <td>Maynk@gmail.com</td>
                            <td>
                                <Link to='/'><SvgIcon name='edit' viewbox="0 0 43 43" /></Link>
                            </td>
                        </tr>
                        <tr>
                            <td>001</td>
                            <td>Maynk</td>
                            <td>9865986598</td>
                            <td>Maynk@gmail.com</td>
                            <td>
                                <Link to='/'><SvgIcon name='edit' viewbox="0 0 43 43" /></Link>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Customers;