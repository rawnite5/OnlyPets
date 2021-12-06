import LoginPage from './components/login/LoginPage'
import ForgotPassword from './components/login/ForgotPassword'
import ResetPassword from './components/login/ResetPassword'
import ProfileAbout from './components/profile/ProfileAbout'
import ProfileFriends from './components/profile/ProfileFriends'
import ProfilePictures from './components/profile/ProfilePictures'
import Profile from './components/profile/Profile'
import Settings from './components/profile/Settings'
import Messages from './components/feed/Messages'
import Homepage from './components/feed/Homepage'
import Search from './components/feed/Search'
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/globalStyles";
import { lightTheme, darkTheme } from "./components/theme"
import { useState } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';

function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<LoginPage />} />
          <Route path="/home" element={<Homepage />} />
          <Route path="/profile" element={<Profile />} />
          <Route exact path="/profileAbout" element={<ProfileAbout />} />
          <Route path="/profileFriends" element={<ProfileFriends />} />
          <Route path="/profilePictures" element={<ProfilePictures />} />
          <Route exact path="/forgotPassword" element={<ForgotPassword />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/search" element={<Search />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/resetPassword" element={<ResetPassword />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;