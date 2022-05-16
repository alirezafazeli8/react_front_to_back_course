import react, {useState} from 'react';
import Header from './components/Header';
import fakeData from './data/fakeData';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import {BrowserRouter, Route, Routes, Link, NavLink} from 'react-router-dom';
import About from './pages/About';
import AboutIcon from './components/AboutIcon';
// import { Card } from 'antd';
import Card from './components/shared/Card';
import Post from './components/Post';
import {FeedbackProvider} from './context/FeedbackContext';

function App() {
    const [feedback, setFeedback] = useState(fakeData);


    return (<FeedbackProvider>
        <BrowserRouter>
            <Header/>

            <div className="container">
                <Routes>
                    {/* home page */}
                    <Route
                        path="/"
                        element={<>
                            <FeedbackForm/>
                            <FeedbackStats />
                            <Card>
                                <NavLink to={'/'} activeclass="active">
                                    Home
                                </NavLink>

                                <NavLink to={'/about'} activeclass="active">
                                    about
                                </NavLink>
                            </Card>
                            <FeedbackList/>
                        </>}
                    />

                    {/* about page */}
                    <Route path="/about" element={<About/>}/>

                    <Route path="/post/*" element={<Post/>}/>
                </Routes>

                <Link to={'/about'}>
                    <AboutIcon/>
                </Link>
            </div>
        </BrowserRouter>
    </FeedbackProvider>);
}

export default App;
