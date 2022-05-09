import React from 'react';
import PropTypes from "prop-types";
import  {Link} from "react-router-dom"

const UserItem = ({user}) => {
    return (<div className={"card w-96 bg-base-100 shadow-xl w-80"}>

            <div className={"flex items-center"}>
                <div className={"w-20 px-2 py-3"}>
                    <img className={"rounded-2xl"} src={user.avatar_url} alt=""/>
                </div>
                <div className={"flex flex-col px-3"}>
                    {/*    user name */}
                    <div>
                        <h2 className={"font-mono"}>{user.login}</h2>
                    </div>
                    {/*got to profile */}
                    <Link to={`/users/${user.login}/`} >
                        <div className={"text-gray-500 font-medium"}>
                            go to profile
                        </div>
                    </Link>
                </div>
            </div>

    </div>);
};

UserItem.propTypes = {
    user: PropTypes.object.isRequired
}


export default UserItem;