import { createContext, useState } from "react";

export const UserContext = createContext()


const UserContextProvider = ({children}) => {

    const [loggedIn, setLoggedIn] = useState(false);

    const loginHandler = () => {
        setLoggedIn(true)
    }

    return (
        <UserContext.Provider value={{
            loggedIn,
            loginHandler
        }} >
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider