import {applyMiddleware, combineReducers, createStore} from "redux";

import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import navbarReducer from "./navbarReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";
import thunkMiddleware from 'redux-thunk'
import appReducer from "./appReducer";

// можем воспринимать как наш state с доп логикой reducer'ов
let reducers = combineReducers({
    profilePage : profileReducer,
    dialogsPage : dialogsReducer,
    usersPage : usersReducer,
    navbar : navbarReducer,
    auth: authReducer,
    app: appReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;
