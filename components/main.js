var React = require('react');
var Link = require('react-router').Link;

var Main = React.createClass({
	render: function(){
		return (
			<div>
				<div className="container allthings">
					<h1 className="myname">Jeslyn L. Tweedie</h1>
					
					
					
					<Link to='/'>
						<button className=" mybutton btn btn-warning btn-lg">Home</button>
					</Link>
					<Link to='/aboutme'>
						<button className=" mybutton btn btn-info btn-lg">Meet Jeslyn</button>
					</Link>
					<Link to='/portfolio'>
						<button className=" mybutton btn btn-warning btn-lg">Portfolio</button>
					</Link>
					<Link to='/contact'>
						<button className=" mybutton btn btn-info btn-lg">Contact</button>
					</Link>
					<Link to='/journal'>
						<button className=" mybutton btn btn-warning btn-lg">Journal</button>
					</Link>

					{this.props.children}

				</div>	
			</div>
			)
	}
});

module.exports = Main;