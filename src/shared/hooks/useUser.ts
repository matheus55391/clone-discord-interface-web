import { useContext } from "react"
import { UserContext } from "../context/UserContext"

export const useUser = () => {
    const {user, setName} = useContext(UserContext)
    return {user, setName}

}