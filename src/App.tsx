
import { BrowserRouter } from "react-router-dom"
import { AppRoutes } from "./routes"
import { UserProvider } from "./shared/context/UserContext"
import { DiscordLayout } from "./shared/layouts/DiscordLayout"
import { GlobalStyle } from "./shared/styles"

export const App = () =>{
  return(
    <BrowserRouter>
      <UserProvider>
       <AppRoutes/>
       <GlobalStyle/>
      </UserProvider>     
    </BrowserRouter>
  )
}


    //   <DiscordLayout/>
