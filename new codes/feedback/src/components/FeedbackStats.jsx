import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import feedbackContext from "../context/FeedbackContext";

function FeedbackStats() {

    const {feedback} = useContext(feedbackContext)

    // calculate average
    const average = feedback?.reduce((first, last) => {
        return first + last.rate;
    }, 0) / feedback.length;

    return (<div className="feedback-stats">
        {/* review */}
        <div>
            <h3>{feedback.length} reviews</h3>
        </div>
        {/* average */}
        <div>
            <h3>Average : {!isNaN(average) ? average.toFixed(2) : 0}</h3>
        </div>
    </div>);
}


export default FeedbackStats;
