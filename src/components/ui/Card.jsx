import React from 'react'
import { useCarritoContext } from '../../contexts/CarritoContext';
import { X, ShoppingBag, Minus, Plus } from 'lucide-react';
import Button from '../shared/Button';

const Card = () => {
    const { carrito, decreaseQuantity, incrementQuantity, deleteProduct, getTotalPrice, deleteCard } = useCarritoContext();

    if (carrito.length === 0) {
        return (
            <div className="w-full bg-white dark:bg-gray-600 rounded-lg shadow-lg p-4">
                <div className="flex justify-between items-center mb-4">
                    <h3 className="text-gray-800 dark:text-white font-medium">Tu carrito</h3>
                </div>
                <div className="flex flex-col items-center py-6 text-center">
                    <ShoppingBag className="text-gray-400 dark:text-gray-900 mb-2" size={40} />
                    <p className="text-gray-400 dark:text-gray-400">Tu carrito está vacío</p>
                </div>
            </div>
        );
    }

    return (
        <div className="w-full bg-white dark:bg-gray-600 rounded-lg shadow-lg p-4 max-h-[85vh] md:max-h-80 overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
                <h3 className="text-gray-800 dark:text-white font-medium">Tu carrito</h3>
            </div>
            
            <div className="space-y-3">
                {carrito.map(item => (

                    <div key={item.id} className="flex items-center space-x-3 bg-slate-100 dark:bg-gray-800/50 p-2 rounded-lg">
                        
                        {/* Header */}
                        <div className="h-14 w-14 bg-slate-200 dark:bg-gray-600 rounded flex items-center justify-center overflow-hidden flex-shrink-0">
                            {item.imagen ? (
                                <img src={item.imagen} alt={item.nombre} className="h-12 w-12 object-cover" />
                            ) : (
                                <div className="text-xs text-gray-500 dark:text-gray-400 text-center">No image</div>
                            )}
                        </div>

                        {/* Body */}
                        <div className="flex-1 min-w-0">
                            
                            <h4 className="text-sm text-gray-800 dark:text-white truncate">{item.nombre}</h4>
                            
                            <div className="flex justify-between items-center mt-1">
                                
                                <p className="text-sm text-indigo-600 dark:text-indigo-400">${item.precio}</p>
                                
                                <div className="flex items-center">
                                    <Button
                                        style={'w-6 h-6 flex items-center justify-center bg-slate-200 hover:bg-slate-300 dark:bg-gray-700 dark:hover:bg-gray-500 text-gray-800 dark:text-white rounded transition-colors'}
                                        action={decreaseQuantity}
                                        param={item.id}
                                        name={<Minus size={10}/>}
                                    />
                                    <span className="text-sm text-gray-800 dark:text-white min-w-[1rem] text-center">{item.cantidad}</span>

                                    <Button
                                        style={'w-6 h-6 flex items-center justify-center bg-slate-200 hover:bg-slate-300 dark:bg-gray-700 dark:hover:bg-gray-500 text-gray-800 dark:text-white rounded transition-colors'}
                                        action={incrementQuantity}
                                        param={item.id}
                                        name={<Plus size={10}/>}
                                    />
                                </div>
                            </div>

                        </div>

                        <Button
                            style={'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white transition-colors'}
                            action={deleteProduct}
                            param={item.id}
                            name={<X size={16} />}
                        />
                    </div>
                ))}
            </div>
            
            {/* Footer */}
            <div className="mt-4 pt-3 border-t border-slate-200 dark:border-gray-700">
                <div className="flex justify-between mb-4">
                    <span className="text-gray-600 dark:text-gray-300">Total:</span>
                    <span className="text-gray-800 dark:text-white font-medium">${getTotalPrice()}</span>
                </div>
                
                <Button
                style={'w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg transition-colors'}
                action={deleteCard}
                name={'Finalizar Compra'}
                />
            </div>
        </div>
    );
}

export default Card;