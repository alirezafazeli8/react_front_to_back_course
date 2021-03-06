import {BrowserRouter, Route, Routes} from 'react-router-dom'
// components
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer"
import Home from "./components/pages/Home"
import About from "./components/pages/About";
import NotFound from "./components/pages/NotFound";
import  {GithubProvider} from "./context/github/GithubContext";

function App() {
    return (<GithubProvider>
        <BrowserRouter>
            <div className={"flex flex-col h-screen justify-between"}>
                <Navbar>

                </Navbar>


                <main className={"text-white"}>
                    <Routes>
                        <Route path={"/"} element={<Home/>} />
                        <Route path={"/about"} element={<About/>}/>
                        <Route path={"/notfound"} element={<NotFound/>}/>
                        <Route path={"/*"} element={<NotFound/>}/>
                    </Routes>
                </main>


                <Footer/>
            </div>
        </BrowserRouter>
    </GithubProvider>);
}

export default App;
