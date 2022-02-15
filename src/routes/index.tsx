import { Routes,Route,  Navigate } from 'react-router-dom';
import { Login } from '../pages';
import { DiscordLayout } from '../shared/layouts/DiscordLayout/index'
export const AppRoutes = () =>{

    return(
        <Routes>
            
            <Route path='/Discord-Clone/Login' element={<Login/>}/>
            <Route path='/Discord-Clone/Channels' element={<DiscordLayout/>}/>
            <Route path='*' element={<Navigate to="/Discord-Clone/login"/>}/>
        </Routes>
    )
}