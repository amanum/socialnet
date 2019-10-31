import React from 'react';
import './App.css';
import Sidebar from "./components/Sidebar/Sidebar";
import DialogsPage from "./components/DialogsPage/DialogsPage";
import {Route} from "react-router-dom";
import UsersPageContainer from "./components/UsersPage/UsersPageContainer";
import ProfilePageContainer from "./components/ProfilePage/ProfilePageContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/Login";

function App() {
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

export default App;
