import {combineReducers,  legacy_createStore as createStore} from "redux";
import usersReducer from "./users-reducer";


let reducers = combineReducers({
//    profilePage: profileReducer,
//    dialogsPage: dialogsReducer,
//    sidebar: sidebarReducer,
   usersPage: usersReducer,
});

let store = createStore(reducers);

export default store;
