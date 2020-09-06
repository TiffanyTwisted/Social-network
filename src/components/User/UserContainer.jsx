const { connect } = require("react-redux");
const { default: User } = require("./User");
const {followActionCreator,unfollowActionCreator,setUsersAC} = require('./../../redux/user-reducer');
// import {followActionCreator} from './../../redux/user-reducer'




let mapStateToProps=(state)=>{
  return{
      users: state.usersPage.users
  }

}


let mapDispatchToProp=(dispatch)=>{
  return{
      follow:(userId)=>{
          dispatch(followActionCreator(userId))
      },
      unfollow:(userId)=>{
        dispatch(unfollowActionCreator(userId))
    },
    setUser: (users)=>{
        dispatch(setUsersAC(users))
    }
  }
}

const UserContainer = connect(mapStateToProps,mapDispatchToProp)(User);

export default UserContainer