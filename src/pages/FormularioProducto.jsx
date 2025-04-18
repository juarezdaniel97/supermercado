import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useProductsContext } from '../contexts/ProductsContext'
import { useNavigate, useParams } from 'react-router-dom'
import ButtonBack from '../components/shared/admin/ButtonBack'
import SaveButton from '../components/shared/admin/SaveButton'

const FormularioProducto = () => {
    const { register, handleSubmit, formState: { errors }, setValue } = useForm()
    
    const {addProduct, updateProduct, getProduct} = useProductsContext();
    const navigate = useNavigate()

    const {id} = useParams();


    useEffect(() => {
        async function handleUpdate() {
            
            if(id){

                const product = await getProduct(id);
                
                if (product) {
                    setValue('nombre', product.nombre)
                    setValue('categoria', product.categoria)
                    setValue('precio', product.precio)
                    setValue('stock', product.stock)
                    setValue('descripcion', product.descripcion)
                    setValue('imagen', product.imagen)
                }
            }
        }
        handleUpdate()

    }, [id, setValue])
    

    const onSubmit = (data) => {
        if (id) {
            updateProduct(data, id)
        }else{
            addProduct(data)
        }
        navigate(-1)
    }

    return (
        <div className='mt-15 flex justify-center items-center mb-15'>
            <form onSubmit={handleSubmit(onSubmit)} className="bg-white shadow-md rounded-xl p-6 w-full max-w-2xl mx-auto space-y-6">
    
                <h2 className="text-2xl font-semibold text-gray-800 text-center">{ id ? 'Modificar Producto' : 'Agregar Producto'}</h2>

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
                        <label htmlFor="descripcion" className="block text-sm font-medium text-gray-700">
                            Descripción
                        </label>
                        <input
                            {...register('descripcion')}
                            type="text"
                            id="descripcion"
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 text-black"
                        />
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

                <div className="flex justify-center gap-4">

                    <ButtonBack
                        action={() => navigate(-1)}
                    />

                    <SaveButton
                        editing={id}
                    />

                </div>
            </form>
        </div>
    )
}

export default FormularioProducto