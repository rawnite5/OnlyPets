import React from 'react'
import logWithBorder from '../../assests/logoWithBorder.jpg';
import { Helmet } from "react-helmet";
import './LoginPage.css';
import config from '../../utils/config';

const apiURL = config.baseUrl;

const LoginPage = () => {
	return (
		<div>
			<Helmet>
				<meta charset="utf-8" />
				<meta content="width=device-width, initial-scale=1" name="viewport" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<title>OnlyPets Login</title>

				<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css" rel="stylesheet"
					integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU" crossorigin="anonymous" />
				<script dangerouslySetInnerHTML={{ __html: loginScript() }} type="text/javascript" />


				{/* NEED SERVER */}
				{/*
				<script src="https://apis.google.com/js/platform.js" async defer></script>
				<meta name="google-signin-client_id" content="YOUR_CLIENT_ID.apps.googleusercontent.com" />
				*/}
			</Helmet>

			<main className="form-homepage">
				<div className="form-signin">
					<form>

						{/*  Login: Title */}
						<div className="form-login">
							<h1>Login</h1>
						</div>
						{/* Login: Email Address  */}
						<div className="form-login">
							<label htmlFor="floatingInput">Email address: </label>
							<input type="email" className="form" id="emailLoginInput" placeholder="name@example.com" required />
						</div>
						{/* Login: Password  */}
						<div className="form-login">
							<label htmlFor="floatingPassword">Password: </label>
							<input type="password" className="form" id="passwordLoginInput" placeholder="Password" required />
						</div>

						{/* Login: Remember Me  */}
						<div className="form-login checkbox mb-3">
							<label><input type="checkbox" value="remember-me" /> Remember me</label>
						</div>

						{/* Login: Button */}
						<button className="btn btn-outline-success" type="button" id="loginButton">Sign in</button>

						{/* Login: Forgot Password Button */}
						<button className="btn btn-link btn-sm" type="button" id="forgotPasswordButton">Forgot Password</button>
					</form>

					{/* NEED SERVER TO SHOW Sign in with Google */}
					<div className="g-signin2" data-onsuccess="onSignIn"></div>
					{/* <a href="#" onclick="signOut();">Sign out</a> */}
					<a href="https://luddy.indiana.edu/contact/profile/?Adeel_Bhutta" >Sign out</a>

				</div>

				{/* Logo */}
				<div className="logo">
					<img src={logWithBorder} alt="Logo" className="logo" />
				</div>

				{/* Register */}
				<div className="form-registration">
					<form id="registerForm">

						{/* Register: title */}
						<div className="form-reg">
							<h1>Register</h1>
						</div>

						{/* Register: Pet's Name */}
						<div className="form-reg">
							<label htmlFor="floatingInput">Your Pet's Name:*</label>
							<input type="Name" className="form" id="petNameInput" placeholder="ex. Guinness" required />

						</div>

						{/* Register: Email Address */}
						<div className="form-reg">
							<label htmlFor="floatingInput">Email Address: *</label>
							<input type="email" className="form" id="emailInput" placeholder="name@example.com" required />

						</div>
						{/* Register: Confirm Email Address */}
						<div className="form-reg">
							<label htmlFor="floatingInput">Confirm Email Address: *</label>
							<input type="email" className="form" id="confirmEmailInput" placeholder="name@example.com" required />

						</div>

						{/* Register: Password */}
						<div className="form-reg">
							<label htmlFor="floatingPassword">Password: *</label>
							<input type="password" className="form" id="passwordInput" placeholder="Password" required />

						</div>

						{/* Register: Date of Birth */}
						<div className="form-reg">
							<label htmlFor="birthday">Birthday: *</label>
							<input type="date" id="birthday" name="birthday" required />

						</div>


						{/* Register : Security Question */}
						<div className="form-reg">
							<label htmlFor="Security_Question">Security Question: *</label>

							<select name="security_question" id="security_q" required>
								<option value="question1">In what city were you born?</option>
								<option value="question2">What is the name of your favorite pet?</option>
								<option value="question3">What is your oldest sibling's middle name?</option>
								<option value="question4">What is your maternal grandmother's maiden name?</option>
								<option value="question5">What is your favorite sport?</option>
								<option value="question6">In what year was your father born?</option>

							</select>
						</div>
						{/* Register: Security Question Answer*/}
						<div className="form-reg">
							<label htmlFor="sq_answer">Answer: *</label>
							<input type="answer" id="answer" name="answer" required />
						</div>


						{/* Register: Species of Pet */}
						<div className="form-reg">
							<label htmlFor="Type_of_Pet">Type of Pet: *</label>
							<select name="Animal" id="animals" required>

								<option value="Mammal">Mammal</option>
								<option value="Bird">Bird</option>
								<option value="Reptiles">Reptiles</option>
								<option value="Ampibians">Ampibians</option>
								<option value="Fish">Fish</option>
								<option value="Invertebrates">Invertebrates</option>

							</select>
						</div>

						{/* Register: Breed */}
						<div className="form-reg">
							<label htmlFor="breed">Breed (if applicable): </label>
							<input type="breed" id="breed" name="breed" placeholder="ex. Pomeranian" />
						</div>

						{/* Register : Submit Button*/}
						<button className="btn btn-outline-success" type="button" id="registerPetButton">Register Your Pet!</button>
					</form>
				</div>
			</main >
		</div >
	)
}

const loginScript = () => {
	window.onload = function () {
		let emailLogin = document.querySelector("#emailLoginInput");
		let passwordLogin = document.querySelector("#passwordLoginInput");
		let loginButton = document.querySelector("#loginButton");

		let petName = document.querySelector("#petNameInput");
		let email = document.querySelector("#emailInput");
		let confirmEmail = document.querySelector("#confirmEmailInput");
		let password = document.querySelector("#passwordInput");
		let registerButton = document.querySelector("#registerPetButton");

		registerButton.addEventListener("click", event => {
			event.preventDefault();

			if (!petName.value || !password.value || !email.value) {
				alert("Please enter all the required information");
				return;
			};

			if (email.value !== confirmEmail.value) {
				alert("Email addresses do not match");
				return;
			};

			// put the data being sent in an object to be converted to JSON
			const data = {
				username: email.value,
				password: password.value,
			};

			// send the request to the register API with the data
			fetch(`${apiURL}/register`, {
				method: 'POST',
				body: JSON.stringify(data),
				headers: {
					'Content-type': 'application/json',
					'Accept': 'application/json'
				}
			})
				.then(response => response.json()
				/*
				{
					console.log(response);
					
				} */)
				.then(json => {
					console.log(json);

					if (json.message === "A user with this username already exists") {
						alert("A user with that name already exists");
					} else {
						alert("You have been registered and logged in");
					}
				});
		});

		loginButton.addEventListener("click", event => {
			event.preventDefault();

			// didnt give us info for something
			if (!emailLogin.value || !passwordLogin.value) {
				alert("Please enter in all of your login info");
				return;
			};

			// put the data being sent in an object to be converted to JSON
			const data = {
				username: emailLogin.value,
				password: passwordLogin.value,
			};

			// send the request to the login API with the data
			fetch(`${apiURL}/login`, {
				method: 'POST',
				body: JSON.stringify(data),
				headers: {
					'Content-type': 'application/json',
					'Accept': 'application/json'
				}
			})
				.then(response => {
					console.log(response);
					response.json()
				})
				.then(json => {
					console.log(json);

					if (json.message === "Invalid User") {
						alert("Invalid username or password");
					} else {
						alert("You have been logged in");
					}
				});
		});
	}
}

export default LoginPage