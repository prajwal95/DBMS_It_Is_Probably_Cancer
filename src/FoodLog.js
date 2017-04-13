import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import navbar from './navbar';
var ReactRouter = require('react-router');
import {Table} from 'react-bootstrap'


var FoodLog = React.createClass({
	render: function() {
		//alert('in foodlog');
		return(
			<div>
				<Table responsive striped bordered condensed hover> 
					<thead>
					  <tr>
						<th>Meal</th>
						<th>Food</th>
						<th>Quantity</th>
					  </tr>
					</thead>
					<tbody>
					  <tr>
						<td>Breakfast</td>
						<td>xxxxxxx</td>
						<td>1</td>
					  </tr>
					</tbody>
				</Table>
			</div>
		);
	}
});

module.exports = FoodLog;