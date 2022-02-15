import { Routes,Route,  Navigate } from 'react-router-dom';
import { Login } from '../pages';
import { DiscordLayout } from '../shared/layouts/DiscordLayout/index'
export const AppRoutes = () =>{

    return(
        <Routes>
            
<<<<<<< HEAD
            <Route path='/Discord-Clone/Login' element={<Login/>}/>
            <Route path='/Discord-Clone/Channels' element={<DiscordLayout/>}/>
            <Route path='*' element={<Navigate to="/Discord-Clone/login"/>}/>
=======
            <Route path='/login' element={<Login/>}/>
            <Route path='/channels' element={<DiscordLayout/>}/>
            <Route path='*' element={<Navigate to="/login"/>}/>
>>>>>>> c84a4aa30afd4b2d7ccf16594a3548e20b35227d
        </Routes>
    )
}