import React from 'react'
import logWithBorder from '../../assests/logoWithBorder.jpg';
import dogHeader from '../../assests/dogHeader.jpg';
import { Helmet } from "react-helmet";
import '../components.css';
import config from '../../utils/config';
import textLogo from '../../assests/textLogo.jpg';
const axios = require('axios').default;
const apiURL = config.baseUrl;

const ProfileFriends = () => {
	return (
		<div>
			<Helmet>
				<meta charset="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta name="description" content="" />
				<title>OnlyPets Your Friends</title>
				<script dangerouslySetInnerHTML={{ __html: script() }} type="text/javascript" />
			</Helmet>

			<main class="entire-profilepage">
				{/* Navbar */}
				<div class="navbar">
					<nav class="navbar navbar-expand-lg navbar-light bg-light">
						<img src={textLogo} id="navBarTextLogo" />
						<a class="nav-link glyphicon glyphicon-home" href="/home" id="home"><span class="sr-only"></span></a>
						<a class="nav-link glyphicon glyphicon-user" href="/profile" id="profile"> <span class="sr-only"></span></a>
						<a class="nav-link glyphicon glyphicon-wrench" href="/settings" id="settings"><span
							class="sr-only"></span></a>
						<a class="nav-link glyphicon glyphicon-bell" href="/profile" id="notifications"> <span class="sr-only"></span></a>
						<a class="nav-link glyphicon glyphicon-envelope" href="/messages" id="messages"> <span
							class="sr-only"></span></a>
						<a class="nav-link glyphicon glyphicon-log-out" href="/" id="logout"><span class="sr-only"></span></a>


						<div class="search-bar">
							<input id="search" type="search" class="form-control" />
						</div>

						<a href="search.html"><span class="glyphicon glyphicon-search"></span></a>

						<div class="lightModeButton6-container">
							<button class="btn btn-dark" id="light-mode-button6" onClick={toggle_light_mode}>Dark Mode</button>
						</div>
					</nav>
				</div>


				<div class="everythingButNavBar">


					{/* Add script for "Edit Cover Photo Button" */}


					<div class="profile-container">
						<div class="coverphoto">
							<img src={dogHeader} class="cover-img" alt="small dog in a field" />
						</div>


						<div class="profile-navbar">
							<nav class="navbar navbar-expand-lg navbar-light bg-light">
								<a class="nav-link" href="/profileAbout" id="profile-about">| About |</a>
								<a class="nav-link" href="/profile" id="profile-posts">| Posts |</a>
								<a class="nav-link" href="/profileFriends" id="profile-friends">| Friends |</a>
								<a class="nav-link" href="/profilePictures" id="profile-photos">| Photos |</a>
							</nav>
							{/* <div class="card shadow p-3 mb-5 bg-white rounded" id="contentCard">
                        <div class="profile-options">
                            <a class="nav-link" href="#" id="profile-about"> About</a>
                            <a class="nav-link" href="#" id="profile-posts"> Posts</a>
                            <a class="nav-link" href="#" id="profile-friends"> Friends</a>
                            <a class="nav-link" href="#" id="profile-photos"> Photos</a>
                        </div> */}
						</div>
					</div>
				</div>
			</main >
		</div >
	)
}

const script = () => {
	window.onload = function () {
	}
}

function toggle_light_mode() {
	var app = document.getElementsByTagName("MAIN")[0];
	if (localStorage.lightMode == "dark") {
		localStorage.lightMode = "light";
		app.setAttribute("light-mode", "light");
	} else {
		localStorage.lightMode = "dark";
		app.setAttribute("light-mode", "dark");
	}
}

export default ProfileFriends;