import React, { Component } from 'react'
import { Route, NavLink, Switch, Redirect } from 'react-router-dom'

import './Blog.css'
import Posts from './Posts/Posts'
// import NewPost from './NewPost/NewPost'
import asyncComponent from '../../hoc/asyncComponent'

const AsyncNewPost = asyncComponent(() => {
	return import('./NewPost/NewPost')
})

class Blog extends Component {
	state = {
		auth: true
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
					{this.state.auth ? <Route path="/new-post" component={AsyncNewPost}/> : null}
					<Route path="/posts" component={Posts}/>
					<Route render={() => <h1>404 NOT FOUND</h1>} />
					{/* <Redirect from="/" to="posts" /> */}
				</Switch>
			</div>
		)
	}
}

export default Blog

// import React, { Component, Suspense } from 'react
// const Posts = React.lazy(() => import('path'))
// <Suspense fallback={<h1>Loading</h1>}><Posts /></Suspense>