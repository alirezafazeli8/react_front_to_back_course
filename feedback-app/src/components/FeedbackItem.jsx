import { AiFillCloseCircle } from 'react-icons/ai';
import Card from './shared/Card';
import PropTyeps from 'prop-types';

function FeedbackItem(props) {
	return (
		<Card>
			<div className="num-display">{props.feed.rating}</div>

			<button
				onClick={() => props.handleClick(props.feed.id)}
				className="close"
			>
				<AiFillCloseCircle color="white"></AiFillCloseCircle>
			</button>

			<div className="text-display">{props.feed.text}</div>
		</Card>
	);
}

FeedbackItem.propTypes = {
	feed: PropTyeps.object,
};

export default FeedbackItem;
