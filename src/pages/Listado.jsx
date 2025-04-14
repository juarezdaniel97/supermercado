import React, { useEffect, useState } from 'react'
import { useProductsContext } from '../contexts/ProductsContext';
import { FileText, Trash2, Plus, Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import ButtonAdd from '../components/shared/admin/ButtonAdd';
import ButtonDetails from '../components/shared/admin/ButtonDetails';
import ButtonDelete from '../components/shared/admin/ButtonDelete';

const Listado = () => {

    const { products, deleteProduct, getProductsAPI } = useProductsContext();
    
    const navigate = useNavigate();

    const [busqueda, setBusqueda] = useState('');
    

    const productosFiltrados = products.filter(product => product.nombre.toLowerCase().includes(busqueda.toLowerCase()));
    

    const handleEliminar = (id) => {
            Swal.fire({
            title: '¿Estás seguro?',
            text: '¡No podrás revertir esto!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Sí, eliminarlo'
            }).then((result) => {
            if (result.isConfirmed) {
                deleteProduct(id);
                Swal.fire('¡Eliminado!', 'El producto ha sido eliminado.', 'success');
                navigate('/admin/products/list')
            }
            });
    };

    
    useEffect(() => {
        getProductsAPI();
    }, []);
    
    return (
        <div className="container mx-auto px-4 py-6 mb-10">
            <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4 mt-25">
                <h2 className="text-3xl font-semibold text-green-300">Listado de Productos</h2>
                
                <div className="relative w-full md:w-1/3">
                    <input
                        type="text"
                        placeholder="Buscar producto..."
                        value={busqueda}
                        onChange={(e) => setBusqueda(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 shadow-sm"
                        />
                        <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
                </div>
            </div>

            {/* Contenedor con altura fija y scroll */}
            <div className="relative rounded-xl shadow-lg bg-white h-96 overflow-auto">
                <table className="w-full table-fixed divide-y divide-gray-300">
                    <thead className="bg-gray-100 sticky top-0 z-10">
                        <tr>
                            <th className="px-6 py-3 text-left text-xl font-bold text-gray-600 uppercase tracking-wider w-1/4">Producto</th>
                            <th className="px-6 py-3 text-left text-xl font-bold text-gray-600 uppercase tracking-wider w-1/5">Categoría</th>
                            <th className="px-6 py-3 text-left text-xl font-bold text-gray-600 uppercase tracking-wider w-1/6">Precio</th>
                            <th className="px-6 py-3 text-left text-xl font-bold text-gray-600 uppercase tracking-wider w-1/6">Stock</th>
                            <th className="px-6 py-3 text-right text-xl font-bold text-gray-600 uppercase tracking-wider w-1/6">Acciones</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-100">
                        {
                            productosFiltrados.length === 0 ? (
                                <tr>
                                    <td colSpan="5" className="text-center py-6 text-gray-500">No se encontraron productos.</td>
                                </tr>
                                ) : (
                                    productosFiltrados.map((product) => (
                                        <tr key={product.id} className="hover:bg-gray-50 transition">
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="flex items-center">
                                                <img className="h-10 w-10 rounded object-cover shadow-sm" src={product.imagen} alt={product.nombre} />
                                                <div className="ml-4">
                                                    <p className="text-sm font-medium text-gray-900">{product.nombre}</p>
                                                </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 text-sm text-gray-700">{product.categoria}</td>
                                            <td className="px-6 py-4 text-sm text-gray-700">${product.precio}</td>
                                            <td className="px-6 py-4 text-sm text-gray-700">{product.stock}</td>
                                            <td className="px-6 py-4 text-right text-sm">
                                                <ButtonDetails
                                                    action={() => navigate(`../products/${product.id}/details`)}
                                                />
                                                
                                                <ButtonDelete
                                                    action={() => handleEliminar(product.id)}
                                                />
                                            </td>
                                        </tr>
                                    ))
                        )}
                    </tbody>
                </table>
            </div>

            <ButtonAdd
                action={() => navigate('../products/create')}
            />

        </div>
    )
}

export default Listado