import React from 'react';
import  {Link} from "react-router-dom"

const NotFound = () => {
    return (
        <div className={"container text-center"}>
            <div className={"text-7xl text-center "}>
                404 - Error
            </div>
            <div className={"p-4 font-bold text-xl flex flex-col"}>
                we cant find your page you want.
                <div className="p-2">
                    <Link to={"/"}>
                        <div className="btn">
                            Home
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NotFound;