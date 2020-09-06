import React from 'react';
import PostContainer from './../components/Post/PostContainer';
import Info from './Info';
import Profile from './../components/Profile/Profile';

const Content= (props)=> {
 
    return (
      
      
       <main className="content">
         <div className="content-view">
           <Profile/>
            <Info/>
            <PostContainer/>
  
         </div>
        
       </main>
       
    );
  }
  //PostData = {props.PostData} dispatch={props.dispatch}  newPostText={props.newPostText}
  
  export default Content;