import { Routes,Route,  Navigate } from 'react-router-dom';
import { Login } from '../pages';
import { DiscordLayout } from '../shared/layouts/DiscordLayout/index'
export const AppRoutes = () =>{

    return(
        <Routes>
            
            <Route path='/login' element={<Login/>}/>
            <Route path='/channels' element={<DiscordLayout/>}/>
            <Route path='*' element={<Navigate to="/login"/>}/>
        </Routes>
    )
}