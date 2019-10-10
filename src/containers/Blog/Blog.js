import React, { Component } from 'react'
import { Route, NavLink, Switch, Redirect } from 'react-router-dom'

import Posts from './Posts/Posts'
import NewPost from './NewPost/NewPost'
import './Blog.css'

class Blog extends Component {
	state = {
		auth: false
	}
	render () {
		return (
			<div>
				<header className="Blog">
					<nav>
						<ul>
							<li><NavLink
								exact
								to="/posts/"
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
				<Switch>
					{this.state.auth ? <Route path="/new-post" component={NewPost}/> : null}
					<Route path="/posts" component={Posts}/>
					<Route render={() => <h1>404 NOT FOUND</h1>} />
					{/* <Redirect from="/" to="posts" /> */}
				</Switch>
			</div>
		)
	}
}

export default Blog
