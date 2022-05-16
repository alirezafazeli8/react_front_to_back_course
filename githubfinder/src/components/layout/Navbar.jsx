import React from 'react';
import {FiGithub} from "react-icons/fi"
import {Link} from "react-router-dom"
import {PropTypes} from "prop-types"

const Navbar = ({title}) => {
    return (<div className={"shadow-lg bg-neutral p-5"}>
        <div className="container flex justify-between text-white">
            {/*   logo  */}
            <Link to={"/"}>
                <div className={"flex justify-center items-center"}>
                    <div className={"px-2"}>
                        <FiGithub size={30}/>
                    </div>

                    <div className={"font-bold"}>
                        {title}
                    </div>
                </div>
            </Link>

            {/*  navabr  */}
            <nav className={"flex"}>
                <div className={"btn btn-ghost"}>
                    <Link to={"/"}>
                        Home
                    </Link>
                </div>
                <div className={"btn btn-ghost"}>
                    <Link to={"/about"}>
                        About
                    </Link>
                </div>

            </nav>
        </div>
    </div>);
};


Navbar.defaultProps = {
    title: "Github Finder"
}


Navbar.propTypes = {
    title: PropTypes.string,
}

export default Navbar;