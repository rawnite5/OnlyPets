import React from 'react'
import logWithBorder from '../../assests/logoWithBorder.jpg';
import dogHeader from '../../assests/dogHeader.jpg';
import { Helmet } from "react-helmet";
import '../components.css';
import config from '../../utils/config';
import textlogo from '../../assests/textLogo.jpg';

const axios = require('axios').default;
const apiURL = config.baseUrl;

const Messages = ({ setPage }) => {
	const script = () => {
		window.onload = function () {

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

						<div class="lightModeButton3-container">
							<button class="btn btn-dark" id="light-mode-button3" onClick={toggle_light_mode}>Dark Mode</button>
						</div>

					</nav>
				</div>

				<div class="userFiltering-Container">
					<input type="text" id="searchForUsersToMessage" placeholder="Search for users"></input>

					<ul id="myUL">
						<li><a href="#">Adele</a></li>
						<li><a href="#">Agnes</a></li>

						<li><a href="#">Billy</a></li>
						<li><a href="#">Bob</a></li>

						<li><a href="#">Calvin</a></li>
						<li><a href="#">Christina</a></li>
						<li><a href="#">Cindy</a></li>
					</ul>
				</div>

				<div class="composeMessage-Container">
					<textarea placeholder="Type message.." name="msg" id="composeMessageTextArea" required></textarea>
				</div>

				<div class="messageButtons">
					<button class="btn btn-primary" onClick={send} id="sendButton"> Send</button>

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

function send() {
	alert("message sent");
}

export default Messages;