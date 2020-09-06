import React from 'react';
import { updateMessageCreator, sendMessageCreator } from '../../redux/dialoge-reducer';
import MessageField from './MessageField';
import StoreContext from './../../StoreContext';


const MessageFieldContainer = (props) => {


     
     return (
          <StoreContext.Consumer>{
          (store)=>{
               let state = store.getState().dialoguesPage; // local state 
                    let onSendMessageClick = () => {

                  store.dispatch(sendMessageCreator());
               }
               let onNewMessageChange = (body) => {

               store.dispatch(updateMessageCreator(body));

              }

          return(<MessageField sendMessage={onSendMessageClick} 
          onNewMessageChange={onNewMessageChange}
           state={state} />)

          
               }}
          </StoreContext.Consumer>
     )
}

export default MessageFieldContainer;