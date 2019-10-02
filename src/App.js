import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import ProfilePage from "./components/ProfilePage/ProfilePage";
import DialogsPage from "./components/DialogsPage/DialogsPage";
import {BrowserRouter, Route} from "react-router-dom";

function App(props) {
    return (
        <div className="App">
            <Header/>
            <Sidebar sidebarState={props.state.sidebar}/>
            <Route path="/profile" render={() => <ProfilePage profilePageState={props.state.profilePage}
                                                              dispatch={props.dispatch}/>}/>
            <Route path="/dialogs" render={() => <DialogsPage dialogsPageState={props.state.dialogsPage}
                                                              dispatch={props.dispatch}/>}/>
        </div>
    );
}

export default App;
