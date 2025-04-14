import React, { useEffect, useState } from 'react'
import { ArrowLeft, Edit3, ShoppingCart } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';
import { useProductsContext } from '../contexts/ProductsContext';
import ButtonAdmin from '../components/shared/ButtonAdmin';
import ButtonEdit from '../components/shared/admin/ButtonEdit';
import ButtonBack from '../components/shared/admin/ButtonBack';

const ProductDetail = () => {
    const [product, setProduct] = useState(0)
    const {id} = useParams();

    const {getProduct, products} = useProductsContext();

    const navigate = useNavigate()

    useEffect(() => {
        async function obtenerProductos() {
            const product = await getProduct(id)
            setProduct(product);
        }
        
        obtenerProductos()
    }, [products])
    
    return (
        <div className="max-w-4xl mx-auto mt-15 mb-20 p-6 bg-white rounded-2xl shadow-xl flex flex-col md:flex-row gap-6">
            <div className="md:w-1/2">
                <img
                    src={product.imagen}
                    alt={product.nombre}
                    className="rounded-xl object-cover w-full h-64 md:h-80 shadow-md"
                />
            </div>

            <div className="md:w-1/2 space-y-4">
                <h2 className="text-3xl font-bold text-gray-800">{product.nombre}</h2>
                <p className="text-gray-500 text-sm">Categoría: <span className="font-medium">{product.categoria}</span></p>
                <p className="text-gray-700">{product.descripcion}</p>

                <div className='flex justify-between pt-4'>
                    <div className="text-2xl font-semibold text-green-600">${product.precio}</div>
                    <div className="text-xl font-semibold text-gray-700"> Stock: {product.stock}</div>
                </div>

                <div className="flex gap-4 pt-4">

                    <ButtonBack
                        action={() => navigate(-1)}
                    />
                    <ButtonEdit
                        action={() => navigate(`../products/${product.id}/edit`)}
                    />
                </div>
            </div>
        </div>
    )
}

export default ProductDetail