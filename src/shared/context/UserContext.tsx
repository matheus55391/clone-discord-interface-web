import React, { createContext, useState } from "react"

type UserContextType = { 
    
    name?: string;
    img?: string;
}

export const UserContext = createContext<UserContextType>({} as UserContextType)

export const UserProvider: React.FC = ({ children }) =>{
    const [user, setUser] = useState<UserContextType>({})

    return(
        <UserContext.Provider value={{user}}>
            {children}
        </UserContext.Provider>
    )
}