
function ProfilePicture(){
const imageUrl = './src/assets/myImage.jpg';
const handleClick = (e) => e.target.style.display = "none";
return( <img src = {imageUrl} onClick={(e) => handleClick(e)}></img>)
}

export default ProfilePicture