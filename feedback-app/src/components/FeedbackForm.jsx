import React, {useState, useContext, useEffect} from 'react';
import Card from './shared/Card';
import Buttons from './shared/Buttons';
import SelectRating from './SelectRating';
import {FeedbackContext} from "../context/FeedbackContext";


function FeedbackForm() {
    const [text, setText] = useState('');
    const [lockBtn, setLockBtn] = useState(true);
    const [message, setMessage] = useState('');
    const [rating, setRating] = useState(10);
    const {addFeedBack, editFeedBackVar, updateFeedBack} = useContext(FeedbackContext)

    useEffect(() => {
        if (editFeedBackVar && editFeedBackVar.edit) {
            setLockBtn(false)
            setText(editFeedBackVar.text)
            setRating(editFeedBackVar.rating)
        }

    }, [editFeedBackVar])

    const inputEvent = (e) => {
        setText(e.target.value.trim());

        if (text.length < 10) {
            setLockBtn(true);
            setMessage('need more than 10 characters.');
        } else {
            setLockBtn(false);
            setMessage('');
        }
    };

    const selectFunc = (selectedValue) => {
        setRating(selectedValue);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if (text.trim().length > 10) {
            const newFeedbackObj = {
                text, rating,
            };

            if (editFeedBackVar && editFeedBackVar.edit) {
                if (text.length < 10) {
                    setLockBtn(true);
                    setMessage('need more than 10 characters.');
                } else {
                    setLockBtn(false);
                    setMessage('');
                }
                //update feedback
                updateFeedBack(editFeedBackVar.id, newFeedbackObj);
                setRating(10)
            } else {
                // add new feedback
                addFeedBack(newFeedbackObj)
            }
            setText('');
            setLockBtn(true);
        }
    };

    return (<Card reverse={false}>
        <form onSubmit={handleFormSubmit}>
            <h2>pleas rate to us</h2>

            <SelectRating select={selectFunc}></SelectRating>

            <div className="input-group">
                <input type="text" onChange={inputEvent} value={text}/>
                <Buttons type={"submit"} isDisabled={lockBtn}>Submit</Buttons>
            </div>
            <div className="message">{message}</div>
        </form>
    </Card>);
}

export default FeedbackForm;
