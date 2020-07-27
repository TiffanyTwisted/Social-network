import React from 'react';
import { updateMessageCreator, sendMessageCreator } from '../../redux/dialoge-reducer';
import MessageField from './MessageField';


const MessageFieldCotainer = (props) => {


     let state = props.store.getState().dialoguesPage; // local state 
     let onSendMessageClick = () => {

          props.store.dispatch(sendMessageCreator());
     }
     let onNewMessageChange = (body) => {

          props.store.dispatch(updateMessageCreator(body));

     }
     return (
          <MessageField sendMessage={onSendMessageClick} onNewMessageChange={onNewMessageChange} state={state} />
     )
}

export default MessageFieldCotainer;