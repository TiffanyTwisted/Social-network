
const UPDATE_POST = 'UPDATE-POST';
const ADD_POST = "ADD-POST";


let startState = {
    PostData:[
      {id:1 ,message:'To live is to risk it all, otherwise you are just an inert chunk of randomly assembled molecules drifting wherever the universe blows you',like:27},
      {id:2,message:'Hi',like : 2}],
    newPostText:''
}

export const profileReducer=(state=startState,action)=>{
    switch(action.type){
        case ADD_POST:{
         let newPost = {
            id:3,
            message:state.newPostText,
            like:7
        };
        let stateCopy = {...state};
        stateCopy.PostData = [...state.PostData];
       stateCopy.PostData.push(newPost);
       stateCopy.newPostText='';
       return stateCopy;
      }
      case UPDATE_POST:{
        let stateCopy = {...state};
         stateCopy.newPostText = action.newText;
         return stateCopy;}
      default:
        return state;
    }
      

  
}
//Posts
export const updatePostcreator =(text)=>{
    return{type:UPDATE_POST,newText: text}
   };
 export const updatePostcreatorNull=()=>{
  return {
     type:UPDATE_POST,
     newText:''
 }
 };
 export const addPostcreator=()=>{
    return{type:ADD_POST}
  };