import {combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import navbarReducer from "./navbarReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";

// можем воспринимать как наш state с доп логикой reducer'ов
let reducers = combineReducers({
    profilePage : profileReducer,
    dialogsPage : dialogsReducer,
    usersPage : usersReducer,
    navbar : navbarReducer,
    auth: authReducer
});

let store = createStore(reducers);

export default store;
