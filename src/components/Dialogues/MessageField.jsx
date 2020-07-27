import React from 'react';



const MessageField=(props)=>{
    
    let messageRef = React.createRef();
  
    let newMessageBody = props.state.newMessageBody;

    let onSendMessageClick=()=>{
  
      props.sendMessage();
      
 }
 let onNewMessageChange=()=>{

      let body =  messageRef.current.value;
      props.onNewMessageChange(body);
   
 }
    return(
        <div className="messageFieldShadow">
         <textarea className="messageField"
         value = {newMessageBody} 
         ref={messageRef}
         onChange={onNewMessageChange}></textarea>
         <button className="addMessage" 
         onClick={onSendMessageClick}>Add message</button>
         </div>
          
    )
}

export default MessageField;