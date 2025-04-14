import { createContext, useContext } from "react";
import { useUsers } from '../hooks/useUsers'


const UsersContext = createContext()


export const UsersProvider = ({ children }) => {
    const users = useUsers();

    return (
        <UsersContext.Provider value={users}>
            {children}
        </UsersContext.Provider>
    )
}


export const useUserContext = () => useContext(UsersContext)