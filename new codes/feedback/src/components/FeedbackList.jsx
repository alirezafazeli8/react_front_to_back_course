import React, {useContext} from 'react';
import FeedbackItem from './FeedbackItem';
import PropTypes from 'prop-types';
import FeedbackContext from '../context/FeedbackContext';
import Spinner from "./shared/Spinner";

function FeedbackList() {
    const {feedback, isLoading} = useContext(FeedbackContext);


    if (!isLoading && (!feedback || feedback.length <= 0)) {
        return <h2>Empty Feedback</h2>;
    }


    if (isLoading === true) {
       return <Spinner />
    } else {
        return  <div className="feedback-list">
            {feedback.map((value, i) => {
                return <FeedbackItem key={i} item={value}/>;
            })}
        </div>
    }



}

export default FeedbackList;
