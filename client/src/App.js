import React from 'react'
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

function App() {
  {/*
  const [page, setPage] = useState('login')
  const [username, setUsername] = useState('')
  */}
  const [page, setPage] = useState('settings')
  const [username, setUsername] = useState('jeff')

  return (
    <div>
      {page === "login" && (<LoginPage username={username} setUsername={setUsername} setPage={setPage} />)}
      {page === "home" && (<Homepage username={username} setUsername={setUsername} setPage={setPage} />)}
      {page === "profile" && (<Profile username={username} setUsername={setUsername} setPage={setPage} />)}
      {page === "profileAbout" && (<ProfileAbout setPage={setPage} />)}
      {page === "profileFriends" && (<ProfileFriends setPage={setPage} />)}
      {page === "profilePictures" && (<ProfilePictures setPage={setPage} />)}
      {page === "forgotPassword" && (<ForgotPassword setPage={setPage} />)}
      {page === "settings" && (<Settings setPage={setPage} />)}
      {page === "search" && (<Search setPage={setPage} />)}
      {page === "messages" && (<Messages setPage={setPage} />)}
    </div>
  );
}

export default App;