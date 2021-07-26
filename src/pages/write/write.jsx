import './write.css'

export default function write() {
    return (
        <div className='write'>
           <form className='writeForm'>
              <img 
               className='writeImg'
               src={process.env.PUBLIC_URL + '/img/writeimg.jpg'} 
               alt="" />
              
                <div className="writeFormGroup">
                    <label htmlFor="fileInput">
                    <i className="writeIcon fas fa-plus"></i>
                    </label>
                    <input type="file" className='fileUpload' id='fileInput'  />
                    <input type="text" placeholder='Title' className='writeInput' autoFocus={true} />
                </div>
                    <div className="writeFormGroup">
                        <textarea placeholder='Tell your story...' 
                        type='text' 
                        className='writeInput writetext'></textarea>
                    </div>
                <button className="writeSubmit">Publish</button>
           </form>
            
        </div>
    )
}
