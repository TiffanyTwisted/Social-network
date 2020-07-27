import React from 'react';
import Post from './Post'
import { addPostcreator, updatePostcreatorNull,updatePostcreator } from '../../redux/profile-reducer';


const PostContainer =(props)=>{
  
  
  let addPost=()=>{
   props.dispatch(addPostcreator());
   props.dispatch(updatePostcreatorNull());
  
  };
  let updatePost = (text)=>{
    let action = updatePostcreator(text);
    props.dispatch(action);
  };

    return(
       <Post updatePost={updatePost} addPost={addPost} PostData={props.PostData} dispatch={props.dispatch}  newPostText={props.newPostText} />
    );
}
export default PostContainer;