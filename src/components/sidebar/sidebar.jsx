import './sidebar.css'

export default function sidebar() {
    return (
        <div className='sidebar'>
            <div className='sidebarItem'>
                <span className='sidebarTitle'>ABOUT ME</span>
                <img src={process.env.PUBLIC_URL + '/img/sidebarimg.jpg'} alt="" />
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                    Error et repudiandae voluptas asperiores, aliquid veritatis 
                    odit sunt excepturi vitae quidem, quod.</p>
            </div>

            <div className='sidebarItem'>
                <span className='sidebarTitle'>CATEGORIES</span>
                <ul className='sidebarList'>
                    <li className='sidebarListItem'>Life</li>
                    <li className='sidebarListItem'>Music</li>
                    <li className='sidebarListItem'>Style</li>
                    <li className='sidebarListItem'>Sport</li>
                    <li className='sidebarListItem'>Tech</li>
                    <li className='sidebarListItem'>Cinema</li>
                </ul>
            </div>

            <div className='sidebarItem'>
                <span className='sidebarTitle'>FOLLOW US</span>
                <div className='sidebarSocial'>
                    <i className="sidebaricon fab fa-facebook-square"></i>
                    <i className="sidebaricon fab fa-twitter-square"></i>
                    <i className="sidebaricon fab fa-pinterest-square"></i>
                    <i className="sidebaricon fab fa-instagram-square"></i>
                </div>
            </div>

        </div>
    )
}
