import React, {useState} from 'react';
import Header from './components/Header';
import FeedbackLists from './components/FeedbackLists';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import AboutPage from './pages/AboutPage';
import {Routes, Route, Link, NavLink, Navigate, BrowserRouter} from 'react-router-dom';
import NavLinks from "./components/shared/NavLinks";
import {BsQuestionCircleFill} from 'react-icons/bs';
import FeedbackProvider from "./context/FeedbackContext"

export default function App() {
    return (
        <FeedbackProvider>
            <BrowserRouter>

                <Header/>

                <div className="container">
                    <Routes>

                        {/* home page */}
                        <Route
                            path="/"
                            element={<div>
                                <FeedbackForm/>
                                <FeedbackStats/>
                                <FeedbackLists
                                />
                            </div>}
                        />

                        {/*about page*/}
                        <Route path="/about" element={<AboutPage/>}/>

                    </Routes>
                </div>

                {/*NavLInks*/}
                <NavLinks>
                    {/*home page*/}
                    <NavLink to={"/"} className={isActive => {
                        return "nav__link " + " " + (isActive.isActive ? "active" : "noneSelect")
                    }}>
                        Home
                    </NavLink>

                    {/*about page*/}
                    <NavLink to={"/about"} className={isActive => {
                        return "nav__link" + " " + (isActive.isActive ? "active" : "noneSelect")
                    }}>
                        About
                    </NavLink>
                </NavLinks>

                {/*question icon*/}
                <Link
                    to={'/about'}
                    className={"about_icon_link"}
                >
                    <BsQuestionCircleFill size={"50"}/>
                </Link>
            </BrowserRouter>
        </FeedbackProvider>
    );
}
