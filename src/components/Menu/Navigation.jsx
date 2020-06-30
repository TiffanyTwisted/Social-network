import React from 'react';
import News from '../Icons/Icon-news';
import Home from '../Icons/Home';
import Message from '../Icons/Message';
import Music from '../Icons/Music';
import './../../css/App_menu.css';
import { NavLink } from 'react-router-dom';



const Navigation =()=>{
    return(
        <div className="nav">
        <NavLink to="/content" className="log"><Home/>Profile</NavLink>
        <NavLink to="/news" className="log"><News/>News</NavLink>
        <NavLink to="/dialogues" className="log"><Message/>Messages</NavLink>
        <NavLink to="/music" className="log"><Music/>Music</NavLink>
        
       </div>
    )
}

export default Navigation;