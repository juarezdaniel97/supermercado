import React, { useState } from 'react';
import { Menu, X, Package, Plus, Pencil, Trash2, LogIn, User, Home } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeaderAdmin = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className="bg-gray-900 text-white shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    <div className="text-xl font-bold tracking-wide">Administrador</div>
                    
                    <nav className="hidden md:flex space-x-6 items-center">
                        <Link to="/admin" className=' flex items-center gap-2 hover:text-blue-400'> <Home size={20} /> Home </Link>
                        <Link to="/admin/products/list" className=' flex items-center gap-2 hover:text-blue-400'> <Package size={20} /> Productos </Link>
                        <Link to="/admin/products/create" className=' flex items-center gap-2 hover:text-blue-400'> <Plus size={20} /> Crear </Link>
                        <Link to="/admin/products/list" className=' flex items-center gap-2 hover:text-blue-400'> <Pencil size={20} /> Editar </Link>
                        <Link to="/admin/products/list" className=' flex items-center gap-2 hover:text-blue-400'> <User size={20} /> Perfil </Link>
                        <Link to="/admin/products/list" className=' flex items-center gap-2 hover:text-blue-400'>  <LogIn size={20} /> Login </Link>
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
                <div className="md:hidden px-4 pb-4 space-y-2">
                    <Link to="/admin" className=' flex items-center gap-2 hover:text-blue-400'> <Home size={20} /> Home </Link>
                    <Link to="/admin/products/list" className=' flex items-center gap-2 hover:text-blue-400'> <Package size={20} /> Productos </Link>
                    <Link to="/admin/products/create" className=' flex items-center gap-2 hover:text-blue-400'> <Plus size={20} /> Crear </Link>
                    <Link to="/admin/products/list" className=' flex items-center gap-2 hover:text-blue-400'> <Pencil size={20} /> Editar </Link>
                    <Link to="/admin/products/list" className=' flex items-center gap-2 hover:text-blue-400'> <User size={20} /> Perfil </Link>
                    <Link to="/admin/products/list" className=' flex items-center gap-2 hover:text-blue-400'>  <LogIn size={20} /> Login </Link>
                </div>
            )}
        </header>
    );
};

export default HeaderAdmin;
