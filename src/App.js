import React from 'react';
import './App.css';
import Sidebar from "./components/Sidebar/Sidebar";
import DialogsPage from "./components/DialogsPage/DialogsPage";
import {Route} from "react-router-dom";
import UsersPageContainer from "./components/UsersPage/UsersPageContainer";
import ProfilePageContainer from "./components/ProfilePage/ProfilePageContainer";
import HeaderContainer from "./components/Header/HeaderContainer";

function App() {
    return (
        <div className="App">
            <HeaderContainer/>
            <Sidebar/>
            <Route path="/profile/:userId?" render={() => <ProfilePageContainer/>}/>
            <Route path="/dialogs" render={() => <DialogsPage/>}/>
            <Route path="/users" render={() => <UsersPageContainer/>}/>
        </div>
    );
}

export default App;
