import React from 'react';
import News from '../Icons/Icon-news';
import Home from '../Icons/Home';
import Message from '../Icons/Message';
import Music from '../Icons/Music';
import './../../css/App_menu.css';



const Navigation =()=>{
    return(
        <div className="nav">
        <a href="#" className="log"><Home/>Profile</a>
        <a href="#" className="log"><News/>News</a>
        <a href="#" className="log"><Message/>Messages</a>
        <a href="#" className="log"><Music/>Music</a>
        
       </div>
    )
}

export default Navigation;