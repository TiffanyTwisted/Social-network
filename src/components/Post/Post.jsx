import React from 'react';
import './../../css/App_post.css';
import New_Post from './New_Post';

const Post =()=>{
    return(
        <div className="post">
        <div className="post-header">
          <p >Create post</p>
        </div>
        <div  className="create-post">
          <textarea type="text" placeholder="What is new?"size="50"></textarea>
        </div>
        <div className="line"></div>
        <div   className="button">
        <button className="send-button">Post</button>
        </div>
        <New_Post/>
        <New_Post/>
       
      </div>
    );
}
export default Post;