import React from 'react'
import { useState } from 'react';

const Header = ({ isLoggedIn, onLogin, onLogout }) => {
    const [showModal, setShowModal] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (username === 'admin' && password === 'admin') {
            onLogin();
            setShowModal(false);
            setUsername('');
            setPassword('');
        } else {
            alert('Credenciales incorrectas. Use admin/admin');
        }
    };
    
    return (
        <header className="bg-green-600 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex items-center">
                <h1 className="text-2xl font-bold">Supermercado React</h1>
                </div>
                <nav>
                <ul className="flex space-x-4">
                    <li>
                    {isLoggedIn ? (
                        <button 
                        onClick={onLogout} 
                        className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded"
                        >
                        Cerrar Sesión
                        </button>
                    ) : (
                        <button 
                            onClick={() => setShowModal(true)} 
                            className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded"
                        >
                        Login
                        </button>
                    )}
                    </li>
                </ul>
                </nav>
            </div>

            {/* Modal de Login */}
            {showModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded-lg w-96">
                        <h2 className="text-xl font-bold text-gray-800 mb-4">Login de Administrador</h2>
                        <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label className="block text-gray-700 mb-2" htmlFor="username">
                            Usuario
                            </label>
                            <input
                            id="username"
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded text-gray-800"
                            required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 mb-2" htmlFor="password">
                            Contraseña
                            </label>
                            <input
                            id="password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded text-gray-800"
                            required
                            />
                        </div>
                        <div className="flex justify-end">
                            <button
                            type="button"
                            onClick={() => setShowModal(false)}
                            className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded mr-2"
                            >
                            Cancelar
                            </button>
                            <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
                            >
                            Ingresar
                            </button>
                        </div>
                        </form>
                    </div>
                </div>
            )}
        </header>
    )
}

export default Header