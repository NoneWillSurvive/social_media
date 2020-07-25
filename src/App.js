import React from 'react';
import './App.css';
import {Route, withRouter} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginContainer from "./components/Login/LoginContainer";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/appReducer"
import Preloader from "./components/common/Preloader/Preloader";



class App extends React.Component {

    componentDidMount() {
        this.props.initializeApp();

    }

    render() {
        if(!this.props.isInitialized) { return <Preloader /> }
        else {
            return (
                <div className='app-wrapper'>
                    <HeaderContainer/>
                    <NavbarContainer/>
                    <div className='app-wrapper-content'>
                        <Route exact path='/' render={() => <ProfileContainer/>}/>
                        {/*не обновляет страницу профиля, если нет userID => вынужает прописать путь exact*/}
                        <Route exact path='/profile' render={() => <ProfileContainer/>}/>
                        <Route path='/users' render={() => <UsersContainer/>}/>
                        <Route path="/profile/:userId" render={() => <ProfileContainer/>}/>
                        <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                        <Route path='/login' render={() => <LoginContainer/>}/>
                    </div>
                </div>
            );
        }
    }
};

let mapStateToProps = (state) => {
    return {
        isInitialized: state.app.isInitialized
    }
};

export default compose(
    withRouter,
    connect(mapStateToProps, {initializeApp})
)(App);
