import React from 'react'
import logWithBorder from '../../assests/logoWithBorder.jpg';
import dogHeader from '../../assests/dogHeader.jpg';
import { Helmet } from "react-helmet";
import '../components.css';
import config from '../../utils/config';
import textlogo from '../../assests/textLogo.jpg';
const axios = require('axios').default;
const apiURL = config.baseUrl;

const ProfileAbout = () => {
	return (
		<div>
			<Helmet>
				<meta charset="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta name="description" content="" />
				<title>OnlyPets About</title>
				<script dangerouslySetInnerHTML={{ __html: script() }} type="text/javascript" />
			</Helmet>

			<main class="entire-profilepage">
				{/*  Navbar */}
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
						<a class="nav-link glyphicon glyphicon-envelope" href="messages.html" id="messages"> <span
							class="sr-only"></span></a>
						<a class="nav-link glyphicon glyphicon-log-out" href="index.html" id="logout"><span
							class="sr-only"></span></a>


						<div class="search-bar">
							<input id="search" type="search" class="form-control" />
						</div>

						<a href="search.html"><span class="glyphicon glyphicon-search"></span></a>

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
								<a class="nav-link" href="profile-about.html" id="profile-about">| About |</a>
								<a class="nav-link" href="profile.html" id="profile-posts">| Posts |</a>
								<a class="nav-link" href="profile-friends.html" id="profile-friends">| Friends |</a>
								<a class="nav-link" href="profile-pictures.html" id="profile-photos">| Photos |</a>

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

					<div class="profile-details">
						<div class="card shadow p-3 mb-5 bg-white rounded" id="AboutCard">
							<div class="profiledetails-left">
								<div class="profiledetails-row">
									<div>
										<h3 id="AboutCardTitle">Overview of Woof Smith</h3>
										<button class="btn btn-light" id="editOverview">Edit</button>
									</div>
								</div>
							</div>
						</div>

						<div class="profiledetails-right">
							<div class="card shadow p-3 mb-5 bg-white rounded" id="IntroCard">
								<div>
									<h3 id="IntroCardTitle">Introductory</h3>
									<button class="btn btn-light" id="editIntroButton">Edit</button>
								</div>
							</div>
						</div>
					</div>

					<div class="profiledetails-bottom">
						<div class="card shadow p-3 mb-5 bg-white rounded" id="AnotherBioCard">
							<div class="btn-group-vertical" id="profileCardButtonGroup">
								<button class="btn btn-light" id="bioPlacesButton"> Places Lived</button>
								<button class="btn btn-light" id="bioWorkButton"> Work & Education</button>
								<button class="btn btn-light" id="bioContactButton"> Contact Information</button>
							</div>
						</div>
					</div>
				</div>
			</main>
		</div>
	)
}

const script = () => {
	window.onload = function () {
	}
}

export default ProfileAbout;