const { createStore, combineReducers } = require("redux");
const { profileReducer } = require("./profile-reducer");
const { dialogeReducer } = require("./dialoge-reducer");


let reducers = combineReducers({
    contentPage:profileReducer,
    dialoguesPage:dialogeReducer})


    
let store = createStore(reducers);


export default store;