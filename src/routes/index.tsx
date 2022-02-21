import { Routes,Route,  Navigate } from 'react-router-dom';
import { Login, Channels } from '../pages';


export const AppRoutes = () =>{

    return(
        <Routes>            
            
            <Route path='/Discord-Clone/Login' element={<Login/>}/>
            <Route path='/Discord-Clone/Channels' element={<Channels/>}/>
            <Route path='/Discord-Clone/*' element={<Navigate to="/Discord-Clone/login"/>}/>

        </Routes>
    )
}