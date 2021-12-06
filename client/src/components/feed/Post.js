import React, { useState } from 'react'
import { withTheme } from 'styled-components'

const Post = ({ post }) => {
	const postStyle = {
		paddingTop: 10,
		paddingLeft: 2,
		border: 'solid',
		borderRadius: 10,
		borderWidth: 1,
		borderColor: "white",
		marginBottom: 5,
		width: 400,
		justifyContent: 'center',
		backgroundColor: "white",
		boxShadow: "1px 3px 1px #adadad",
	}

	const [detailsVisible, setDetailsVisible] = useState(true)

	/*
	const addLikeToPost = (PostToUpdate) => {
		const updatedPost = {
			id: PostToUpdate.id,
			title: PostToUpdate.title,
			author: PostToUpdate.author,
			url: PostToUpdate.url,
			likes: Post.likes + 1
		}
		likeButtonClickHandler(updatedPost)
	}
	

	const removePost = (PostToRemove) => {
		const result = window.confirm(`Remove Post: ${PostToRemove.title}`);
		if(result)
			removeButtonClickHandler(PostToRemove)
	}
	
*/
	const showDetails = (visible) => {
		if (visible) {
			return (
				<div>
					{post.post_content} <br />
					{post.post_timestamp.slice(0, 10)} <br />
					{'likes: '} {post.likes.length}
					{/*
					<button id={'likeButton'} onClick={() => addLikeToPost(Post)} type='submit'>like</button> <br />
					<button id={'removePostButton'} onClick={() => removePost(Post)} type='submit'>remove</button>
					*/}
				</div>
			)
		} else {
			return (<span></span>)
		}
	}

	return (
		<div className={'post'} style={postStyle}>
			<div>
				<h5>{post.author}</h5>
				<button id={'detailsButton'} onClick={() => setDetailsVisible(!detailsVisible)} type='button'class="
glyphicon glyphicon-chevron-down"></button>
			</div>
			{showDetails(detailsVisible)}
		</div>
	)
}

export default Post;