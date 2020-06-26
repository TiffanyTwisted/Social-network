import React from 'react';
import Cat from './Cat';
import './../../css/App_profile.css';


const Profile =()=>{
    return(
        <div className="profile-photo">
        <Cat/>
        <input type= "button" className="edit" value="Edit"></input>
       </div>
    );
}
export default Profile;