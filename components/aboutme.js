var React = require('react');

var AboutMe = React.createClass({
	render: function(){
		return (
		<div>
			<div className= "aboutcontent">
			Nomadic by nature.
			<p className = "popart">Fascinated by the creative blend of art and technology.</p>
			<p>Montana Code School Student</p>
			<p>Location: Bozeman, MT</p>


			</div>
		</div>
			)
	}
});

module.exports = AboutMe;