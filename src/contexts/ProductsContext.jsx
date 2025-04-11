import { createContext, useContext } from "react";
import { useProducts } from "../hooks/useProducts";


const ProductsContext = createContext();


export const ProductsProvider = ({children}) =>{
    const products = useProducts();

    return (
        <ProductsContext.Provider value={products}>
            {children}
        </ProductsContext.Provider>
    )
}


export const useProductsContext = () => useContext (ProductsContext)