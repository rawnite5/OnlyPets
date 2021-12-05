import React from 'react'
import logWithBorder from '../../assests/logoWithBorder.jpg';
// import dogHeader from '../../assests/dogHeader.jpg';
import textlogo from '../../assests/textLogo.jpg'
import { Helmet } from "react-helmet";
import '../components.css';
import config from '../../utils/config';
import profilePhoto from '../../assests/dogPhoto1 copy.jpg';
import video from '../../assests/video-call.svg';
import call from '../../assests/call.svg';
import settings from '../../assests/settings.svg';
import upload from '../../assests/upload.svg';
import camera from '../../assests/camera.svg';
import check from '../../assests/check.svg';
import like from '../../assests/like.svg';

const axios = require('axios').default;
const apiURL = config.baseUrl;
import { Link, useNavigate } from 'react-router-dom';

const Homepage = () => {
	let navigate = useNavigate();

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
				<link href="\client\src\components\bootstrap-5.1.1-dist" rel="stylesheet" crossorigin="anonymous" />
			</Helmet>

			<main class="entireHomepage">
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

				<div class="statusHeaderText-Container">
					<h1 id="statusHeaderText">What's Up On OnlyPets...</h1>
				</div>

				{/* "side nav bar" */}
				<div class="secondNav">
					<div class="sec-nav-container">
						<h3 id="quickNavText">Quick Navigation...</h3>
						<div class="btn-group-vertical" id="moreSettingsButtonGroup">
							<Link to="/profile"><button class="button" id="profilePill">Profile</button> </Link>
							<Link to="/settings"><button class="button" id="settingsPill">Settings</button> </Link>
							<Link to="/home"><button class="button" id="pagesPill">Pages</button> </Link>
							<Link to="/profileFriends"><button class="button" id="friendsPill">Friends</button> </Link>
						</div>
					</div>

				</div>

				{/* User's Friends List */}
				<div class="user-contacts-container">
					<h5 id="contactsText">Friends</h5>
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

				{/* For ads (<br> = filler for now) */}
				<div class="ads-container">
					<h5 id="adTitleText">Advertisements</h5>
					<div class="internal-ad-container">
						<a class="nav-link" href="profile-about.html" id="create-ad-navlink">Create your own ad!<br /> (Rates and
							restrictions apply)</a>
					</div>
					<br />
					<br />
					<br />
					<br />
					<br />
					<br />
					<br />
					<br />
					<br />
					<br />
					<br />
					<br />
				</div>

				{/* new post : using cards */}
				<div class="status-container">
					<div class="card w-50 shadow p-3 mb-5 bg-white rounded" id="postCard">

						<div class="card-body">
							<h5 class="card-title" id="cardTitle">*Input Username Here</h5>

							<div class="col-xs-12" id="post_content">
								<div class="textarea_wrap"> <textarea class="col-xs-11" placeholder="What's on your mind?"
									id="editContent"></textarea> </div>
							</div>

							<a href="#"><span class="glyphicon glyphicon-camera" id="importPhoto"></span></a>
							
							<a href="#"><span class="glyphicon glyphicon-film" id="importVideo"></span></a>
							<button class="glyphicon glyphicon-heart" id="likeButton"></button>
							<button class="glyphicon glyphicon-pencil" id="commentButton"></button>

							<div class="dropdown">
								<button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown"
									aria-haspopup="true" aria-expanded="false">
									Privacy
								</button>
								<div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
									<a class="dropdown-item" href="#">Only Me</a>
									<a class="dropdown-item" href="#">Everyone</a>
									<a class="dropdown-item" href="#">Friends Only</a>
								</div>
							</div>
							<button id="postButton" class="btn btn-primary" onClick={publishStatus} >Publish</button>
						</div>
					</div>
				</div>

				<div id="chat-bubble">
					<div class="chat-container">
						<div class="chat-header">
							<div class="user-avatar" onClick={openChatBubble}>
								<div class="img-container">
									<img src="./icons/dogPhoto1 copy.jpg"></img>
								</div>
								<div class="user-status-info">
									<a href="#">Woof Smith</a>
									<p>Active now</p>
								</div>
							</div>
						</div>
					</div>

					<div class="chat-comm">
						<nav>
							<a href="#">
								<img src={video}></img>
							</a>
							<a href="#">
								<img src={call}></img>
							</a>
							<a href="#">
								<img src={settings}></img>
							</a>
							<a href="#" onClick={openChatBubble}>
								<img src={close}></img>
							</a>
						</nav>
					</div>

					{/* <div class="sender-me">
            <div class="my-message">
              Hello
            </div>
            <div class="seen-at">
              <img class="check" src={check}> Seen 8:00 AM</img>
            </div>
          </div> */}
				</div>

				{/* 
        <div class="chat-footer">
          <input type="textarea" placeholder="Type a message..."></input>
          <div class="chat-media">
            <nav>
              <a href="#">
                <img class="upload" src={upload} alt=""></img>
              </a>
              <a href="#">
                <img class="camera" src={camera} alt=""></img>
              </a>
            </nav>
            <a href="#">
              <img class="like" src={like}></img>
            </a>
          </div>
		  </div> */}


			</main>
		</div >
	)
}

function openChatBubble() {
	// doesnt give alert
	alert("open");
	var element = document.getElementById("chat-bubble");
	element.classList.toggle("open")
}

function toggle_light_mode() {
	var app = document.getElementsByTagName("MAIN")[0];
	if (localStorage.lightMode === "dark") {
		localStorage.lightMode = "light";
		app.setAttribute("light-mode", "light");
	} else {
		localStorage.lightMode = "dark";
		app.setAttribute("light-mode", "dark");
	}
}

function publishStatus() {
	alert("clicked");

	var privacyButton = document.getElementsByTagName("dropdownMenuButton");
	var publishButton = document.getElementsByTagName("postButton");
	var cameraIcon = document.getElementsByTagName("importPhoto");
	var videoIcon = document.getElementsByTagName("importVideo");
	var likeIcon = document.getElementsByTagName("likeButton");
	var commentIcon = document.getElementsByTagName("commentButton");
	var isClicked = new Boolean(true);

	if (isClicked === true){
		privacyButton.style.display = "none";
		publishButton.style.display = "none";
		likeIcon.style.display = "show";
		commentIcon.style.display = "show";
		cameraIcon.style.display = "none";
		videoIcon.style.display = "none";
	  } else {
		isClicked === false;
		privacyButton.style.display = "show";
		publishButton.style.display = "show";
		likeIcon.style.display = "none";
		commentIcon.style.display = "none";
		cameraIcon.style.display = "show";
		videoIcon.style.display = "show";
	  }
	


}





export default Homepage;