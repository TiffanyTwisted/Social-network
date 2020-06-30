import React from 'react';
import Avatar from './../Icons/Avatar';
import Like from './../Icons/Like';
import './../../css/Post.css';


const newPost =(props)=>{
    return(
       <div className="new-post">
        <Avatar/>
        <div className = 'quote'>
        {props.message}
        </div>
        <Like number={props.like}/>
       </div>
    );
}
export default newPost;