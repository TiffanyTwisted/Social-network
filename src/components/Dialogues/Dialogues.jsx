import React from 'react';
import    './../../css/App_dialogues.css';
import { NavLink } from 'react-router-dom';


const Dialoge=(props)=>{
  let path ="/dialogues/"+ props.id; 
  return(
            <div className="shadow">
            <NavLink to={path} className='List' >{props.name}</NavLink>
            </div>
  )
}


const Message=(props)=>{
   return(
     <div className="message_text">{props.text}</div>
   )
}
const Dialogues=(props)=>{
 
  let dialogeElement = props.dialogeData.map(el=>(<Dialoge name = {el.name}  id = {el.id}/>))
  let messageElement = props.messageData.map(el=>(<Message text={el.text}/>))
  let NewMessage = React.createRef();
  let addMessage = ()=>{
    let text  = NewMessage.current.value;
    alert(text);
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
         <textarea ref={NewMessage}></textarea>
         <button onClick={addMessage}>Add message</button>
          </div>

        </div>

      </div>
    )

}

export default Dialogues;