import React from 'react'
import { useProductsContext } from '../../contexts/ProductsContext'
import ProductCard from '../ui/ProductCard';

const Body = () => {

    const {products} = useProductsContext()

    // console.log('products -->', products);
    
    return (
            <main className="container mx-auto px-6 py-8 space-x-2">
            
                <h1 className="text-3xl font-bold dark:text-white text-gray-800 mb-8 text-center">Productos destacados</h1>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {products.map(product => (
                        <ProductCard
                            key={product.id}
                            product={product}
                        />
                    ))}
                </div>
            </main>
    )
}

export default Body