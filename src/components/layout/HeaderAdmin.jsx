import React, { useEffect, useState } from 'react';
import { Menu, X, Package, Plus, User, Home, LogOut } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useUserContext } from '../../contexts/UsersContext';

const HeaderAdmin = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const { currentUser, logout,isAdmin } = useUserContext();
    const navigate = useNavigate();

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const handleLogout = () => {
        logout();
        navigate('/');
    };


    // Control de acceso al panel de administración
    useEffect(() => {
        if (!currentUser) {
            navigate('/');
        } else if (!isAdmin()) {
            navigate('/');
        }
    }, [currentUser, isAdmin, navigate]);


    return (
        <header className="bg-gray-900 text-white shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    <div className="flex items-center space-x-2">
                        <div className="text-xl font-bold tracking-wide">Panel de Admin</div>
                        {currentUser && (
                            <span className="text-sm bg-blue-600 px-2 py-1 rounded-full">
                                {currentUser.usuario || currentUser.name}
                            </span>
                        )}
                    </div>
                    
                    <nav className="hidden md:flex space-x-6 items-center">
                        <Link to="/admin" className="flex items-center gap-2 hover:text-blue-400"> 
                            <Home size={20} /> Dashboard 
                        </Link>
                        <Link to="/admin/products/list" className="flex items-center gap-2 hover:text-blue-400"> 
                            <Package size={20} /> Productos 
                        </Link>
                        <Link to="/admin/products/create" className="flex items-center gap-2 hover:text-blue-400"> 
                            <Plus size={20} /> Crear Producto
                        </Link>
                        <Link to='/admin/profile' className="flex items-center gap-2 hover:text-blue-400"> 
                            <User size={20} /> Perfil 
                        </Link>
                        <button 
                            onClick={handleLogout}
                            className="flex items-center gap-2 hover:text-blue-400 cursor-pointer"
                        > 
                            <LogOut size={20} /> Cerrar Sesión
                        </button>
                    </nav>

                    {/* Botón de menú móvil */}
                    <div className="md:hidden">
                        <button onClick={toggleMenu}>
                            {menuOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Menú responsive */}
            {menuOpen && (
                <div className="md:hidden px-4 pb-4 space-y-4">
                    <Link to="/admin" className="flex items-center gap-2 hover:text-blue-400 py-2"> 
                        <Home size={20} /> Dashboard 
                    </Link>
                    <Link to="/admin/products/list" className="flex items-center gap-2 hover:text-blue-400 py-2"> 
                        <Package size={20} /> Productos 
                    </Link>
                    <Link to="/admin/products/create" className="flex items-center gap-2 hover:text-blue-400 py-2"> 
                        <Plus size={20} /> Crear Producto
                    </Link>
                    <Link to="/profile" className="flex items-center gap-2 hover:text-blue-400 py-2"> 
                        <User size={20} /> Perfil 
                    </Link>
                    <button 
                        onClick={handleLogout}
                        className="flex items-center gap-2 hover:text-blue-400 cursor-pointer py-2 w-full text-left"
                    > 
                        <LogOut size={20} /> Cerrar Sesión
                    </button>
                    <Link to="/" className="block bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition-colors text-center">
                        Volver al sitio
                    </Link>
                </div>
            )}
        </header>
    );
};

export default HeaderAdmin;