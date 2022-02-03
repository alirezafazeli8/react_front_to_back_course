import Card from './shared/Card';
import PropTyeps from 'prop-types';

function FeedbackItem(props) {
	return (
		<Card>
			<div className="num-display">{props.feed.rating}</div>
			<div className="text-display">{props.feed.text}</div>
		</Card>
	);
}

FeedbackItem.propTypes = {
	feed: PropTyeps.object,
};

export default FeedbackItem;
