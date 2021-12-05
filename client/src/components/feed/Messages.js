import React from 'react'
import logWithBorder from '../../assests/logoWithBorder.jpg';
import dogHeader from '../../assests/dogHeader.jpg';
import { Helmet } from "react-helmet";
import '../components.css';
import config from '../../utils/config';
import textlogo from '../../assests/textLogo.jpg'

const axios = require('axios').default;
const apiURL = config.baseUrl;

const Messages = ({ username, setUsername, setPage }) => {
	const script = () => {
        window.onload = function () {

            /* handle nav bar redirects*/
            let homeIcon = document.querySelector("#home");
            let profileIcon = document.querySelector("#profile");
            let settingsIcon = document.querySelector("#settings");
            let notificationsIcon = document.querySelector("#notifications");
            let messagesIcon = document.querySelector("#messages");
            let logoutIcon = document.querySelector("#logout");

            homeIcon.addEventListener("click", event => {
                event.preventDefault();
                window.sessionStorage.setItem('currPage', "home");
                setPage("home");
            });
            profileIcon.addEventListener("click", event => {
                event.preventDefault();
                window.sessionStorage.setItem('currPage', "profile");
                setPage("profile");
            });
            settingsIcon.addEventListener("click", event => {
                event.preventDefault();
                window.sessionStorage.setItem('currPage', "settings");
                setPage("settings");
            });
            notificationsIcon.addEventListener("click", event => {
                event.preventDefault();
                window.sessionStorage.setItem('currPage', "profile");
                setPage("profile");
            });
            messagesIcon.addEventListener("click", event => {
                event.preventDefault();
                window.sessionStorage.setItem('currPage', "messages");
                setPage("messages");
            });
            logoutIcon.addEventListener("click", event => {
                event.preventDefault();
                window.sessionStorage.setItem('currPage', "login");
                sessionStorage.clear();
                localStorage.clear();
                setPage("login");
            });
        }
    }

	return (
		<div>
			<Helmet>
				<meta charset="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta name="description" content="" />
				<title>OnlyPets Homepage</title>
				<script dangerouslySetInnerHTML={{ __html: script() }} type="text/javascript" />
			</Helmet>

			<main class="entire-messagepage">
				{/* Navbar */}
				<div class="navbar">
					<nav class="navbar navbar-expand-lg navbar-light bg-light">
					<img src={textlogo} id="navBarTextLogo" />
						<a class="nav-link glyphicon glyphicon-home" href="homepage.html" id="home"><span
							class="sr-only"></span></a>
						<a class="nav-link glyphicon glyphicon-user" href="profile.html" id="profile"> <span
							class="sr-only"></span></a>
						<a class="nav-link glyphicon glyphicon-wrench" href="settings.html" id="settings"><span
							class="sr-only"></span></a>
						<a class="nav-link glyphicon glyphicon-bell" href="#" id="notifications"> <span
							class="sr-only"></span></a>
						<a class="nav-link glyphicon glyphicon-envelope" href="#" id="messages"> <span
							class="sr-only"></span></a>
						<a class="nav-link glyphicon glyphicon-log-out" href="index.html" id="logout"><span
							class="sr-only"></span></a>


						<div class="search-bar">
							<input id="search" type="search" class="form-control" />
						</div>

						<a href="search.html"><span class="glyphicon glyphicon-search"></span></a>

						<div class="lightModeButton9-container">
						<button class="btn btn-dark" id="light-mode-button9" onClick={toggle_light_mode}>Dark Mode</button>
						</div>

					</nav>
				</div>

				{/* User's Friends List */}
				<div class="user-contacts-container">
					<h5 id="contactsText">Contacts</h5>
					<button class="btn glyphicon glyphicon-option-horizontal" id="moreOptContactsButton"></button>
					<div class="user-friends-list">
						<li>Friend 1</li>
						<li>Friend 2</li>
						<li>Friend 3</li>
						<li>Friend 4</li>
						<li>Friend 5</li>
						<li>Friend 6</li>
						<li>Friend 8</li>
						<li>Friend 9</li>
					</div>
				</div>
			</main>
		</div>
	)
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

export default Messages;