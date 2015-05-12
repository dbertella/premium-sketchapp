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
	},
];

var _ = require('lodash');

var categories = _.pluck(data, 'categories');

console.log(categories);



// var Detail = React.createClass({
// 	showDetail: function () {
// 		// var activeDocuments = document.querySelectorAll('.active');
// 		// console.log(activeDocuments.length);
// 		// if (activeDocuments.length > 0) {
// 		// 	//.classList.remove('active');
// 		// 	[].forEach.call(document.querySelectorAll('.detail'), function(item) {
// 		// 	    item.listClass.remove('active');
// 		//     });
				
// 		// }
// 		this.setState({
// 			active: true
// 		});

// 	},
// 	hideDetail: function () {
// 		this.setState({
// 			active: false
// 		});
// 	},
// 	getInitialState: function() {
// 		return { 
// 			active: false 
// 		};
// 	},
// 	render: function () {
		
// 	    // <img src={this.props.imgListing} />
// 	    var cx = React.addons.classSet;
// 	    var className = cx({
// 			"detail": true,
// 			"active": this.state.active
//         });
// 	    return (
// 	    	<div className={className} onClick={this.showDetail}>
// 	    		<Box title={this.props.title} subTitle={this.props.subTitle} imgListing={this.props.imgListing} />
// 	    		<div className="single-detail">
// 	    			<header>
// 	    				<a onClick={this.hideDetail}>Home</a>
// 	    				<div className="heading">POWER</div>
// 	    			</header>
// 	    			<section>
// 	    				<img src="img/scheda_01.jpg" alt="" />
// 	    				<img src="img/scheda_02.jpg" alt="" />
// 	    			</section>
// 	    		</div>
// 	    	</div>
// 	    );
// 	}
// });

// var Box = React.createClass({
// 	render: function(){
// 		var style = {
// 			backgroundImage: "url(" + this.props.imgListing + ")"
// 		}; 
// 		return (
// 			<div className="box">
// 				<div className="img" style={style}></div>
// 		    	<div className="box-heading">
// 			    	<h3>{this.props.title}</h3>
// 			    	<p>{this.props.subTitle}</p>
// 		    	</div>
// 			</div>
// 		);
// 	}
// });

var Main = React.createClass({
	// style={style} onTouchStart={this.onTouchStart} onTouchMove={this.onTouchMove} onTouchEnd={this.onTouchEnd}

	render: function () {
		
		var style = {
			width: (this.props.data.length) * 16.875 + "em"
		};

		return (
			<section>
				<aside>
					<section class="category">
						<ul>{ this.props.categories.map(function (cat) {
							
								return <li>{ cat }</li>;
						}, this)}</ul>
					</section>
				</aside>
				<section>{ this.props.freebies.map(function (freebie) {
					return <Box />;
				}, this)}</section>
			</section>
		);
	}
});

React.render(<Main frebies={ data }  />, document.getElementById('main'));
