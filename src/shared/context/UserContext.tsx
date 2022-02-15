import React, { createContext, useState } from "react"

type UserContextType = {   
    name?: string;
    img?: string;
}

const defaultvalue = {
    nome: 'matheus55391',
    img: 'https://avatars.githubusercontent.com/u/35656197?v=4'
}


export const UserContext = createContext<UserContextType>({} as UserContextType)

export const UserProvider: React.FC = ({ children }) =>{
    const [name] = useState<string>(defaultvalue.nome)
    const [img] = useState<string>(defaultvalue.img)

    return(
        <UserContext.Provider value={{name: name, img:img}}>
            {children}
        </UserContext.Provider>
    )
}