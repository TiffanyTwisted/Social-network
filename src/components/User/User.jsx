import React from 'react'
import './../../css/App_user.css'
import NewUser from './NewUser'
import Bart from './../Icons/Bart'




let User =(props)=>{
   return <div className='user_shadow'>{
       props.users.map((u)=><div key ={u.id} className="user_element_shadow" >
            <div className="avatar">
            <Bart/>
             {u.follow?
             <button onClick={()=>{props.unfollow(u.id)}} >UnFollow</button>
             :<button onClick={()=>{props.follow(u.id)}}>Follow</button>}
            </div>
            
            <div className="user_element">
            <div className="name">{u.name}</div>
            <div className="status">{u.status}</div>
            <div className="city">{u.location.city}</div>
            <div className="country">{u.location.country}</div>

            </div>
            
          










       </div>)
       
       
       
       
       
       

   }
   </div>


}

export default User




/*let UserElement = props.users.map(el=>(<NewUser  key={el.id} name={el.name}
                                                        status={el.status} 
                                                        city={el.location.city}
                                                        country={el.location.country}
                                                       follow={el.follow}/>))
    return(
         
        <div className='user_shadow'>
            <div className="user_element_shadow">
              <div className="avatar">
            <Bart/>
             {props.follow?<button >Follow</button>:<button>Unfollow</button>}
            </div>
            {UserElement}
            </div>

          

        </div>

    )*/