import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import ProfilePage  from "./components/ProfilePage/ProfilePage";
import DialogsPage from "./components/DialogsPage/DialogsPage";

function App() {
   return (
      <div className="App">
         <Header />
         <Sidebar />
         <ProfilePage />
         <DialogsPage />
      </div>
   );
}

export default App;
