import React from 'react'

const ProductCard = ({product}) => {
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-48 object-cover"
            />
            <div className="p-4">
                <h3 className="text-lg font-semibold">{product.nombre}</h3>
                <p className="text-gray-600 mb-2">Categoría: {product.categoria}</p>
                <div className="flex justify-between items-center">
                <span className="text-green-600 font-bold">${product.precio}</span>
                <span className="text-sm text-gray-500">Stock: {product.stock}</span>
                </div>
                <button className="mt-3 w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded">
                    Añadir al carrito
                </button>
            </div>
        </div>
    )
}

export default ProductCard