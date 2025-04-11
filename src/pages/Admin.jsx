import React from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import Footer from '../components/layout/Footer'
import Body from '../components/layout/Body'
import HeaderAdmin from '../components/layout/HeaderAdmin'
import Header from '../components/layout/Header'

const Admin = () => {

    const location = useLocation();
    const routeAdmin = location.pathname === '/admin';
    return (
        <div>
            <HeaderAdmin/>
            {/* <Header/> */}

            <div className="container mx-auto px-4">
                {
                    routeAdmin ? <Body/> : (<Outlet/>)
                }
            </div>
            
            
            <Footer/>
        </div>
    )
}

export default Admin