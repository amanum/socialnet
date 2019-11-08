import React, {Component} from 'react';
import './App.css';
import Sidebar from "./components/Sidebar/Sidebar";
import DialogsPage from "./components/DialogsPage/DialogsPage";
import {Route, withRouter} from "react-router-dom";
import UsersPageContainer from "./components/UsersPage/UsersPageContainer";
import ProfilePageContainer from "./components/ProfilePage/ProfilePageContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/Login";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/appReducer";
import Preloader from "./components/common/Preloader/Preloader";

class App extends Component {

    componentDidMount() {
        this.props.initializeApp()
    }

    render() {

        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (
            <div className="App">
                <HeaderContainer/>
                <Sidebar/>
                <Route path="/profile/:userId?" render={() => <ProfilePageContainer/>}/>
                <Route path="/dialogs" render={() => <DialogsPage/>}/>
                <Route path="/users" render={() => <UsersPageContainer/>}/>
                <Route path="/login" render={() => <LoginPage/>}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

export default compose(
    withRouter,
    connect(mapStateToProps, {initializeApp})
)(App);
