import { useContext } from "react"
import { UserContext, UserProvider } from "../context/UserContext"

export const useUser = () => {
    const {name, img} = useContext(UserContext)
    return {name, img}

}