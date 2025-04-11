import React from 'react'
import { Plus, ShoppingCart } from 'lucide-react';
import Button from '../shared/Button';
import { useCarritoContext } from '../../contexts/CarritoContext';

const ProductCard = ({product}) => {
    
    const { addToCart } = useCarritoContext();

    return (
        <div className='dark:bg-gray-700  bg-sky-100  rounded-lg overflow-hidden'>
            
            <div className='h-48 flex items-center justify-center bg-slate-200/50  dark:bg-gray-600 shadow-lg'>
                    {
                        product.imagen ? 
                            (<img src={product.imagen} alt={product.nombre} className='h-full w-full object-cover'/>) : 
                            ( <div className="text-gray-400 dark:text-gray-400">No disponible</div>)
                    }
            </div>

            <div className='p-4'>
                <h3 className="dark:text-whitetext-gray-700 font-medium">{product.nombre}</h3>
                <p className="text-gray-500 text-sm mt-1">{product.categoria}</p>
                <div className="flex justify-between items-center mt-4">
                    
                    <span className="text-indigo-400 font-medium">${product.precio}</span>
                    
                    <Button
                        style={'flex items-center bg-indigo-600 hover:bg-indigo-700 text-white px-3 py-1 rounded-lg transition-colors cursor-pointer'}
                        action={addToCart}
                        param={product}
                        name={
                            <>
                            <ShoppingCart size={12} className="text-amber-400 mr-1"/>
                            <span className='text-xs'>Añadir </span>
                            </>
                        }
                    />
                </div>
            </div>
            
        </div>
    )
}

export default ProductCard