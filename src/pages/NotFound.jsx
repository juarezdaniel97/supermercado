import React from 'react'
import { useNavigate } from 'react-router-dom'
import ButtonAdmin from '../components/shared/ButtonAdmin'

const NotFound = () => {
    const navigate = useNavigate()

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
            <div className="text-center max-w-md">
                <h1 className="text-9xl font-bold text-indigo-600">404</h1>
                <h2 className="text-2xl font-semibold text-gray-800 mt-4">Página no encontrada</h2>
                <p className="text-gray-600 mt-2 mb-8">
                    Lo sentimos, la página que estás buscando no existe o ha sido movida.
                </p>
                
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <ButtonAdmin 
                        variant="primary"
                        action={() => navigate('/')}
                        name="Ir al inicio"
                    />
                    
                    <ButtonAdmin 
                        variant="outline"
                        action={() => navigate(-1)}
                        name="Volver atrás"
                    />
                </div>
            </div>
        </div>
    )
}

export default NotFound