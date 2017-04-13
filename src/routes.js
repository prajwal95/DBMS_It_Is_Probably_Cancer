import React, { Component } from 'react';
import { Route, browserHistory, Router, IndexRoute } from 'react-router';
import Login from './navbar';
import AccountInfo from './account';
import Search from './search';
import FoodLog from './FoodLog'

const routes = (
	<Router history={browserHistory}>
		<Route path='/' component={Home} />
		<Route path='/account' component={AccountInfo} />
		<Route path='/foods' component={Search} />
		<Route path='/log' component={FoodLog} />
		<Route component={Login} />
	</Router>
);

const Home = () => <h1>LANDING PAGE</h1>;

module.exports = routes;