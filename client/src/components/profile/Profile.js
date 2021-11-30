import React from 'react'
import logWithBorder from '../../assests/logoWithBorder.jpg';
import dogPhoto1 from '../../assests/dogPhoto1.jpg';
import dogHeader from '../../assests/dogHeader.jpg';
import { Helmet } from "react-helmet";
import '../components.css';
import config from '../../utils/config';
const axios = require('axios').default;
const apiURL = config.baseUrl;

const Profile = () => {
    return (
        <div>
            <Helmet>
                <meta charset="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="" />
                <title>OnlyPets User Profile</title>
                <script dangerouslySetInnerHTML={{ __html: script() }} type="text/javascript" />
            </Helmet>

            <main class="entire-profilepage">
                {/* Navbar */}
                <div class="navbar">
                    <nav class="navbar navbar-expand-lg navbar-light bg-light">
                        <img src={logWithBorder} alt="Logo" class="logo" id="logo" />
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
                            <button class="btn btn-primary" id="coverphotobutton" onclick="myFunction">Edit Cover Photo</button>
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
                        <div class="card shadow p-3 mb-5 bg-white rounded" id="bioCard">
                            <div class="profiledetails-left">
                                <div class="profiledetails-row">
                                    <img src={dogPhoto1} class="profile-img" alt="small dog sitting on a floor" />
                                    <div>
                                        <h3 id="friendsname">Woof Smith</h3>
                                        <p id="friendsdetails">2 Friends - 1 mutual</p>
                                    </div>
                                </div>


                            </div>

                            <div class="profiledetails-right">

                                <button type="button" class="glyphicon glyphicon-plus "> Friend </button>
                                <button type="button" class="glyphicon glyphicon-envelope"> Message </button>
                                <button type="button" class="glyphicon glyphicon-option-vertical"> </button>
                                {/* <a class="glyphicon glyphicon-option-vertical"></a> */}
                            </div>
                        </div>

                        <div class="profileinfo">
                            <div class="info-col"></div>
                            <div class="post-col">
                                <div class="card w-50 shadow p-3 mb-5 bg-white rounded" id="profilepostCard">
                                    {/*  card's body */}
                                    <div class="-profile-card-body">
                                        <h5 class="card-title" id="cardTitle">*Input Username Here</h5>

                                        <div class="col-xs-12" id="post_content">
                                            <div class="textarea_wrap"> <textarea class="col-xs-11"
                                                placeholder="What's on your mind?" id="editContent"></textarea> </div>
                                        </div>

                                        <a href="#"><span class="glyphicon glyphicon-camera" id="importPhoto"></span></a>
                                        <a href="#"><span class="glyphicon glyphicon-film" id="importVideo"></span></a>

                                        <div class="dropdown">
                                            <button class="btn btn-primary dropdown-toggle" type="button"
                                                id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true"
                                                aria-expanded="false"> Privacy </button>

                                            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                <a class="dropdown-item" href="#">Only Me</a>
                                                <a class="dropdown-item" href="#">Everyone</a>
                                                <a class="dropdown-item" href="#">Friends Only</a>
                                            </div>
                                        </div>
                                        <button class="btn btn-primary" id="publishPostButton">Publish</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* cover image insert */}
                        {/* <form action="/action_page.php">
                        <label for="img" id="coverimagetext">Cover Image</label> */}
                        {/* <input type="file" id="img" name="img" accept="image/*">
                    </form>  */}
                    </div>
                    {/* new post : using cards */}
                    {/* <div class="card shadow p-3 mb-5 bg-white rounded" id="bioCard"> */}
                </div>
                {/* JS for adding cover photo */}
                {/* JS for publishing status */}
            </main >
        </div >
    )
}

const script = () => {
    window.onload = function () {
    }
}

export default Profile;