import React, { useState } from 'react';
import { useProductsContext } from '../contexts/ProductsContext';
import { FileText, Trash2, Plus, Search } from 'lucide-react';

const Administrador = () => {
    const { products } = useProductsContext();
    const [busqueda, setBusqueda] = useState('');

    const productosFiltrados = products.filter(product =>
        product.nombre.toLowerCase().includes(busqueda.toLowerCase())
    );

    return (
        <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
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

            <div className="relative overflow-x-auto rounded-xl shadow-lg bg-white">
                <table className="min-w-full divide-y divide-gray-300">
                    <thead className="bg-gray-100">
                        <tr>
                        <th className="px-6 py-3 text-left text-xl font-bold text-gray-600 uppercase tracking-wider">Producto</th>
                        <th className="px-6 py-3 text-left text-xl font-bold text-gray-600 uppercase tracking-wider">Categoría</th>
                        <th className="px-6 py-3 text-left text-xl font-bold text-gray-600 uppercase tracking-wider">Precio</th>
                        <th className="px-6 py-3 text-left text-xl font-bold text-gray-600 uppercase tracking-wider">Stock</th>
                        <th className="px-6 py-3 text-right text-xl font-bold text-gray-600 uppercase tracking-wider">Acciones</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-100">
                        {productosFiltrados.length === 0 ? (
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
                                    <button
                                        onClick={() => {}}
                                        className="text-indigo-600 hover:text-indigo-800 transition duration-200 mr-4"
                                        title="Ver detalles"
                                    >
                                        <FileText size={18} />
                                    </button>
                                    <button
                                        onClick={() => {}}
                                        className="text-red-600 hover:text-red-800 transition duration-200"
                                        title="Eliminar producto"
                                    >
                                    <Trash2 size={18} />
                                    </button>
                                </td>
                            </tr>
                        ))
                        )}
                    </tbody>
                </table>
            </div>

            {/* FAB botón para agregar producto */}
            <button
                onClick={() => {}}
                className="fixed bottom-6 right-6 flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded-full shadow-lg transition duration-200"
            >
                <Plus size={18} />
                <span className="text-sm font-medium">Agregar Producto</span>
            </button>
        </div>
    );
};

export default Administrador;
