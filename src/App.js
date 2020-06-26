import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navigation from './components/Menu/Navigation';
import Post from './components/Post/Post';
import Info from './components/Info';
import Profile from './components/Profile/Profile';





const App = ()=> {
  return (
    <div className="App">
     <Header/>
     <main className="App-content">
       <div className="content-view">
         <Profile/>
          <Info/>
          <Post/>

       </div>
      
     </main>
     <div className="App-menu">
     <Navigation/>
     </div >
    
    </div>
  );
}


export default App;