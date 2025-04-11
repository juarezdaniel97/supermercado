import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

export const useCarrito = ()=>{

    const [carrito, setCarrito] = useState( ()=>{
            const carritoLocalStorage = JSON.parse(localStorage.getItem('carrito')) || []
            return carritoLocalStorage;
        })
    
    useEffect(() => {
        localStorage.setItem('carrito', JSON.stringify(carrito))
    }, [carrito])


    //Añadir un producto
    const addToCart = (product) => {

        setCarrito((prev) => {
            
            const existingProduct = prev.find((item) => item.id === product.id);

            if (existingProduct) {

                return prev.map((item) => item.id === product.id ? { ...item, cantidad: item.cantidad + 1 } : item);

            } else {

                return [...prev, { ...product, cantidad: 1 }];

            }
        });
        toast.success(`"${product.nombre}" agregado`);
    };

    //Decrementar Cantidad del Producto
    const decreaseQuantity = (id) => {
            setCarrito((prev) => prev.map((item) =>item.id === id ? { ...item, cantidad: item.cantidad - 1 } : item)
                .filter((item) => item.cantidad > 0)
            );
    };

    //Incrementar Cantidad del Producto
    const incrementQuantity = (id) => {
            setCarrito((prev) => prev.map((item) =>item.id === id ? { ...item, cantidad: item.cantidad + 1 } : item));
    };
    
    //Eliminar Producto
    const deleteProduct = (id) =>{
        setCarrito((prev) => prev.filter((item) => item.id !== id));
    }

    // Calcular el total del carrito
    const getTotalPrice = () => {
        return carrito.reduce((total, item) => total + item.precio * item.cantidad, 0).toFixed(2);
    };

    //Cantidad de Productos 
    const getCountPrducts = () =>{
        return carrito.reduce((contador, item) => contador + item.cantidad, 0)
    }

    //Eliminar carrito
    const deleteCard = () =>{
        setCarrito([]);
        toast.success("¡Gracias por su compra!");
    }

    return {
        carrito, 
        addToCart,
        decreaseQuantity,
        incrementQuantity,
        deleteProduct,
        getTotalPrice,
        getCountPrducts,
        deleteCard
    }
}