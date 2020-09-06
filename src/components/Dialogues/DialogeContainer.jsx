import React from 'react';
import Dialogues from './Dialogues';
import { updateMessageCreator, sendMessageCreator } from '../../redux/dialoge-reducer';
import { connect } from 'react-redux';



/*const DialogeContainer=(props)=>{

    return(
        <StoreContext.Consumer >{
        (store)=>{
        
        let onSendMessageClick=()=>{
                
                    store.dispatch(sendMessageCreator());
                    
                }
        let onNewMessageChange=(body)=>{

         store.dispatch(updateMessageCreator(body));
   
               }

        return(<Dialogues updateMessage={onNewMessageChange}
        sendMessage={onSendMessageClick}
         dialoguesPage = {store.getState().dialoguesPage}/>)
        }}
        </StoreContext.Consumer>
           
    )}
*/
let mapStateToProps =(state)=>{
 return {
    dialoguesPage: state.dialoguesPage
 }
};
let mapDispatchToProps =(dispatch)=>{
return {
    updateMessage: (body)=>{   dispatch(updateMessageCreator(body));},
    sendMessage:()=>{dispatch( sendMessageCreator());}
   
 }
};
const DialogeContainer= connect(mapStateToProps,mapDispatchToProps)(Dialogues);

export default DialogeContainer;