import React from 'react';

const Scroll = (props) => {
	return (
			<div style = {{overflowY: 'scroll', border: '2px solid orange', height: '650px', width: '1400px', margin: '50px 250px 50px 250px'}}>
				{props.children}
			</div>
		)
}

export default Scroll;