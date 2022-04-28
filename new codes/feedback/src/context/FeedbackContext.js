import {createContext, useState} from 'react';
import {v4} from 'uuid';

const FeedbackContext = createContext();

export function FeedbackProvider({children}) {

    // all feedback is here
    const [feedback, setFeedback] = useState([{
        id: 1, text: 'hello', rate: 10,
    }, {
        id: 2, text: 'hello guys thats so nice', rate: 8,
    }, {
        id: 3, text: 'maybe good', rate: 7,
    },]);

    // delete feedback item function
    function deleteFeedback(id) {
        if (window.confirm('Are You Sure You Want Delete Feedback ?')) {
            setFeedback(feedback.filter((v) => {
                return v.id !== id;
            }));
        }
    }

    // add feedback item function
    function handleAddFeedback(newFeedback) {

        // const newFeedbackObject =
        setFeedback([{...newFeedback, id: v4()}, ...feedback]);
    }


    // edit feedback state
    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {}, edit: false,
    })


    // edit feedback function
    function editFeedbackFunc(item) {

        setFeedbackEdit({
            item: item, edit: true
        })
    }

    // update feedback function
    function updateFeedback(id, updItem) {
        setFeedback(feedback.map((item) => {
            if (item.id === id) {
                return {...id, ...updItem}
            } else {
                return item
            }
        }))
    }


    // all value for making Provider
    const value = {
        feedback,
        setFeedback,
        deleteFeedback,
        handleAddFeedback,
        feedbackEdit,
        setFeedbackEdit,
        editFeedbackFunc,
        updateFeedback,
    };

    return (<FeedbackContext.Provider value={value}>
        {children}
    </FeedbackContext.Provider>);
}

export default FeedbackContext;
