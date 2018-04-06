import React from 'react';

const Scroll = (props) => {
	return (
			<div style = {{overflowY: 'scroll', border: '2px solid orange', height: '650px'}}>
				{props.children}
			</div>
		)
}

export default Scroll;