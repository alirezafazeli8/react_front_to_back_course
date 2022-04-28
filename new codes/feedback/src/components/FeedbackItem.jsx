import React, {useContext} from 'react';
import Card from './shared/Card';
import PropTypes from 'prop-types';
import {FaWindowClose, FaEdit} from 'react-icons/fa';
import fakeData from '../data/fakeData.js';
import FeedbackContext from '../context/FeedbackContext';


function FeedbackItem({item}) {
    const {deleteFeedback, editFeedbackFunc} = useContext(FeedbackContext);


    return (<Card>
        <div className="num-display">{item.rate}</div>
        <button
            onClick={() => {
                deleteFeedback(item.id);
            }}
            className="close"
        >
            <FaWindowClose color="purple"/>
        </button>
        <button className="edit" onClick={() => {
            editFeedbackFunc(item)
        }}>
            < FaEdit/>
        </button>
        <div className="text-display">{item.text}</div>
    </Card>);
}

FeedbackItem.propTypes = {
    item: PropTypes.object,
};

export default FeedbackItem;
