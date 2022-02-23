import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";

import Sidebar from "./sidebar/Sidebar";
import Home from "./pages/home/Home";
import Explore from "./pages/explore/Explore";
import Notifications from "./pages/notifications/Notifications";
import Messages from "./pages/messages/Messages";
import Bookmarks from "./pages/bookmarks/Bookmarks";
import Lists from "./pages/lists/Lists";
import Profile from "./pages/profile/Profile";

function App() {
  return (
    <div className="app">
      <Sidebar />
      <div className="cc">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/bookmarks" element={<Bookmarks />} />
          <Route path="/lists" element={<Lists />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
