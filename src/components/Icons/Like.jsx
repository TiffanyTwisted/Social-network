import React from 'react';
import like from './../../img/Button_like.svg';
import comment from './../../img/Button_comment.svg';
import share from './../../img/share-alt.svg';
import './../../css/Pannel.css';

const Like=(props)=>{
    return(
        <div  className='pannel'>
       <div><img src={like} className="like"/>{props.number}</div>
        <img src={comment} className="coment"/>
        <img src={share} className="share"/>

        </div>
    );
}

export default Like;
