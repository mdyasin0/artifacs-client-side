import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router';
import { Authcontext } from '../Provider/Authprovider';


const PrivateRoute = ({children}) => {
    const { user,  loading } = useContext(Authcontext);
    
    // console.log(user);
    const Location = useLocation();
    // console.log(Location);
    if(loading){
        return <div className='flex justify-center my-32'>
            <span className="loading loading-spinner  loading-xl"></span>
        </div>;
    }
    if(user && user?.email){
        return children;
    }
    return <Navigate to="/Login" state={{ from: Location }} />
        
            
        
   
};

export default PrivateRoute;