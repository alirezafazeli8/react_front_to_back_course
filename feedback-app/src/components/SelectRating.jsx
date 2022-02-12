import React, {useContext, useState, useEffect} from 'react';
import {FeedbackContext} from "../context/FeedbackContext";

function SelectRating({select}) {
    const [rate, setRate] = useState(10)
    const {editFeedBackVar} = useContext(FeedbackContext)

    useEffect(() => {
        if (editFeedBackVar && editFeedBackVar.edit) {
            setRate(editFeedBackVar.rating)
        }
    }, [editFeedBackVar])

    function ratingHandle(e) {
        setRate(Number(e.target.value))
        select(Number(e.target.value));
    }


    return (
        <ul className={'rating '}>
            <li>
                <input
                    type="radio"
                    name="rating"
                    id="num1"
                    value="1"
                    onChange={ratingHandle}
                    checked={rate === 1}

                />
                <label htmlFor={'num1'}>1</label>
            </li>
            <li>
                <input
                    type="radio"
                    name="rating"
                    id="num2"
                    value="2"
                    onChange={ratingHandle}
                    checked={rate === 2}
                />
                <label htmlFor={'num2'}>2</label>
            </li>
            <li>
                <input
                    type="radio"
                    name="rating"
                    id="num3"
                    value="3"
                    onChange={ratingHandle}
                    checked={rate === 3}
                />
                <label htmlFor={'num3'}>3</label>
            </li>
            <li>
                <input
                    type="radio"
                    name="rating"
                    id="num4"
                    value="4"
                    onChange={ratingHandle}
                    checked={rate === 4}
                />
                <label htmlFor={'num4'}>4</label>
            </li>
            <li>
                <input
                    type="radio"
                    name="rating"
                    id="num5"
                    value="5"
                    onChange={ratingHandle}
                    checked={rate === 5}
                />
                <label htmlFor={'num5'}>5</label>
            </li>
            <li>
                <input
                    type="radio"
                    name="rating"
                    id="num6"
                    value="6"
                    onChange={ratingHandle}
                    checked={rate === 6}
                />
                <label htmlFor={'num6'}>6</label>
            </li>
            <li>
                <input
                    type="radio"
                    name="rating"
                    id="num7"
                    value="7"
                    onChange={ratingHandle}
                    checked={rate === 7}
                />
                <label htmlFor="num7">7</label>
            </li>
            <li>
                <input
                    type="radio"
                    name="rating"
                    id="num8"
                    value="8"
                    onChange={ratingHandle}
                    checked={rate === 8}
                />
                <label htmlFor={'num8'}>8</label>
            </li>
            <li>
                <input
                    type="radio"
                    name="rating"
                    id="num9"
                    value="9"
                    onChange={ratingHandle}
                    checked={rate === 9}
                />
                <label htmlFor={'num9'}>9</label>
            </li>
            <li>
                <input
                    type="radio"
                    name="rating"
                    id="num10"
                    value="10"
                    onChange={ratingHandle}
                    checked={rate === 10}
                />
                <label htmlFor={'num10'}>10</label>
            </li>
        </ul>
    );
}

export default SelectRating;
