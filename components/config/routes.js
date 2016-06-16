var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var Route = ReactRouter.Route;
var Router = ReactRouter.Router;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.hashHistory;

//import{Router, Route, hashHistory, IndexRoute} fro 'react-router';

var Main = require('./../main.js');
var Home = require('./../home.js');
var AboutMe = require('./../aboutme.js');
var Portfolio = require('./../portfolio.js');
var Contact = require('./../Contact');
var Journal = require('./../Journal');



ReactDOM.render(
	<Router history={hashHistory}>
		<Route path = '/' component={Main}>
		<IndexRoute component={Home}/>
		<Route path = '/aboutme' component={AboutMe}/>
		<Route path = '/portfolio' component={Portfolio}/>
		<Route path = '/contact' component={Contact}/>
		<Route path = '/journal' component={Journal}/>
		</Route>
	</Router>, 
	document.getElementById('app')
	);