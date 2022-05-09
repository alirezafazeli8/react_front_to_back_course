import {createContext, useState} from "react";


const githubContext = createContext()

const GITHUB_API_URL = process.env.REACT_APP_GITHUB_API;
const GITHUB_API_TOKEN = process.env.REACT_APP_GITHUB_API_TOKEN;

export const GithubProvider = ({children}) => {


    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

    const fetchUsers = async () => {
        const req = await fetch(`${GITHUB_API_URL}/users`, {
            headers: {
                Authorization: `token ${GITHUB_API_TOKEN}`,
            }
        });
        const response = await req.json();

        setUsers(response)
        setIsLoading(false)
    }

    const value = {
        users,
        isLoading,
        fetchUsers
    }

    return <githubContext.Provider value={value}>
        {children}
    </githubContext.Provider>
}


export default githubContext