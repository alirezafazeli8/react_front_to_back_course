import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import {FeedbackContext} from "../context/FeedbackContext";


function FeedbackStats() {

    const {feedback} = useContext(FeedbackContext)

    const showRating = function (feedback) {
        if (feedback.length !== 0) {
            const average =
                feedback.reduce((first, last) => {
                    return first + last.rating;
                }, 0) / feedback.length;
            return average.toFixed(1);
        } else {
            return 0;
        }
    };

    return (
        <div className="feedback-stats">
            <h4>{feedback.length} Reviews</h4>
            <h4>{showRating(feedback)}</h4>
        </div>
    );
}

export default FeedbackStats;
