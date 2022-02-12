import {createContext, useState} from "react"
import {v4} from "uuid";

export const FeedbackContext = createContext();


const FeedbackProvider = ({children}) => {
    const [editFeedBackVar, setEditFeedBackVar] = useState()

    const [feedback, setFeedback] = useState([{
        id: 1, rating: 8, text: 'hey guys my name is alrieza',
    }, {
        id: 2, rating: 2, text: 'Oh Thats Great, I Love You Man , wassup Bro 🐊🎳🌌',
    }, {
        id: 3, rating: 10, text: 'woooowwww how are you',
    }, {
        id: 4, rating: 5, text: 'fuck you mr cake',
    },])

    // delete feedback
    function deleteFeedBack(id) {
        if (window.confirm('Are You Sure You Want Delete Your Feedback?')) {
            setFeedback(feedback.filter((item) => item.id !== id));
        }
    }


    // add feedback
    function addFeedBack(newFeedBack) {
        const newFeed = [{...newFeedBack, id: v4()}, ...feedback];
        setFeedback(newFeed);
    }

    //edit feedback
    const editFeedBack = (item) => {
        setEditFeedBackVar({...item, edit: true})
    }

    // update feedback
    const updateFeedBack = (id, updateItem) => {
        setFeedback(feedback.map(item => item.id === id ? {
            ...item, ...updateItem
        } : item))
    }


    return (<FeedbackContext.Provider value={{
        feedback,
        addFeedBack,
        deleteFeedBack,
        editFeedBackVar,
        editFeedBack,
        updateFeedBack


    }}>
        {children}
    </FeedbackContext.Provider>);
}


export default FeedbackProvider