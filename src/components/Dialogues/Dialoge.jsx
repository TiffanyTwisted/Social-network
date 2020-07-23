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

  export default Dialoge;