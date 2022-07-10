import React, { useEffect } from 'react';
import '../styles/App.css';
import UserTile from './UserTile';
import Tiles from './Tiles';
import axios from 'axios';

function App() {
	const [data, setData] = React.useState([]);
	const [range, setRange] = React.useState('weekly');
	useEffect(() => {
		const daily = document.querySelector('#daily');
		const weekly = document.querySelector('#weekly');
		const monthly = document.querySelector('#monthly');
		if (range === 'daily') {
			daily.classList.add('active');
			weekly.classList?.remove('active');
			monthly.classList?.remove('active');
		}
		if (range === 'weekly') {
			weekly.classList.add('active');
			daily.classList?.remove('active');
			monthly.classList?.remove('active');
		}
		if (range === 'monthly') {
			monthly.classList.add('active');
			weekly.classList?.remove('active');
			daily.classList?.remove('active');
		}
	}, [range]);

	const handleClick = (e) => {
		setRange(e.target.id);
	};
	useEffect(() => {
		axios
			.get('data.json')
			.then((res) => setData(res.data))
			.catch((err) => console.log(err));
	}, []);

	return (
		<div className='appWrapper'>
			<UserTile range={range} handleClick={handleClick} />
			<Tiles data={data} range={range} />
		</div>
	);
}

export default App;
