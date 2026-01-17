import PropTypes from "prop-types"

function UserGreeting(props){

    if(props.isLoggedIn){
        return <h2 className="welcome-message">Welcome {props.username}</h2>
    }
    else{
        return <h2 className="login-prompt">PLease login to continue</h2>
    }
}
UserGreeting.propTypes ={
    isLoggedIn: PropTypes.bool,
    name: PropTypes.string,
}

UserGreeting.defaultProps = {
    name: "Guest",
    isLoggedIn: true,
}
export default UserGreeting