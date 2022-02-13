import {createContext, useEffect, useState} from "react"
import {v4} from "uuid";

export const FeedbackContext = createContext();


const FeedbackProvider = ({children}) => {
    const [editFeedBackVar, setEditFeedBackVar] = useState()
    const [isLoading, setLoading] = useState(true)
    const [feedback, setFeedback] = useState([])


    useEffect(() => {
        fectchFeedBack()
    }, [])


    const fectchFeedBack = async () => {
        const reponseData = await fetch("http://localhost:5000/feedback");
        const data = await reponseData.json();

        setFeedback(data)
        setLoading(false)
    }


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
        updateFeedBack,
        isLoading

    }}>
        {children}
    </FeedbackContext.Provider>);
}


export default FeedbackProvider