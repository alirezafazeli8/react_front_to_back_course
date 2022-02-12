import {createContext, useState} from "react"
import {v4} from "uuid";

export const FeedbackContext = createContext();


const FeedbackProvider = ({children}) => {
    const [editFeedBackVar, setEditFeedBackVar] = useState()
    const [rating, setRating] = useState()

    const [feedback, setFeedback] = useState([{
        id: 1, rating: 8, text: 'hey guys my name is alrieza',
    }, {
        id: 2, rating: 2, text: 'Oh Thats Great, I Love You Man , wassup Bro 🐊🎳🌌',
    }, {
        id: 3, rating: 10, text: 'woooowwww how are you',
    }, {
        id: 4, rating: 5, text: 'fuck you mr cake',
    },])


    function deleteFeedBack(id) {
        if (window.confirm('Are You Sure You Want Delete Your Feedback?')) {
            setFeedback(feedback.filter((item) => item.id !== id));
        }
    }


    function addFeedBack(newFeedBack) {
        const newFeed = [{...newFeedBack, id: v4()}, ...feedback];
        setFeedback(newFeed);
    }

    const editFeedBack = (item) => {
        setEditFeedBackVar({...item, edit: true})
    }


    return (<FeedbackContext.Provider value={{
        feedback, deleteFeedBack, addFeedBack, editFeedBack, editFeedBackVar

    }}>
        {children}
    </FeedbackContext.Provider>);
}


export default FeedbackProvider