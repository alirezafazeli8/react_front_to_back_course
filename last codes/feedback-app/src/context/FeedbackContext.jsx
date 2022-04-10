import {createContext, useEffect, useState} from "react"


export const FeedbackContext = createContext();


const FeedbackProvider = ({children}) => {
    const [editFeedBackVar, setEditFeedBackVar] = useState()
    const [isLoading, setLoading] = useState(true)
    const [feedback, setFeedback] = useState([])


    useEffect(() => {
        fectchFeedBack()
    }, [])


    const fectchFeedBack = async () => {
        const reponseData = await fetch("/feedback");
        const data = await reponseData.json();

        setFeedback(data)
        setLoading(false)
    }


    // delete feedback
    async function deleteFeedBack(id) {
        if (window.confirm('Are You Sure You Want Delete Your Feedback?')) {
            const responseData = await fetch(`/feedback/${id}`, {
                method: 'DELETE',
            });
            const data = responseData.json()
            setFeedback(feedback.filter((item) => item.id !== id));
        }
    }


    // add feedback
    async function addFeedBack(newFeedBack) {

        const responseData = await fetch("/feedback", {

            // Adding method type
            method: "POST",

            // Adding body or contents to send
            body: JSON.stringify(newFeedBack),

            // Adding headers to the request
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })


        const data = await responseData.json()

        const newFeed = [data, ...feedback];

        setFeedback(newFeed);
    }

    //edit feedback
    const editFeedBack = (item) => {
        setEditFeedBackVar({...item, edit: true})
    }

    // update feedback
    const updateFeedBack = async (id, updateItem) => {

        const responseData = await fetch(`/feedback/${id}/`, {
            method: "PUT",
            headers: {
                'Content-type': 'application/json; charset=UTF-8' // Indicates the content
            },
            body: JSON.stringify(updateItem)
        })

        const data = await responseData.json();


        setFeedback(feedback.map(item => item.id == id ? {
            ...item, ...data
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