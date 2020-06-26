import React from 'react';
import Avatar from './../Icons/Avatar';
import './../../css/Post.css';


const newPost =()=>{
    return(
       <div className="new-post">
        <Avatar/>
        <div className = 'quote'>
        To live is to risk it all, otherwise you're just an inert chunk of randomly assembled molecules drifting wherever the universe blows you
        </div>
        <div>

        </div>
       </div>
    );
}
export default newPost;