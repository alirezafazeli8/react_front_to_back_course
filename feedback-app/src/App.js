import React, {useState} from 'react';
import Header from './components/Header';
import feedbackData from './data/FeedBackData.js';
import FeedbackLists from './components/FeedbackLists';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import {v4} from 'uuid';
import AboutPage from './pages/AboutPage';
import {Routes, Route, Link, NavLink} from 'react-router-dom';
import NavLinks from "./components/shared/NavLinks";
import Posts from "./pages/Posts"
import {BsQuestionCircleFill} from 'react-icons/bs';

export default function App() {
    const [feedback, setFeedback] = useState(feedbackData);

    function addFeedBack(newFeedBack) {
        const newFeed = [{...newFeedBack, id: v4()}, ...feedback];
        setFeedback(newFeed);
    }

    function deleteFeedBack(id) {
        if (window.confirm('Are You Sure You Want Delete Your Feedback?')) {
            setFeedback(feedback.filter((item) => item.id !== id));
        }
    }

    return (<div>
        <Header/>
        <div className="container">
            <Routes>
                {/* home page */}
                <Route
                    path="/"
                    element={<div>
                        <FeedbackForm addfeedback={addFeedBack}/>
                        <FeedbackStats feedback={feedback}/>
                        <FeedbackLists
                            feedback={feedback}
                            handleClick={deleteFeedBack}
                        />


                    </div>}
                />

                <Route path="/about" element={<AboutPage/>}/>
                <Route path={"/posts/:id/:name"} element={<Posts/>}/>
            </Routes>
        </div>
        {/* about page link */}
        {/*NavLInks*/}
        <NavLinks>
            <NavLink to={"/"} className={isActive => {
                return "nav__link " + " " + (isActive.isActive ? "active" : "noneSelect")
            }
            }>
                Home
            </NavLink>
            <NavLink to={"/about"} className={isActive => {
                return "nav__link" + " " + (isActive.isActive ? "active" : "noneSelect")
            }}>
                About
            </NavLink>
        </NavLinks>
        <Link
            to={'/about'}
            className={"about_icon_link"}
        >
            <BsQuestionCircleFill size={"50"}/>
        </Link>
    </div>);
}
