import { useState } from 'react';
import { Link } from 'react-router-dom'
import './topbar.css';





export default function TopBar(){
    const [topMenuBar, setTopMenuBar] = useState(false);

     const handleMenuClickOpen = ()=>{
          setTopMenuBar(!topMenuBar)
            
    }
     
const handleMenuClickClose = ()=>{
    setTopMenuBar(false)

}
    const user = false;
    return(
        <>
       <i className="fas open fa-bars" onClick={handleMenuClickOpen}></i>
        <div className={`top ${topMenuBar ? 'top2slidein': 'top2slideOut'}`}>
             <i className="fas close fa-times" onClick={handleMenuClickClose}></i>
             
             
           <div className='topLeft'>
           <i className="topicon fab fa-facebook-square"></i>
           <i className="topicon fab fa-twitter-square"></i>
           <i className="topicon fab fa-pinterest-square"></i>
           <i className="topicon fab fa-instagram-square"></i>

           </div>
           <div className='topCenter'>
                <ul className='topList'>
                    <li className='topListItem'>
                        <Link className='link' to='/'>Home</Link>
                    </li>
                    
                    <li className='topListItem'>
                    <   Link className='link' to='/about'>ABOUT</Link>
                    </li>

                    <li className='topListItem'>
                        <Link className='link' to='/'>CONTACT</Link>
                    </li>
                    <li className='topListItem'>
                        <Link className='link' to='/write'>WRITE</Link>
                    </li>
                    <li className='topListItem'>
                        {user && 'LOGOUT'}
                    </li>
                </ul>

           </div>
           <div className='topRight'>
               {
               user ? (
                <img className='topimg' 
                src= {process.env.PUBLIC_URL + '/profile.jpeg'} alt="" 
                />
               ) : (
                   <ul className='topList'>
                        <li className='topListItem'>
                            <Link className='link' to='/login'>
                                LOGIN
                            </Link>
                        </li> 

                        <li className='topListItem'> 
                            <Link className='link' to='/register'>
                                REGISTER
                            </Link>
                        </li>

                    </ul>
               )
               }
              
                <i  className={`${user && "topSearchIcon fas fa-search"}`}></i>

           </div>
        </div>
        </>
    )
}