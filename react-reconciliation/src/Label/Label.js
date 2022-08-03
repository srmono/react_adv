import React from 'react';

class Label extends React.Component {
	componentDidMount() {
		console.log('Label created');
	}

	render() {
		return <code>Edit src/App.js and save to reload.</code>;
	}
}

export default Label;
