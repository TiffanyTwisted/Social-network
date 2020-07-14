let store={
   _renderReactTree(){
    
   },
    _state : {
      contentPage:{
          PostData:[{id:1 ,message:'To live is to risk it all, otherwise you are just an inert chunk of randomly assembled molecules drifting wherever the universe blows you',like:27},{id:2,message:'Hi',like : 2}],
         newPostText:''
      },
     dialoguesPage:{
      dialogeData : [{id:1,name:"Rick Sanchez"},{id:2,name:"Bart Simpson"},{id:3,name:"Morty Sanchez"},{id:4,name:"Pitter Griffin"}],
      messageData : [{id:1,text:"Hi"},{id:2,text:"How are you?"},{id:3,text:"How old are you?"}]
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
        case 'ADD-POST':
         let newPost = {
            id:3,
            message:this._state.contentPage.newPostText,
            like:7
        }
     
       this._state.contentPage.PostData.push(newPost);
       this._renderReactTree(this._state);
       
       case 'UPDATE_POST':
         this._state.contentPage.newPostText = action.newText;
         this._renderReactTree(this._state);


     }
  }

  
}



window.store = store;
export default store;