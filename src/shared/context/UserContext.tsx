import React, { createContext, useState } from "react"

type UserContextType = {   
    name?: string;
    img?: string;
}



export const UserContext = createContext<UserContextType>({} as UserContextType)

export const UserProvider: React.FC = ({ children }) =>{
    const [name] = useState<string>("matheus55391")
    const [img] = useState<string>("https://avatars.githubusercontent.com/u/35656197?v=4")

    return(
        <UserContext.Provider value={{name: name, img:img}}>
            {children}
        </UserContext.Provider>
    )
}