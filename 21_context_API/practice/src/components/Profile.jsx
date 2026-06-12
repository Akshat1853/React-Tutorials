import {useContext} from 'react'
import UserContext from '../context/UserContext'

const Profile = () => {

    // data us krne ke liye bs hume btana hoga ki konse provider se data use kr rhe hai 
    // kyuki bahot sare provider ho skte hai agar bahot sare context ho alag alag,
    // to use context me apne provider ka name dalo bs aur data use krlo
    const {user} = useContext(UserContext);

    if(!user){
        return <div>Please Login</div>
    }

    return <div>Welcome {user.username}</div>
}

export default Profile
