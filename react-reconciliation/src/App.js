import logo from './logo.svg';
import './App.css';
import LabelWrapper from './Label/LabelWrapper';
import { useState } from 'react';

function App() {
	const [items, setItems] = useState([
		{ name: 'AAA', id: 1 },
		{ name: 'BBB', id: 2 },
		{ name: 'CCC', id: 3 }
		// { name: 'AAA' },
		// { name: 'BBB' },
		// { name: 'CCC' }
	]);

	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<LabelWrapper></LabelWrapper>
				<a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
					Learn React
				</a>
				<ul>
					{items.map((item, index) => (
						// <li>{item.name}</li>
						// <li key={index}>{item.name}</li>
						<li key={item.id}>{item.name}</li>
					))}
				</ul>
				{/* <button onClick={() => setItems([...items, { name: 'DDD' }])}>Add Item</button> */}
				{/* <button onClick={() => setItems([{ name: 'DDD' }, ...items])}>Add Item</button> */}
				<button onClick={() => setItems([{ name: 'DDD', id: 4 }, ...items])}>Add Item</button>
			</header>
		</div>
	);
}

export default App;
