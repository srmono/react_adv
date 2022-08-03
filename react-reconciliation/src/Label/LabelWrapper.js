import React from 'react';
import Label from './Label';

class LabelWrapper extends React.Component {
	constructor(props) {
		super(props);
		this.state = { label: true };
	}

	componentDidMount() {
		console.log('Label wrapper created');
		setInterval(() => {
			this.setState({ label: !this.state.label });
		}, 2000);
	}

	render() {
		return (
			<div>
				{this.state.label ? (
					<p title={`${this.state.label}`}>
						<Label></Label>
					</p>
				) : (
					// <div title={`${this.state.label}`}>
					// 	<Label></Label>
					// </div>
					<p title={`${this.state.label}`}>
						<Label></Label>
					</p>
				)}
			</div>
		);
	}
}

export default LabelWrapper;
