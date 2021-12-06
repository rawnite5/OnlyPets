import React, { useState, useEffect } from 'react'
const axios = require('axios').default;
const apiURL = config.baseUrl;
import config from '../../utils/config';
// import React, { useState } from 'react'

const Post = ({ post }) => {
	const [author, setAuthor] = useState({})

	useEffect(() => {
		axios.get(`${apiURL}/profile/`)
			.then(response => {
				let profiles = response.data.data;
				for (let i = 0; i < profiles.length; i++) {
					if (profiles[i].id === post.author) {
						setAuthor(profiles[i]);
						break;
					}
				}
			})
			.catch(error => console.log(error))
	}, [])

	const postStyle = {
		paddingTop: 10,
		paddingLeft: 2,
		border: 'solid',
		borderRadius: 5,
		borderWidth: 1,
		borderColor: "white",
		marginBottom: 5,
		width: 400,
		justifyContent: 'center',
		backgroundColor: "white",
		boxShadow: "1px 3px 1px #adadad",
		// position: "absolute",
		// left: 500,
		// bottom: 300,
	}

	const [detailsVisible, setDetailsVisible] = useState(false)


	const addLikeToPost = (PostToUpdate) => {
		// author: window.sessionStorage.getItem("userId"),
	}


	const removePost = (PostToRemove) => {
		const result = window.confirm(`Remove Post: ${PostToRemove.post_content}`);

		if (result) {
			axios.delete(`${apiURL}/home/${PostToRemove.post_content}`)
				.then(response => {
					
				})
				.catch(error => console.log(error))
		}
	}

	const showDetails = (visible) => {
		if (visible) {
			return (
				<div>
					{author.username} <br />
					{post.post_timestamp.slice(0, 10)} <br />
					{'likes: '} {post.likes.length} <br />
					<button id={'likeButton'} onClick={() => addLikeToPost(post)} type='submit'>like</button>
					<button id={'removePostButton'} onClick={() => removePost(post)} type='submit'>remove</button>
				</div>
			)
		} else {
			return (<span></span>)
		}
	}

	return (
		<div className={'post'} style={postStyle} id="postedStatus">
			<div>
				<h5>{post.post_content}</h5>
				<button id={'detailsButton'} onClick={() => setDetailsVisible(!detailsVisible)} type='button' class="
glyphicon glyphicon-chevron-down"></button>
			</div>
			{showDetails(detailsVisible)}
		</div>
	)
}

export default Post;