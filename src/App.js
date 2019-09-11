import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import ProfilePage from "./components/ProfilePage/ProfilePage";
import DialogsPage from "./components/DialogsPage/DialogsPage";
import {BrowserRouter, Route} from "react-router-dom";

function App(props) {
	return (
			  <BrowserRouter>
				  <div className="App">
					  <Header/>
					  <Sidebar data={props.state.sidebar}/>
					  <Route path="/profile" render={() => <ProfilePage data={props.state.profilePage}
																						 addPost={props.addPost}
																						 addLike={props.addLike}
																						 updateNewPostText={props.updateNewPostText}/>}/>
					  <Route path="/dialogs" render={() => <DialogsPage data={props.state.dialogsPage}/>}/>
				  </div>
			  </BrowserRouter>
	);
}

export default App;
