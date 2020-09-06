import React from 'react'
import './../../css/App_user.css'




let NewUser =(props)=>{
    return(

       
            
          
            <div className="user_element">
            <div className="name">{props.name}</div>
            <div className="status">{props.status}</div>
            <div className="city">{props.city}</div>
            <div className="country">{props.country}</div>

            </div>
            
          

     

    )
}

export default NewUser