import {AiFillCloseCircle} from 'react-icons/ai';
import {RiEditBoxLine} from "react-icons/ri"
import Card from './shared/Card';
import PropTypes from 'prop-types';
import {FeedbackContext} from "../context/FeedbackContext";
import {useContext} from "react";


function FeedbackItem(props) {
    const {deleteFeedBack, editFeedBack} = useContext(FeedbackContext)
    return (<Card>
        <div className="num-display">{props.feed.rating}</div>

        {/*delete button*/}
        <button
            onClick={() => deleteFeedBack(props.feed.id)}
            className="close"
        >
            <AiFillCloseCircle color="white" size={"20"}/>
        </button>

        {/* edit button */}
        <button className={"edit"} onClick={() => editFeedBack(props.feed)}><RiEditBoxLine color={"white"}
                                                                                           size={"20"}/>
        </button>

        <div className="text-display">{props.feed.text}</div>
    </Card>);
}

FeedbackItem.propTypes = {
    feed: PropTypes.object,
};

export default FeedbackItem;
