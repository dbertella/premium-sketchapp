var data = [
	{
	  'id': 1,
	  'freebieImage': '',
	  'title': 'Amazing free resources',
	  'authorName': 'Jhon Doe',
	  'shortDescription': 'Media App UI Kit',
	  'completeDescription': 'Media App UI Kit',
	  'gallery': {},
	  'fileUrl': '',
	  'categories': ['Statistics', 'Music'],
	  'likes': 10
	},
	{
	  'id': 2,
	  'freebieImage': '',
	  'title': 'Material Design Music Player',
	  'authorName': 'Jhon Doe',
	  'shortDescription': 'A great new freebie from John who had the ability to imagine ',
	  'completeDescription': 'A great new freebie from John who had the ability to imagine ',
	  'gallery': {},
	  'fileUrl': '',
	  'categories': ['Images', 'Music'],
	  'likes': 5
	},
	{
	  'id': 3,
	  'freebieImage': '',
	  'title': 'Dashboard UI Elements',
	  'authorName': 'Jhon Doe',
	  'shortDescription': 'Dashboard displaying various type of applications design...',
	  'completeDescription': 'Dashboard displaying various type of applications design...',
	  'gallery': {},
	  'fileUrl': '',
	  'categories': ['Images', 'Data', 'Statistics', 'Music'],
	  'likes': 4
	},
	{
	  'id': 4,
	  'freebieImage': '',
	  'title': 'Whatsapp concept for OS X',
	  'authorName': 'Jhon Doe',
	  'shortDescription': 'A gorgeous concept design for the famous chat app only mob...',
	  'completeDescription': 'A gorgeous concept design for the famous chat app only mob...',
	  'gallery': {},
	  'fileUrl': '',
	  'categories': ['Music'],
	  'likes': 15
	},
	{
	  'id': 5,
	  'freebieImage': '',
	  'title': 'Material Design Music Player',
	  'authorName': 'Jhon Doe',
	  'shortDescription': 'A great new freebie from John who had the ability to imagine ',
	  'completeDescription': 'A great new freebie from John who had the ability to imagine ',
	  'gallery': {},
	  'fileUrl': '',
	  'categories': ['Images', 'Data', 'Statistics', 'Music'],
	  'likes': 25
	}
];


import React from 'react'
import _ from 'lodash'
// var _ = require('lodash');


let Box = React.createClass({
	render: function () {
		return (
			<div>
				<div className="img">{this.props.img}</div>
				<div className="info">
				  <h1>{this.props.title}</h1>
				  <p>{this.props.shortDescription}</p>
				  <div>{this.props.cat.map(function (category) {
				  	return <span>{category}</span>;
				  })}</div>
				  <div>{this.props.likes}</div>
				</div>
			</div>
		);
	}
});

let Freebies = React.createClass({
	// style={style} onTouchStart={this.onTouchStart} onTouchMove={this.onTouchMove} onTouchEnd={this.onTouchEnd}
	// <section>{ this.props.freebies.map(function (frebeie) {
	// 	return <Box />;
	// }, this)}</section>
	render: function () {
		var categories = [];
		_.forEach(_.pluck(data, 'categories'), function (n) {
			_.forEach(n, function (v) {
				categories.push(v);
			});
		});

		categories = _.uniq(categories);
		console.log(data)
		return (
			<section>
				<aside>
					<section className="category">
						<ul>{ categories.map(function (cat) {
							return <li>{ cat }</li>;
						}, this)}</ul>
					</section>
				</aside>
				<section>{ data.map(function (f) {
					return <Box title={ f.title } shortDescription={f.shortDescription} img={f.freebieImage} cat={f.categories} likes={f.likes} />;
				}, this)}</section>
			</section>
		);
	}
});

export default Freebies;