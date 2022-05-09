import React from 'react';
import UserList from "../users/UserList";

const Home = () => {
    return (
        <div className={"flex flex-col items-center justify-center p-2"}>
            <UserList />
        </div>
    );
};

export default Home;