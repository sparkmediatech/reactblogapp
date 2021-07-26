import './singlePost.css';

export default function singlePost() {
    return (
        <div className='singlePost'>
           <div className="singlePostWrapper">
                <img className='singlePostImg' 
                src={process.env.PUBLIC_URL + '/img/singpostimg.jpg'} alt="" />

                <h1 className='singlePostTitle'>
                    Lorem ipsum dolor sit, amet consectetur.
                    <div className="singlePostEdit">
                        <i className="singlePostIcon fas fa-edit"></i>
                        <i className="singlePostIcon far fa-trash-alt"></i>
                    </div>
                </h1>
                <div className="singlePostInfo">
                    <span 
                        className='singlePostAuthor'>Author: <b>Kingsley</b>
                    </span>
                    <span 
                        className='singlePostDate'>1 hour ago
                    </span>
                </div>
                <p className='singlePostDesc'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur 
                    vitae illo officia provident temporibus eaque eos explicabo perspiciatis 
                    optio, esse pariatur aspernatur minus dolor accusantium, dolorem molestias 
                    at possimus atque dolorem molestias dolorem molestias .
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur 
                    vitae illo officia provident temporibus eaque eos explicabo perspiciatis 
                    optio, esse pariatur aspernatur minus dolor accusantium, dolorem molestias 
                    at possimus atque dolorem molestias dolorem molestias .
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur 
                    vitae illo officia provident temporibus eaque eos explicabo perspiciatis 
                    optio, esse pariatur aspernatur minus dolor accusantium, dolorem molestias 
                    at possimus atque dolorem molestias dolorem molestias .
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur 
                    vitae illo officia provident temporibus eaque eos explicabo perspiciatis 
                    optio, esse pariatur aspernatur minus dolor accusantium, dolorem molestias 
                    at possimus atque dolorem molestias dolorem molestias .
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur 
                    vitae illo officia provident temporibus eaque eos explicabo perspiciatis 
                    optio, esse pariatur aspernatur minus dolor accusantium, dolorem molestias 
                    at possimus atque dolorem molestias dolorem molestias .
                </p>
           </div>
        </div>
    )
}
