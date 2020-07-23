const UPDATE_POST = 'UPDATE-POST';
const ADD_POST = "ADD-POST";
const UPDATE_MESSAGE = 'UPDATE-MESSAGE';
const SEND_MESSAGE ='SEND-MESSAGE';

let store={
   _renderReactTree(){
    
   },
    _state : {
      contentPage:{
          PostData:[
            {id:1 ,message:'To live is to risk it all, otherwise you are just an inert chunk of randomly assembled molecules drifting wherever the universe blows you',like:27},
            {id:2,message:'Hi',like : 2}],
          newPostText:''
      },
     dialoguesPage:{
      dialogeData : [
         {id:1,name:"Rick Sanchez"},
         {id:2,name:"Bart Simpson"},
         {id:3,name:"Morty Sanchez"},
         {id:4,name:"Pitter Griffin"}],
      messageData : [
         {id:1,text:"Hi"},
         {id:2,text:"How are you?"},
         {id:3,text:"How old are you?"}],
      newMessageBody:''
   
     }
  },


   getState(){
   return this._state;
   },
   subcribe (observer){
   this._renderReactTree = observer;
   },

  dispatch(action){
     switch(action.type){
        case ADD_POST:
         let newPost = {
            id:3,
            message:this._state.contentPage.newPostText,
            like:7
        }
        
       this._state.contentPage.PostData.push(newPost);
       this._renderReactTree(this._state);
       break;
       
      case UPDATE_POST:
         this._state.contentPage.newPostText = action.newText;
         this._renderReactTree(this._state);
         break;

      case UPDATE_MESSAGE:
         this._state.dialoguesPage.newMessageBody = action.body;
         this._renderReactTree(this._state);
         break;

      case SEND_MESSAGE:
         let body = this._state.dialoguesPage.newMessageBody ;
         this._state.dialoguesPage.newMessageBody = '';
         this._state.dialoguesPage.messageData.push({id:4,text:body});
         this._renderReactTree(this._state);
         break;

      
     }
     
  }

};


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
 // Message 
 export const updateMessageCreator=(body)=>{
   return {
      type:UPDATE_MESSAGE,
      body:body
  }
  };

  export const sendMessageCreator=()=>{
     return{type:SEND_MESSAGE}
   };
  


window.store = store;
export default store;