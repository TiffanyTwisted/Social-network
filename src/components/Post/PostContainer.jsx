
import Post from './Post';
import { addPostcreator, updatePostcreatorNull,updatePostcreator } from '../../redux/profile-reducer';
import { connect } from 'react-redux';

/*
const PostContainer =(props)=>{
 
  
    return(
      <StoreContext.Consumer>{
        (store) =>{
          let addPost=()=>{
           store.dispatch(addPostcreator());
           store.dispatch(updatePostcreatorNull());};
              
          let updatePost = (text)=>{
            let action = updatePostcreator(text);
            store.dispatch(action);
          };

          return( <Post updatePost={updatePost} addPost={addPost}
       PostData={store.getState().contentPage.PostData}  
        newPostText={store.getState().contentPage.newPostText} />)}
}
        </StoreContext.Consumer>
    );
}
*/

let mapStateToProps =(state)=>{
  return {
    PostData: state.contentPage.PostData,
    newPostText: state.contentPage.newPostText
  }
 };
 let mapDispatchToProps =(dispatch)=>{
 return {
     updatePost: (text)=>{ 
        let action = updatePostcreator(text);
        dispatch(action)},
     addPost:()=>{
       dispatch(addPostcreator());
       dispatch(updatePostcreatorNull());}
  }
 };
 const PostContainer= connect(mapStateToProps,mapDispatchToProps)(Post);

export default PostContainer;