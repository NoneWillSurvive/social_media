import React from 'react';
import './App.css';
import {Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";


const App = (props) => {
    return (
        <div className='app-wrapper'>
            <HeaderContainer/>
            <NavbarContainer />
            <div className='app-wrapper-content'>
                {/*<Route exact path='/' render={() => <Profile />}/>*/}
                <Route path='/users' render={() => <UsersContainer />}/>
                <Route path='/profile/:userId?' render={() => <ProfileContainer />}/>
                <Route path='/dialogs' render={() => <DialogsContainer />}/>
            </div>
        </div>
    );
};

export default App;
