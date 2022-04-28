import React, {useState, useContext, useEffect} from 'react';
import Card from './shared/Card';
import Button from './shared/Button';
import FeedbackRating from './FeedbackRating';
import FeedbackContext from '../context/FeedbackContext';

function FeedbackForm() {
    const [text, setText] = useState('');
    const [disableButton, setDisableButton] = useState(true);
    const [message, setMessage] = useState(false);
    const [rating, setRating] = useState(10);

    const {handleAddFeedback, feedbackEdit, updateFeedback} = useContext(FeedbackContext);

    useEffect(() => {
        if (feedbackEdit.edit === true) {
            setDisableButton(false);
            setText(feedbackEdit.item.text)
            setRating(feedbackEdit.item.rate)
        }
    }, [feedbackEdit])

    function setTextEvent(e) {
        setText(e.target.value.trim());

        if (text.length < 10) {
            setDisableButton(true);
            setMessage(true);
        } else {
            setDisableButton(false);
            setMessage(false);
        }
    }

    async function handleSubmit(e) {
        e.preventDefault();

        if (text.trim().length > 10) {
            const newFeedback = {
                rate: rating, text,
            };

            if (feedbackEdit.edit === true) {
                updateFeedback(feedbackEdit.item.id, newFeedback);



                setText('');
                setRating(10);


            } else {
                handleAddFeedback(newFeedback);



                const rawResponse = await fetch('/feedback', {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({rate: rating, text})
                });
                const content = await rawResponse.json();

                console.log(content);

                setText('');
                setRating(10);
            }


        }
    }

    return (<Card>
        <form action="" onSubmit={handleSubmit}>
            <h2>How Would You rate your service with us?</h2>
            <FeedbackRating
                rating={(rate) => {
                    setRating(rate)
                } }
            />
            <div className="input-group">
                <input
                    onChange={setTextEvent}
                    type="text"
                    placeholder="write your feedback"
                />
                <Button isDisabled={disableButton} version="secondary">
                    Submit
                </Button>
            </div>
            <div className="message">{message && 'You Must Type 10 chracters'}</div>
        </form>
    </Card>);
}

export default FeedbackForm;
