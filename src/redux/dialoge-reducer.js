const UPDATE_MESSAGE = 'UPDATE-MESSAGE';
const SEND_MESSAGE ='SEND-MESSAGE';


let startState = {
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
 
   };
export const dialogeReducer=(state=startState,action)=>{
    switch(action.type){
        
      case UPDATE_MESSAGE:
        state.newMessageBody = action.body;
         break;

      case SEND_MESSAGE:
         let body = state.newMessageBody ;
         state.newMessageBody = '';
         state.messageData.push({id:4,text:body});
         break;
      default:
        return state;
    }


    return state;
}

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
   
