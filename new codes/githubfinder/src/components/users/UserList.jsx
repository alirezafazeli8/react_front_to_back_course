import React, {useEffect, useState, useContext} from 'react';
import Spinner from "../layout/Spinner";
import UserItem from "./UserItem";
import githubContext from "../../context/github/GithubContext";

const UserList = () => {

    const {
        users, isLoading, fetchUsers
    } = useContext(githubContext)


    useEffect(() => {
        fetchUsers()
    }, [])

    return !isLoading ? (<div
        className={"grid gap-4 sm:grid-cols-2 md:grid-cols-2 xs:grid-cols-1 lg:md:grid-cols-3 xl:md:grid-cols-3 2xl:grid-cols-4"}>

        {users.map((user) => {
            return <UserItem key={user.id} user={user}/>
        })}

    </div>) : (<Spinner/>)
};

export default UserList;