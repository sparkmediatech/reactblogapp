import './settings.css';
import Sidebar from '../../components/sidebar/sidebar'

export default function settings() {
    return (
        <div className='settings'>
            <div className="settingsWrapper">
                <div className="settingsTitle">
                    <span className='settingsUpdateTitle'>Update Your Account</span>
                    <span className='settingsUpdateDelete'>Delete Your Account</span>
                </div>

                <form className="settingsform">
                    <label>Profile Picture</label>

                    <div className="settingsProfilePic">
                        <img src={process.env.PUBLIC_URL + '/profile.jpeg'} 
                        alt="" />

                        <label htmlFor="fileInput">
                            <i className="settingsProfilePicicon far fa-user-circle"></i>
                        </label>
                        <input className='fileUpload2' type="file" id="fileInput" />
                    </div>
                    <label>Username</label>
                    <input type="text" placeholder='Kingsley' />
                    <label>Email</label>
                    <input type="email" placeholder='kingsley@gmail.com' />
                    <label>Password</label>
                    <input type="password"/>
                    <button className="settingsSubmit">Update</button>
                </form>
            </div>
                
            <Sidebar/>
        </div>
    )
}
