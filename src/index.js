
import './index.css';
import * as serviceWorker from './serviceWorker';
import state, { subcribe } from './redux/state';
import  { addPost,updatePost } from './redux/state';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';



 let renderReactTree=(state)=>{
    ReactDOM.render(
      <React.StrictMode>
        <App state={state} addPost={addPost} updatePost={updatePost}/>
      </React.StrictMode>,
      document.getElementById('root')
    );}
    
    
renderReactTree(state);
subcribe( renderReactTree);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
