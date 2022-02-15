import { Routes,Route } from 'react-router-dom';
import { Login } from '../pages';

export const AppRoutes = () =>{
    return(
        <Routes>
            <Route path='/Discord-Clone/Login' element={<Login/>}/>
            <Route path='/*' element={<Login/>}/>
        </Routes>
    )
}