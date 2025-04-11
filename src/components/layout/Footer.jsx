import React from 'react'
import { Code, GraduationCap, User } from 'lucide-react';


const Footer = () => {
    return (
        <footer className="bg-slate-100 text-black dark:bg-gray-900 dark:text-white py-8 px-6 shadow-md border-t-1 ">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
                <div className="flex items-center space-x-3 mb-4 md:mb-0">
                    <GraduationCap className="w-8 h-8 text-yellow-400" />
                    <div>
                        <h3 className="font-bold tracking-wide">Diplomatura Fullstack</h3>
                        <p className="text-xs text-gray-500 dark:text-gray-400">Módulo 4 - Desarrollo Web</p>
                    </div>
                </div>
            
                <div className="flex items-center space-x-3 mb-4 md:mb-0">
                    <Code className="w-8 h-8 text-green-400" />
                    <div>
                        <h4 className="font-semibold">Trabajo Práctico N°3</h4>
                        <p className="text-xs text-gray-500 dark:text-gray-400">Proyecto Tienda Online</p>
                    </div>
                </div>
            
                <div className="flex items-center space-x-3">
                    <User className="w-8 h-8 text-blue-400" />
                        <div>
                            <p className="font-medium">Daniel Juárez</p>
                            <p className="text-xs text-gray-400 dark:text-gray-500">Desarrollador</p>
                        </div>
                </div>
            </div>
            
            <div className="border-t-1 border-t-gray-400 dark:border-t-gray-600 mt-6 pt-4 text-center text-sm">
                <p>© 2025 Diplomatura Fullstack. Todos los derechos reservados.</p>
            </div>
        </footer>
    )
}

export default Footer