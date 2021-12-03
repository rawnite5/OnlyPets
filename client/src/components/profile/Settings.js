import React from 'react'
import logWithBorder from '../../assests/logoWithBorder.jpg';
import dogHeader from '../../assests/dogHeader.jpg';
import { Helmet } from "react-helmet";
import '../components.css';
import config from '../../utils/config';
import textlogo from '../../assests/textLogo.jpg';
import privacyimage from '../../assests/_Pngtree_lock_icon_5091662-removebg-preview.png';
const axios = require('axios').default;
const apiURL = config.baseUrl;


const Settings = () => {
	return (
		<div>
			<Helmet>
				<meta charset="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta name="description" content="" />
				<title>OnlyPets Settings</title>
				<script dangerouslySetInnerHTML={{ __html: script() }} type="text/javascript" />
			</Helmet>

			<main class="entire-settingspage">
				{/* }Navbar */}
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
						<a class="nav-link glyphicon glyphicon-envelope" href="messages.html" id="messages">
							<span class="sr-only"></span></a>
						<a class="nav-link glyphicon glyphicon-log-out" href="index.html" id="logout"><span
							class="sr-only"></span></a>


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
								<text id="darkModeSwitchText">Turn on/off dark mode</text>
								<label class="switch" id="customizeThemeSwitch">
									<input type="checkbox"></input>
									<span class="slider round"></span>
								</label>
								<h2>Blocked Bitches</h2>
								<text>Manage your blocked users. Once you block someone, that person can no longer see things you post on your timeline, tag you, start conversations with you, or add you as a friend. </text>
								<h2>Blocked Pages</h2>
								<text>Once you block a Page, that Page can no longer interact with your posts or like or reply to your comments. You'll be unable to post to the Page's timeline or message the Page. If you currently like the Page, blocking it will also unline and unfollow.</text>
								<h2>Privacy</h2>
								<text>Status</text>
								
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
								<label class="switch" id="publicPrivactySwitch"> 
									<input type="checkbox"></input>
									<span class="slider round"></span>
								</label>
								<br></br>
								<text>Profile Page</text>
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
								<label class="switch" id="publicPrivactySwitch">
									<input type="checkbox"></input>
									<span class="slider round"></span>
								</label>


							</div>

						</div>
					</div>
					{/* <div class="settings-options-container">
						<div class="card shadow p-3 mb-5 bg-white rounded" id="settings-options-background">
							<h1 id="settingHeader">Settings</h1> */}
					{/* When onclick, the respected info will be come visible */}
					{/* <div class="btn-group-vertical" id="settingsButtonGroup">
								<button class="button" id="pill1">General</button>
								<button class="button" id="pill2">Privacy</button>
								<button class="button" id="pill3">Blocking</button>
								<button class="button" id="pill4">Notifications</button>
							</div>
						</div>
					</div> */}
				</div>
			</main>
		</div>
	)
}


const script = () => {
	window.onload = function () {
	}


}

export default Settings;