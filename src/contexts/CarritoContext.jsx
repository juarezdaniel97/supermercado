import { createContext, useContext } from "react";
import { useCarrito } from '../hooks/useCarrito';

const CarritoContext = createContext();


export function CarritoProvider({children}) {
    const carritoValue = useCarrito();

    return(
        <CarritoContext.Provider value={carritoValue}>
            {children}
        </CarritoContext.Provider>
    )
}

export function useCarritoContext() {
    const context = useContext(CarritoContext);

    if (!context) {
        throw new Error("useCarritoContext, debe ser utilizado dentro de CarritoProvider");
    }

    return context
}