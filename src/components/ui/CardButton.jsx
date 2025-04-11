import React from 'react'
import Button from '../shared/Button'
import { useCarritoContext } from '../../contexts/CarritoContext'
import { ShoppingCart } from 'lucide-react';

const CardButton = ({setIsCardOpen}) => {
    const {getCountPrducts} = useCarritoContext (); 
    const cantidadArticulos = getCountPrducts()

    return (
        <Button
            style={'p-2 rounded-lg bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors'}
            action={setIsCardOpen}
            name={
                    <>
                        <ShoppingCart size={24} className="text-gray-700 dark:text-white"/>
                        {
                            getCountPrducts() > 0 && (
                                <span className='absolute -top-1 -right-1 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full min-w-[1.25rem] text-center'>
                                    {cantidadArticulos}
                                </span>
                            )
                        }
                    </>
                }
        />
    )
}

export default CardButton