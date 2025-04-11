import React from 'react'
import { useForm } from 'react-hook-form'
import { useProductsContext } from '../contexts/ProductsContext'

const Prueba = () => {
     const { register, handleSubmit, formState: { errors } } = useForm()
        
        const {addProduct} = useProductsContext()
    
        const onSubmit = (data) => {
            console.log('Form data submitted:', data)
            addProduct(data)
        }

    return (
        <div className='mt-10 flex justify-center items-center mb-10'>
             <form onSubmit={handleSubmit(onSubmit)} className="bg-white shadow-md rounded-xl p-6 w-full max-w-2xl mx-auto space-y-6">
        
        <h2 className="text-2xl font-semibold text-gray-800 text-center">Agregar Producto</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
                <label htmlFor='nombre' className="block text-sm font-medium text-gray-700">
                    Nombre
                </label>
                <input
                    {...register('nombre', { required: true })}
                    type="text"
                    id='nombre'
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 text-black"
                />
                {errors.nombre && <span className="text-red-500 text-sm">El campo nombre no puede estar vacio</span>}
            </div>

            <div>
                <label htmlFor="categoria" className="block text-sm font-medium text-gray-700">
                    Categoría
                </label>
                <input
                    {...register('categoria', { required: true })}
                    type="text"
                    id="categoria"
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 text-black"
                />
                {errors.categoria && <span className="text-red-500 text-sm">El campo categoria no puede estar vacio</span>}
            </div>

            <div>
                <label htmlFor="precio" className="block text-sm font-medium text-gray-700">
                    Precio
                </label>
                <input
                    {...register('precio', { required: true })}
                    type="number"
                    id="precio"
                    min="0"
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 text-black"
                />
                {errors.precio && <span className="text-red-500 text-sm">El campo precio no puede estar vacio</span>}
            </div>

            <div>
                <label htmlFor="stock" className="block text-sm font-medium text-gray-700">
                    Stock
                </label>
                <input
                    {...register('stock', { required: true })}
                    type="number"
                    id="stock"
                    min="0"
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 text-black"
                />
                {errors.stock && <span className="text-red-500 text-sm">El campo stock no puede estar vacio</span>}
            </div>

            <div className="sm:col-span-2">
                <label htmlFor="imagen" className="block text-sm font-medium text-gray-700">
                    URL de la imagen
                </label>
                <input
                    {...register('imagen')}
                    type="url"
                    id="imagen"
                    placeholder="https://..."
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 text-black"
                />
            </div>
        </div>

        <div className="flex justify-center">
            <button
                type="submit"
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-2 rounded-lg shadow-md transition duration-200"
            >
                Guardar Producto
            </button>
        </div>
    </form>
        </div>
    )
}

export default Prueba