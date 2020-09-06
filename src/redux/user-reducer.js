
const FOLLOW ="FOLLOW";
const UNFOLLOW ="UNFOLLOW";
const SET_USER ='SET-USER';

let startState = {
  users : [
    {id:1,follow:true,name:"Rick Sanchez",status:'Вабба-лабба-даб-даб! ',location:{city:"Сиэтл",country:"США"}},
    {id:2,follow:false,name:"Bart Simpson",status:'Доу! ',location:{city:"ааа",country:"аааа"}},
    {id:3,follow:true,name:"Morty Sanchez",status:'Вабба-лабба-даб-даб! ',location:{city:"Сиэтл",country:"США"}},
    {id:4,follow:false,name:"Pitter Griffin",status:'Вабба-лабба-даб-даб! ',location:{city:"сссс",country:"ссс"}}]
}

 const userReducer=(state=startState,action)=>{
   switch(action.type){
     case FOLLOW:{
      return {
         ...state,
         users: state.users.map(u=>{
           if (u.id === action.userId){
            return  {...u , follow : true}

           }
           return u;
         })
       }
      
     }
     case UNFOLLOW : {
      return {
        ...state,
        users: state.users.map(u=>{
          if (u.id === action.userId){
           return  {...u , follow : false}

          }
          return u;
        })
      }
     }
     case SET_USER: {
       return{...state, users:[...state.users,...action.users]}
     }
     default : 
     return state;

     
    
   }
  



  }
export let followActionCreator =(userId)=>({type:FOLLOW,userId});
export let unfollowActionCreator=(userId)=>({type:UNFOLLOW,userId});
export let setUsersAC=(users)=>({type:SET_USER,users});

export default userReducer;
