import React from 'react';
import { ReactDOM } from 'react';
import logWithBorder from '../../assests/logoWithBorder.jpg';
import dogHeader from '../../assests/dogHeader.jpg';
import { Helmet } from "react-helmet";
import '../components.css';
import config from '../../utils/config';
import textlogo from '../../assests/textLogo.jpg';
import privacyimage from '../../assests/_Pngtree_lock_icon_5091662-removebg-preview.png';
import theme from '../../components/theme';
import { withTheme } from 'styled-components';
const axios = require('axios').default;
const apiURL = config.baseUrl;
import { useState, useEffect } from 'react'
import $ from 'jquery';

const Settings = ({ setPage }) => {

	const script = () => {
		window.onload = function () {
			console.log($('#toggle1').bootstrapToggle('toggle'));

			let profiles = []

			axios.get(`${apiURL}/profile/`)
				.then(response => {
					profiles = response.data.data;
				})
				.catch(error => console.log(error));

			let blockedSearchInput = document.querySelector("#search2");
			let blockedSearchButton = document.querySelector("#blockButton");

			blockedSearchButton.addEventListener("click", event => {
				event.preventDefault();
				var profileToBlock = blockedSearchInput.value;
				let found = false;

				for (let i = 0; i < profiles.length; i++) {
					if (profiles[i].username === profileToBlock) {
						found = true;
						break;
					}
				}

				if (!found) {
					alert(`User ${profileToBlock} does not exist.`);
				} else {
					alert(`${profileToBlock} has been blocked, good riddance.`);
				}

			})
		}
	}

	return (
		<div>
			<Helmet>
				<meta charset="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta name="description" content="" />
				<title>OnlyPets Settings</title>
				<script dangerouslySetInnerHTML={{ __html: script() }} type="text/javascript" />
			</Helmet>

			<main class="entireSettingsPage">
				{/* }Navbar */}
				<div class="navbar">
					<nav class="navbar navbar-expand-lg navbar-light bg-light">
						<img src={textlogo} id="navBarTextLogo" />
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

					</nav>
				</div>
				<div class="full-settings-container">


					<div class="settings-container">

						<div class="card shadow p-3 mb-5 bg-white rounded" id="settings-container-background">
							<h1 id="settingsHeaderText">Settings</h1>
							<div class="settingsToggleGroup">
								<h2>Customize Your Display</h2>
								<text>Customize your display by turning OnlyPets into dark mode!</text>
								<br></br>
								<br></br>
								<text id="darkModeSwitchText">Click to turn on/off dark mode</text>
								<br></br>

								<button class="btn btn-dark" id="light-mode-button" onClick={darkMode}>Dark Mode</button>

								<h2>Blocked Female Dogs</h2>
								<text>Manage your blocked users. Once you block someone, that person can no longer see things you post on your timeline, tag you, start conversations with you, or add you as a friend. </text>

								<div class="searchBarBlockedUsers-Container">
									<input id="search2" type="search" class="form-control" />
									<button class="btn btn-primary" id="blockButton">Block</button>
								</div>

								<h2>Blocked Pages</h2>
								<text>Once you block a Page, that Page can no longer interact with your posts or like or reply to your comments. You'll be unable to post to the Page's timeline or message the Page. If you currently like the Page, blocking it will also unline and unfollow.</text>

								<div class="searchBarBlockedPages-Container">
									<input id="search3" type="search" class="form-control" />
									<button class="btn btn-primary" id="blockButton">Block</button>
								</div>

								<h2>Privacy</h2>
								<text id="statusText">Status</text>

								<br></br>
								<div class="statusToggle">
									Only me
									<label class="switch" id="onlyMePrivactySwitch">
										<input type="checkbox"></input>
										<span class="slider round"></span>
									</label>
									<br></br>
									Friends
									<label class="switch" id="friendsPrivactySwitch">
										<input type="checkbox"></input>
										<span class="slider round"></span>
									</label>
									<br></br>
									Public
									<label class="switch" id="publicPrivactySwitch">
										<input type="checkbox" checked></input>
										<span class="slider round"></span>
									</label>
									<br></br>
								</div>

								<div class="profileToggle">
									<text id="profilePageText">Profile Page</text>
									<br></br>
									Only me
									<label class="switch" id="onlyMePrivactySwitch">
										<input type="checkbox"></input>
										<span class="slider round"></span>
									</label>
									<br></br>
									Friends
									<label class="switch" id="friendsPrivactySwitch">
										<input type="checkbox"></input>
										<span class="slider round"></span>
									</label>
									<br></br>
									Public
									<label class="switch" id="publicPrivactySwitch" >
										<input type="checkbox" id="toggle1" />
										<span class="slider round" ></span>
									</label>
								</div>




							</div>

						</div>
					</div>
				</div>
			</main>
		</div>
	)
}

const darkMode = () => {
	var app = document.getElementsByTagName("MAIN")[0];
	if (localStorage.lightMode == "dark") {
		localStorage.lightMode = "light";
		app.setAttribute("light-mode", "light");
	} else {
		localStorage.lightMode = "dark";
		app.setAttribute("light-mode", "dark");
	}

}


export default Settings;