import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import Content from './components/Content';
import DialogeContainer from './components/Dialogues/DialogeContainer';
import Music from './components/Music/Music';
import {BrowserRouter,Route} from "react-router-dom";
import News from './components/News/News';
import UserContainer from './components/User/UserContainer';


const App = (props)=> {
 
  return (
    <BrowserRouter>
    <div className="App">
     <Header/>
     <Menu/>
     <div className='content'>
       <Route path='/content' render={()=><Content />}/>
       <Route path ='/dialogues' render={()=><DialogeContainer />}/>
       <Route path='/music' component={Music}/>
       <Route path='/news' component={News}/>
       <Route path ='/users' render={()=><UserContainer/>}/>

    </div>
    </div> 
    </BrowserRouter>
  );
}


export default App;

// <Route path='/content' render={()=><Content store={props.store} />}/>
 //      <Route path ='/dialogues' render={()=><Dialogues store ={props.store}   />}/>