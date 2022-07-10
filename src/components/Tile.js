import React from 'react';
import Ellipsis from '../images/icon-ellipsis.svg';
import '../styles/TileStyles.css';
function Tile({ data, index, range }) {
	return (
		<>
			<main className={`tile ${data[index].title.toLowerCase()}`}>
				<div className='content'>
					<div className='category'>
						<span>{data[index].title}</span>
						<img src={Ellipsis} alt=''></img>
					</div>
					{range === 'daily' && (
						<>
							<div className='hours'>
								{data[index].timeframes.daily.current}hrs
							</div>
							<div className='totalHours'>
								Last Day - {data[index].timeframes.daily.previous}hrs
							</div>
						</>
					)}
					{range === 'weekly' && (
						<>
							<div className='hours'>
								{data[index].timeframes.weekly.current}hrs
							</div>
							<div className='totalHours'>
								Last Week - {data[index].timeframes.weekly.previous}hrs
							</div>
						</>
					)}
					{range === 'monthly' && (
						<>
							<div className='hours'>
								{data[index].timeframes.monthly.current}hrs
							</div>
							<div className='totalHours'>
								Last Month - {data[index].timeframes.monthly.previous}hrs
							</div>
						</>
					)}
				</div>
			</main>
		</>
	);
}

export default Tile;
