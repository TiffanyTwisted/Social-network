import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import Content from './components/Content';
import Dialogues from './components/Dialogues/Dialogues';
import Music from './components/Music/Music';
import {BrowserRouter,Route} from "react-router-dom";
import News from './components/News/News';


const App = (props)=> {
 
  return (
    <BrowserRouter>
    <div className="App">
     <Header/>
     <Menu/>
     <div className='content'>
       <Route path='/content' render={()=><Content PostData ={props.state.contentPage.PostData} newPostText={props.state.contentPage.newPostText}  addPost={props.addPost} updatePost ={props.updatePost}/>}/>
       <Route path ='/dialogues' render={()=><Dialogues dialogeData={props.state.dialoguesPage.dialogeData} messageData={props.state.dialoguesPage.messageData} />}/>
       <Route path='/music' component={Music}/>
       <Route path='/news' component={News}/>
    </div>
    </div> 
    </BrowserRouter>
  );
}


export default App;