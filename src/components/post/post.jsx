import './post.css'

export default function post() {
    return (
        <div className='post'>
            <img 
            className='postImg'
            src={process.env.PUBLIC_URL + '/img/postimg.jpg'} alt="" />

            <div className='postInfo'>
                <div className='postCats'>
                    <span className='postCat'>Music</span>
                    <span className='postCat'>Life</span>
                </div>

                <span className='postTitle'>Lorem ipsum dolor sit dora.</span>
                <hr />
                <span className='postDate'> 1 hour ago</span>
            </div>

            <p className='postDescription'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Atque fuga nulla numquam velit suscipit molestiae doloribus. 
                Repudiandae ratione temporibus atque nobis reiciendis ab itaque
                Repudiandae ratione temporibus atque nobis reiciendis ab itaque.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Atque fuga nulla numquam velit suscipit molestiae doloribus. 
                Repudiandae ratione temporibus atque nobis reiciendis ab itaque
                Repudiandae ratione temporibus atque nobis reiciendis ab itaque.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Atque fuga nulla numquam velit suscipit molestiae doloribus. 
                Repudiandae ratione temporibus atque nobis reiciendis ab itaque
                Repudiandae ratione temporibus atque nobis reiciendis ab itaque.
            </p>

        </div>
    )
}
