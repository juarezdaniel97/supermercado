import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const API_URL = import.meta.env.VITE_API_URL
//const API_URL = 'https://67f581bf913986b16fa4d131.mockapi.io/api/v1/'

const api = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json'
    }
});

export const useProducts = () => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        getProductsAPI();
    }, []);
    

    const getProductsAPI = async () => {
        try {
            setLoading(true);
            const response = await api.get('/products');
            setProducts(response.data);
            setError(null);
        } catch (err) {
            setError('Error al cargar los productos');
            console.error('Error fetching products:', err);
        } finally {
            setLoading(false);
        }
    };

    const getProduct = async (id) => {
        try {
            setLoading(true);
            const response = await api.get(`/products/${id}`);
            setError(null);
            return response.data;
        } catch (err) {
            setError(`Error al obtener el producto con ID ${id}`);
            console.error(`Error fetching product ${id}:`, err);
            return null;
        } finally {
            setLoading(false);
        }
    };

    const addProduct = async (product) => {
        try {
            setLoading(true);
            
            const response = await api.post('/products', product);
            
            setProducts([...products, response.data]);
            
            setError(null);

            toast.success('¡Producto Agregado!')

            return response.data;

        } catch (err) {
            setError('Error al añadir el producto');
            console.error('Error adding product:', err);
            return null;
        } finally {
            setLoading(false);
        }
    };

    const updateProduct = async (product, id) => {
        
        try {
            setLoading(true);

            const response = await api.put(`/products/${id}`, product);

            setProducts(products.map(p => p.id === product.id ? response.data : p));

            setError(null);
            
            toast.success('¡Producto Actualizado!')

            return response.data;
        } catch (err) {
            setError(`Error al actualizar el producto con ID ${product.id}`);
            console.error(`Error updating product ${product.id}:`, err);
            return null;
        } finally {
            setLoading(false);
        }
    };


    const deleteProduct = async (id) => {
        try {
            setLoading(true);
            await api.delete(`/products/${id}`);
            setProducts(products.filter(p => p.id !== id));
            setError(null);
            return true;
        } catch (err) {
            setError(`Error al eliminar el producto con ID ${id}`);
            console.error(`Error deleting product ${id}:`, err);
            return false;
        } finally {
            setLoading(false);
        }
    };

    return {
        products,
        loading,
        error,
        getProductsAPI,
        getProduct,
        addProduct,
        updateProduct,
        deleteProduct
    };

}


