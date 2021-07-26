import './header.css';
import TopBar from '../topbar/TopBar';
import { useState } from 'react';

export default function Header() {
    const [showTopBar, setShowTopBar] = useState(false);

   
    return (
        <>
        
     
        <div className='header'>
          
            <div className='headerTitles'>
                <span className='headerTitleSm'>React & Node</span>
                <span className='headerTitleLg'>Blog</span>
            </div>
            <img className='headerImg' src={process.env.PUBLIC_URL + '/img/headerimg.jpg'} alt="" />
        </div>
        </>
    )
}
