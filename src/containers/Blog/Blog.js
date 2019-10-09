import React, { Component } from 'react'

import Posts from './Posts/Posts'
import FullPost from './FullPost/FullPost'
import NewPost from './NewPost/NewPost'
import './Blog.css'

class Blog extends Component {
	render () {
		return (
			<div>
				<header className="Blog">
					<nav>
						<ul>
							<li><a href="/">Home</a></li>
							<li><a href="/">New Post</a></li>
						</ul>
					</nav>
				</header>
				<Posts />
			</div>
		)
	}
}

export default Blog
