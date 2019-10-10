import React, { Component } from 'react'
import { Route, NavLink, Switch } from 'react-router-dom'

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
							<li><NavLink
								exact
								to="/"
								activeClassName="active"
								activeStyle={{
									textDecoration: "underline"
								}}>Home</NavLink></li>
							<li><NavLink to={{
								pathname: '/new-post',
								hash: '#submit',
								search: '?quick-submit=true'
							}}>New Post</NavLink></li>
						</ul>
					</nav>
				</header>
				<Route path="/" exact component={Posts}/>
				<Switch>
					<Route path="/new-post" component={NewPost}/>
					<Route path="/:id" exact component={FullPost}/>
				</Switch>
			</div>
		)
	}
}

export default Blog
