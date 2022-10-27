import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Context/Auth/AuthProvider';

const PrivetRoutes = ({children}) => {
       const {user, loading} = useContext(AuthContext);
    const location = useLocation();

    if(loading){
        return  <h1>loding....</h1>
    }

    if(!user){
        return <Navigate to="/login" state={{from: location}} replace></Navigate>
    }
    return children;
};

export default PrivetRoutes;