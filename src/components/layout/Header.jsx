import React, { useState } from 'react'
import { Menu, X } from "lucide-react";
import Desktop from './Desktop';
import Mobile from './Mobile';
import Card from '../ui/Card';
import Button from '../shared/Button';

import ThemeButton from '../shared/ThemeButton';
import Logo from '../shared/Logo';
import CardButton from '../ui/CardButton';
import { useProductsContext } from '../../contexts/ProductsContext';

const Header = () => {
    const [isOpenMenu, setIsOpenMenu] = useState(false);
    const [isCardOpen, setIsCardOpen] = useState(false);

    const {products} = useProductsContext()

    return (
        <nav className='fixed w-full bg-slate-100 text-black dark:bg-gray-900 shadow-md p-3 z-20'>
            <div className='max-w-7xl mx-auto flex items-center justify-between'>
                {/* Logo */} 
                <Logo/>

                {/* Desktop Navigation */}
                <Desktop menuItems={products} />

                {/*Desktop */}
                <div className='hidden md:flex items-center space-x-4'>
                    
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
                    <Mobile menuItems={menuItems} />
                </div>
            )}
        </nav>
    )
}

export default Header