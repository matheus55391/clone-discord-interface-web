import React, { createContext, useState } from "react"

interface IUser  {   
    name: string;
    img: string;
    
}

interface IConnection  {
    user: IUser;
    setName: (newName: string) => void;
}


const defaultvalue = {
    nome: '',
    img: 'https://avatars.githubusercontent.com/u/35656197?v=4'
}


export const UserContext = createContext<IConnection>({} as IConnection)

export const UserProvider: React.FC = ({ children }) =>{
    const [user, setUser] = useState<IUser>({
        name: defaultvalue.nome,
        img: defaultvalue.img
    })
    
    const setName = (newName: string) =>{
        setUser({
            name: newName,
            img: user.img
        })
    }

    return(
        <UserContext.Provider 
            value={{
                user, 
                setName
            }}
        >
            {children}
        </UserContext.Provider>
    )
}