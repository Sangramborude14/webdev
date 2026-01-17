import profilePic from './assets/myImage.jpg'

function Card(){
    return(<div className="card">
        <img src={profilePic} className='card-image'></img>
        <h2 className='card-title'>Sangram</h2>
        <p className='card-text'>I am Sangram  i am making pizza tonight and I sleep all day.</p>
    </div>);
}

export default Card