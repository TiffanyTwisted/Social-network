import React from 'react';
import Post from './../components/Post/Post';
import Info from './Info';
import Profile from './../components/Profile/Profile';

const Content= (props)=> {
 
    return (
      
      
       <main className="content">
         <div className="content-view">
           <Profile/>
            <Info/>
            <Post PostData = {props.PostData} dispatch={props.dispatch}  newPostText={props.newPostText}/>
  
         </div>
        
       </main>
       
    );
  }
  
  
  export default Content;