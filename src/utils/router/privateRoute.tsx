import React from 'react';
import {Navigate, Outlet} from "react-router-dom";
import Login from "../../components/auth/login";

const PrivateRoute = () => {
    const auth = true;
    return (
        auth ? <Outlet/> : <Navigate to='login'/>
    );
};

export default PrivateRoute;