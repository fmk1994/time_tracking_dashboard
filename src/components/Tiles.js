import React from 'react';
import Tile from './Tile';
import '../styles/TilesStyles.css';

function Tiles({ data, range }) {
	const titles = [];

	data.map((category) => {
		titles.push(category.title);
	});

	return (
		<div className='tilesWrapper'>
			{titles.map((title, idx) => {
				return <Tile range={range} index={idx} data={data} key={title} />;
			})}
		</div>
	);
}

export default Tiles;
