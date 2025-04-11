import { useState, useEffect } from 'react';

function ProductForm({ product, onSubmit, onCancel, isAdding }) {
    const [formData, setFormData] = useState({
        id: product.id || '',
        name: product.name || '',
        category: product.category || '',
        price: product.price || '',
        stock: product.stock || '',
        image: product.image || '/api/placeholder/200/200'
    });

    useEffect(() => {
        setFormData({
        id: product.id || '',
        name: product.name || '',
        category: product.category || '',
        price: product.price || '',
        stock: product.stock || '',
        image: product.image || '/api/placeholder/200/200'
        });
    }, [product]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
        ...formData,
        [name]: name === 'price' || name === 'stock' ? parseFloat(value) : value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
        onCancel();
    };

    //{isAdding ? 'Agregar Nuevo Producto' : 'Editar Producto'}

    return (
        
        <div className="bg-white shadow-md rounded-lg p-6 max-w-4xl mx-auto">
            <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-20">
                    <div>
                    <label className="block text-gray-700 mb-2" htmlFor="name">
                        Nombre
                    </label>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded"
                        required
                    />
                    </div>
                    <div>
                    <label className="block text-gray-700 mb-2" htmlFor="category">
                        Categoría
                    </label>
                    <select
                        id="category"
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded"
                        required
                    >
                        <option value="">Seleccionar categoría</option>
                        <option value="Lácteos">Lácteos</option>
                        <option value="Panadería">Panadería</option>
                        <option value="Frutas">Frutas</option>
                        <option value="Verduras">Verduras</option>
                        <option value="Carnes">Carnes</option>
                        <option value="Abarrotes">Abarrotes</option>
                        <option value="Bebidas">Bebidas</option>
                        <option value="Limpieza">Limpieza</option>
                    </select>
                    </div>
                    <div>
                    <label className="block text-gray-700 mb-2" htmlFor="price">
                        Precio
                    </label>
                    <input
                        id="price"
                        name="price"
                        type="number"
                        step="0.01"
                        min="0"
                        value={formData.price}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded"
                        required
                    />
                    </div>
                    <div>
                    <label className="block text-gray-700 mb-2" htmlFor="stock">
                        Stock
                    </label>
                    <input
                        id="stock"
                        name="stock"
                        type="number"
                        min="0"
                        value={formData.stock}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded"
                        required
                    />
                    </div>
                </div>
                <div className="mt-4 flex justify-end">
                    <button
                    type="button"
                    onClick={onCancel}
                    className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded mr-2"
                    >
                    Cancelar
                    </button>
                    <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
                    >
                    {isAdding ? 'Agregar' : 'Actualizar'}
                    </button>
                </div>
            </form>
        </div>
    );
}

export default ProductForm;