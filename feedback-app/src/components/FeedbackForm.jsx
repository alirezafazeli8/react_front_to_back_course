import React, {useState} from 'react';
import Card from './shared/Card';
import Buttons from './shared/Buttons';

function FeedbackForm() {
    const [text, setText] = useState('');
    const [lockBtn, setLockBtn] = useState(true)
    const [message, setMessage] = useState('')

    const inputEvent = (e) => {
        setText(e.target.value.trim());
        console.log(text)
        if (text.length < 10) {
            setLockBtn(true)
            setMessage("need more than 10 characters.")
        } 
        else {
            setLockBtn(false)
            setMessage('')
        }

    };

    return (<Card reverse={false}>
        <form>
            <h2>pleas rate to us</h2>
            <div className="input-group">
                <input type="text" onChange={inputEvent} value={text}/>
                <Buttons isDisabled={lockBtn}>Submit</Buttons>
            </div>
            <div className="message">
                {message}
            </div>
        </form>
    </Card>);
}

export default FeedbackForm;
