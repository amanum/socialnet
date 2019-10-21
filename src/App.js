import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import ProfilePage from "./components/ProfilePage/ProfilePage";
import DialogsPage from "./components/DialogsPage/DialogsPage";
import {Route} from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Header/>
            <Sidebar/>
            <Route path="/profile" render={() => <ProfilePage/>}/>
            <Route path="/dialogs" render={() => <DialogsPage/>}/>
        </div>
    );
}

export default App;
