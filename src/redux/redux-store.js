import userReducer from "./user-reducer";

const { createStore, combineReducers } = require("redux");
const { profileReducer } = require("./profile-reducer");
const { dialogeReducer } = require("./dialoge-reducer");


let reducers = combineReducers({
    contentPage:profileReducer,
    dialoguesPage:dialogeReducer,
    usersPage:userReducer
})


    
let store = createStore(reducers);


window.store = store;


export default store;