import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Footer from '../components/layout/Footer'
import Body from '../components/layout/Body'
import HeaderAdmin from '../components/layout/HeaderAdmin'

const Admin = () => {

    const location = useLocation();
    const routeAdmin = location.pathname === '/admin';
    const routeProfile = location.pathname === '/profile';
    const isBodyRoute = location.pathname === '/admin' || location.pathname === '/profile';
    
    return (
        <div>
            <HeaderAdmin/>

            <div className="container mx-auto px-4">
                {
                    isBodyRoute ? <Body/> : (<Outlet/>)
                }
            </div>
            
            
            <Footer/>
        </div>
    )
}

export default Admin