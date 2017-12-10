import React from 'react'

export default class Logo extends React.Component
{
	render()
	{
		const styles =
		{
			logoStyle:
			{
				margin: 'auto',
				width: '153'
			}
		}
		return (
				<div>
					<div style = {styles.logoStyle}>
						<img src = '/images/Brown.png' class = 'center-block' />
					</div>
				</div>
		);
	}
}
