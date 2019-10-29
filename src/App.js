import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import DialogsPage from "./components/DialogsPage/DialogsPage";
import {Route} from "react-router-dom";
import UsersPageContainer from "./components/UsersPage/UsersPageContainer";
import ProfilePageContainer from "./components/ProfilePage/ProfilePageContainer";

function App() {
    return (
        <div className="App">
            <Header/>
            <Sidebar/>
            <Route path="/profile/:userId?" render={() => <ProfilePageContainer/>}/>
            <Route path="/dialogs" render={() => <DialogsPage/>}/>
            <Route path="/users" render={() => <UsersPageContainer/>}/>
        </div>
    );
}

export default App;
