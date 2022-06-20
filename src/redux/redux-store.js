import {
    compose,
    applyMiddleware,
    combineReducers,
    legacy_createStore as createStore,
} from "redux";
import usersReducer from "./users-reducer";
import profileReducer from "./profile-reducer";
import authReducer from "./auth-reducer";
import appReducer from "./app-reducer";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from "redux-form";
let reducers = combineReducers({
    profilePage: profileReducer,
    //    dialogsPage: dialogsReducer,
    //    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(thunkMiddleware))
);



// let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.__store__ = store;

export default store;
