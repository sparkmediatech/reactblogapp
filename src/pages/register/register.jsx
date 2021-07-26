import './register.css';
import { Link } from 'react-router-dom';

export default function register() {
    return (
        <div className='register'>
            <div className="loginContainer">
                <span className="loginTitle">Register</span>
                <form className="registerform">
                    <label>Username</label>
                    <input className='registerInput' type="text" placeholder='Enter your username' />

                    <label>Email</label>
                    <input className='registerInput' type="email" placeholder='Enter your email' />

                    <label>Passowrd</label>
                    <input className='registerInput' type="password" placeholder='Enter your password' />

                    <button className="registerButton">Register</button>
                </form>
                <button className="registerLoginButton">
                <Link className='link' to='/login'>Login</Link>
                
                </button>
            </div>    
        </div>
    )
}
