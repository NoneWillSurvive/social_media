import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import {Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import UsersContainer from "./components/Users/UsersContainer";


const App = (props) => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <NavbarContainer />
            <div className='app-wrapper-content'>
                <Route exact path='/' render={() => <Profile />}/>
                <Route path='/users' render={() => <UsersContainer />}/>
                <Route path='/profile' render={() => <Profile />}/>
                <Route path='/dialogs' render={() => <DialogsContainer />}/>
            </div>
        </div>
    );
};

export default App;
