import Header from '../../components/header/header';
import Posts from '../../components/posts/posts';
import Sidebar from '../../components/sidebar/sidebar';
import './home.css'
import "../responsive.css"

export default function home() {
    return (
       <>
            <Header/>
            <div className='home'>
                <Posts/>
                <Sidebar/>
            </div>
        </>
    )
}
