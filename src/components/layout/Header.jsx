import React, { useState, useEffect } from 'react'
import { LogIn, LogOut, Menu, X } from "lucide-react";
import Desktop from './Desktop';
import Mobile from './Mobile';
import Card from '../ui/Card';
import Button from '../shared/Button';
import ThemeButton from '../shared/ThemeButton';
import Logo from '../shared/Logo';
import CardButton from '../ui/CardButton';
import { useForm } from 'react-hook-form';
import { useUserContext } from '../../contexts/UsersContext';
import { useNavigate } from 'react-router-dom';



const Header = () => {
    const [isOpenMenu, setIsOpenMenu] = useState(false);
    const [isCardOpen, setIsCardOpen] = useState(false);
    const [showModalLogin, setShowModalLogin] = useState(false);

    const { register, handleSubmit, formState: { errors }, setValue, reset } = useForm();

    const { currentUser, login, logout, error, isAdmin } = useUserContext();

    const navigate = useNavigate()

    const items = [
        { title: 'Inicio', href: '/' },
        { title: 'Productos', href: '/admin', isNew: true },
        { title: 'Contacto', href: '#' }
    ];

    const onSubmit = (data) => {
        const { usuario, password } = data;
        const result = login(usuario, password);
        
        if (result) {
            setShowModalLogin(false);
            reset();  // Limpiar el formulario después de un login exitoso
            navigate('/admin')
        }
        // El mensaje de error lo maneja el contexto
    }

    const handleLogout = () => {
        logout();
    }

    return (
        <nav className='fixed w-full bg-slate-100 text-black dark:bg-gray-900 shadow-md p-3 z-20'>
            <div className='max-w-7xl mx-auto flex items-center justify-between'>
                {/* Logo */} 
                <Logo/>

                {/* Desktop Navigation */}
                <Desktop menuItems={items} />

                {/*Desktop */}
                <div className='hidden md:flex items-center space-x-6'>
                    
                    {/* Carrito */}
                    <div className="relative">
                        <CardButton
                            setIsCardOpen={setIsCardOpen}
                        />

                        {/* Cart dropdown */}
                        {isCardOpen && (
                            <div className="absolute right-0 mt-2 w-72 bg-white dark:bg-gray-800 shadow-lg rounded-lg z-30">
                                <Card />
                            </div>
                        )}
                    </div>

                    {/* Button Theme */}
                    <ThemeButton/>

                    {/* Login/Logout condicional */}
                    {!currentUser ? (
                        <button 
                            onClick={() => setShowModalLogin(true)}
                            className='flex text-black dark:text-white py-2 px-4 p-2 gap-2 cursor-pointer rounded-lg bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700'
                        >
                            <LogIn/> LogIn
                        </button>
                    ) : (
                        <button
                            onClick={handleLogout}
                            className='flex text-black dark:text-white py-2 px-4 p-2 gap-2 cursor-pointer rounded-lg bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700'
                        >
                            <LogOut/> LogOut ({currentUser.nombre || currentUser.usuario})
                        </button>
                    )}
                </div>

                {/*Mobile */}
                <div className='md:hidden flex items-center space-x-2'>
                    
                    {/* Carrito */}
                    <div className="relative">
                        <CardButton
                            setIsCardOpen={setIsCardOpen}
                        />
                        
                        {isCardOpen && (
                            <div className="fixed inset-0 bg-slate-300 dark:bg-gray-800 z-50 overflow-y-auto pt-5">
                                <div className="p-4">
                                    {/* Cerrar Card */}
                                    <Button
                                        style={'absolute top-14 right-10 text-black hover:text-gray-500 dark:text-white dark:hover:text-slate-100 cursor-pointer'}
                                        action={setIsCardOpen}
                                        name={<X size={24} />}
                                    />
                                    <Card />
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Button Theme */}
                    <ThemeButton/>

                    {/* Login/Logout condicional para móvil */}
                    {!currentUser ? (
                        <button 
                            onClick={() => setShowModalLogin(true)}
                            className='p-2 rounded-lg bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700'
                        >
                            <LogIn size={20} className="text-gray-700 dark:text-white" />
                        </button>
                    ) : (
                        <button
                            onClick={handleLogout}
                            className='p-2 rounded-lg bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700'
                        >
                            <LogOut size={20} className="text-gray-700 dark:text-white" />
                        </button>
                    )}

                    {/* Menú Burger */}
                    <Button
                        style={'p-2 rounded-lg bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors'}
                        action={setIsOpenMenu}
                        name={<Menu size={20} className="text-gray-700 dark:text-white" />}
                    />
                </div>
            </div>

            {/* Mobile Menu Navigation */}
            {isOpenMenu && (
                <div className="mt-2">
                    <Mobile menuItems={items} />
                </div>
            )}

            {/* Modal login */}
            {
                showModalLogin && (<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded-lg w-96">
                        <h2 className="text-xl font-bold text-gray-800 mb-4">Login</h2>
                        
                        {/* Mostrar error de autenticación si existe */}
                        {error && <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">{error}</div>}
                        
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="mb-4">
                                <label className="block text-gray-700 mb-2" htmlFor="username">
                                    Usuario
                                </label>
                                <input
                                    {...register('usuario', { required: true })}
                                    id="username"
                                    type="text"
                                    className="w-full px-3 py-2 border border-gray-300 rounded text-gray-800"
                                />
                                {errors.usuario && <span className="text-red-500 text-sm">El campo usuario no puede estar vacío</span>}
                            </div>

                            <div className="mb-4">
                                <label className="block text-gray-700 mb-2" htmlFor="password">
                                    Contraseña
                                </label>
                                <input
                                    {...register('password', { required: true })}
                                    id="password"
                                    type="password"
                                    className="w-full px-3 py-2 border border-gray-300 rounded text-gray-800"
                                />
                                {errors.password && <span className="text-red-500 text-sm">El campo Contraseña no puede estar vacío</span>}
                            </div>

                            <div className="flex justify-end">
                                <button
                                    type="button"
                                    onClick={() => setShowModalLogin(false)}
                                    className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 cursor-pointer rounded mr-2"
                                >
                                    Cancelar
                                </button>
                                <button
                                    type="submit"
                                    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 cursor-pointer rounded"
                                >
                                    Ingresar
                                </button>
                            </div>
                        </form>
                    </div>
                </div>)
            }
        </nav>
    )
}

export default Header