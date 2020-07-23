import React from 'react';
import './../../css/App_post.css';
import New_Post from './New_Post';
import { addPostcreator, updatePostcreatorNull,updatePostcreator } from '../../redux/state';


const Post =(props)=>{
  
  let PostElement = props.PostData.map(el=>(<New_Post message= {el.message} like={el.like}/>))
  let newPost = React.createRef();
  let addPost=()=>{
    let text = newPost.current.value;
    if (text){
   props.dispatch(addPostcreator());
   props.dispatch(updatePostcreatorNull());}
  
  };
  let updatePost = ()=>{
    let text = newPost.current.value;
    props.dispatch(updatePostcreator(text));
  };

    return(
        <div className="post">
        <div className="post-header">
          <p >Create post</p>
        </div>
        <div  className="create-post">
          <textarea onChange={updatePost} type="text" ref={newPost} placeholder="What is new?"size="50" value={props.newPostText}></textarea>
        </div>
        <div className="line"></div>
        <div   className="button">
        <button className="send-button" onClick={addPost} >Post</button>
        </div>
        {PostElement}
      </div>
    );
}
export default Post;