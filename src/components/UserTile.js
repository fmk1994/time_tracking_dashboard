import React from 'react';
import Image from '../images/image-jeremy.png';
import '../styles/UserTileStyles.css';

function UserTile({ handleClick }) {
	const buttons = ['Daily', 'Weekly', 'Monthly'];

	return (
		<main className='userTile'>
			<section className='sectionPerson'>
				<img src={Image} alt='User'></img>
				<div>
					<span>Report for</span>
					<span className='personName'>Jeremy Robson</span>
				</div>
			</section>
			<section className='sectionTime'>
				{buttons.map((button) => {
					return (
						<button
							id={button.toLowerCase()}
							key={button.toLowerCase()}
							className={`button ${button.toLowerCase()}`}
							onClick={handleClick}
						>
							{button}
						</button>
					);
				})}
			</section>
		</main>
	);
}

export default UserTile;
