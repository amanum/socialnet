import React from 'react';
import './App.css';
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import ProfilePage  from "./components/ProfilePage";
import DialogsPage from "./components/DialogsPage";

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
