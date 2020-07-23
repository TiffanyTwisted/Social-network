import { profileReducer } from "./profile-reducer";
import { dialogeReducer } from "./dialoge-reducer";



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
   
     },
     sidebar:{}
  },


   getState(){
   return this._state;
   },
   subcribe (observer){
   this._renderReactTree = observer;
   },

  dispatch(action){

   this._state.profilePage =   profileReducer(this._state.contentPage,action);
   this._state.dialoguesPage = dialogeReducer( this._state.dialoguesPage,action);
     
   this._renderReactTree(this._state);
       
  }

};



 

window.store = store;
export default store;