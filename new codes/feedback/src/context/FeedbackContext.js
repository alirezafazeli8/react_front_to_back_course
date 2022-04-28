import {createContext, useState, useEffect} from 'react';
import {v4} from 'uuid';

const FeedbackContext = createContext();

export function FeedbackProvider({children}) {

    // set is loading
    const [isLoading, setIsLoading] = useState(true)

    // all feedback is here
    const [feedback, setFeedback] = useState([]);

    // edit feedback state
    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {}, edit: false,
    })

    //fetch data from server
    useEffect(() => {
        fetchFeedback()

    }, []);

    const fetchFeedback = async () => {
        const response = await fetch("/feedback?_sort=id&_order=desc")
        const json = await response.json()

        setFeedback(json)
        setIsLoading(false)
    }

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
        isLoading
    };

    return (<FeedbackContext.Provider value={value}>
        {children}
    </FeedbackContext.Provider>);
}

export default FeedbackContext;
