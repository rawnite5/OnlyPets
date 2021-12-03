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

function App() {

  return (
    <div>
      {/* <LoginPage></LoginPage> */}
      {/* <ForgotPassword></ForgotPassword> */}

      <Homepage></Homepage>
    </div>
  );
}

export default App;