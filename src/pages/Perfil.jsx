import React from 'react'
import { useUserContext } from '../contexts/UsersContext';

const Perfil = () => {

    const { currentUser } = useUserContext(); 

    console.log('currentUser ->', currentUser);
    
    return (
        <div className='mt-15   mb-15'>
            <div className="max-w-sm mx-auto bg-white shadow-xl rounded-2xl overflow-hidden p-6 space-y-4">
                <div className="flex flex-col items-center text-center">
                    <img
                    className="w-24 h-24 rounded-full object-cover border-4 border-indigo-500 shadow-md"
                    src={currentUser.avatar}
                    alt={currentUser.name}
                    />
                    <h2 className="text-xl font-bold text-gray-800 mt-2">{currentUser.name}</h2>
                    <p className="text-sm text-gray-500">@{currentUser.usuario}</p>
                </div>

                <div className="text-left">
                    <p className="text-gray-700"><span className="font-semibold">ID:</span> {currentUser.id}</p>
                    <p className="text-gray-700"><span className="font-semibold">Admin:</span> {currentUser.admin ? "Sí" : "No"}</p>
                    <p className="text-gray-500 text-xs italic">* Contraseña oculta por seguridad</p>
                </div>

                <button className="w-full mt-4 cursor-pointer bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-xl transition-all">
                    Editar perfil
                </button>
                
            </div>
        </div>
    )
}

export default Perfil