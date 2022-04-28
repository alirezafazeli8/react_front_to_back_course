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
    async function deleteFeedback(id) {
        if (window.confirm('Are You Sure You Want Delete Feedback ?')) {

            // delete data from server
            await fetch(`/feedback/${id}/`, {
                method: 'DELETE', headers: {
                    'Content-Type': 'application/json'
                },

            })

            // delete data from ui
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
    async function updateFeedback(id, updItem) {
        setFeedback(feedback.map(async (item) => {
            if (item.id === id) {

                // await fetch(`/feedback/${id}/`, {
                //     method: 'PUT',
                //     headers: {
                //         'Content-Type': 'application/json'
                //     },
                //     body: JSON.stringify({...updItem})
                // })


                return {...id, ...updItem}
            } else {
                return item
            }
        }))
    }


    // all value for making Provider
    const value = {
        feedback, setFeedback, feedbackEdit, setFeedbackEdit, editFeedbackFunc, isLoading
    };

    return (<FeedbackContext.Provider value={value}>
        {children}
    </FeedbackContext.Provider>);
}

export default FeedbackContext;
