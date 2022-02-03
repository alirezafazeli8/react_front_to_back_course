import React from 'react';

function Card(props) {
	return (
		<div className={`card ${props.reverse && 'reverse'}`}>{props.children}</div>
	);
}

// set default props to my card components
Card.defaultProps = {
	reverse: true,
};

export default Card;
