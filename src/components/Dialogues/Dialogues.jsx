import React from 'react';
import    './../../css/App_dialogues.css';
import Message from './Message';
import Dialoge from './Dialoge';



const Dialogues=(props)=>{
  let state = props.dialoguesPage; // local state 


  let dialogeElement = state.dialogeData.map(el=>(<Dialoge name = {el.name} key={el.id} id = {el.id}/>))
  let messageElement = state.messageData.map(el=>(<Message text={el.text} key ={el.id}/>))
  let newMessageBody = state.newMessageBody;
  
   let messageRef = React.createRef();
  
  
 let onSendMessageClick=()=>{
  
    props.sendMessage();
      
 }
 let onNewMessageChange=(e)=>{
   let body = e.target.value;
    props.updateMessage(body);
   
 }


    return(
      
      <div className="dialoge" >
        <div className="userListShadow">
        <div className="userList" >
          <div className="users">
            {dialogeElement}
            </div>
        </div>
        </div>
        <div className="messageListShadow">
          <div className='messageList'>
           <div className="messageList_header">
           <div className="header_name">User Name
           </div>
      
          </div>
         {messageElement}
         <div className="messageFieldShadow">
         <textarea className="messageField"
         value = {newMessageBody} 
         ref={messageRef}
         onChange={onNewMessageChange}></textarea>
         <button className="addMessage" 
         onClick={onSendMessageClick}>Add message</button>
         </div>
          
          </div>

        </div>

      </div>
    )

}

export default Dialogues;