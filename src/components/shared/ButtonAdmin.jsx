import React from 'react'

const ButtonAdmin = ({
    variant = "primary", // Variante de estilo: primary, secondary, outline, back
    action, 
    name,
    param = null,
    type = "button",
    icon = null, // Componente de icono opcional
    iconPosition = "left", // Posición del icono: left o right
    className = "", // Clases adicionales personalizadas
    title = "", 
    disabled = false
}) => {

    const styles = {
        primary: "bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-2 rounded-lg shadow-md",
        secondary: "bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-xl",
        outline: "border border-indigo-600 text-indigo-600 hover:bg-indigo-50 font-medium px-6 py-2 rounded-lg",
        back: "flex items-center px-4 py-2 rounded-xl bg-gray-200 hover:bg-gray-300 text-gray-800 transition",
        edit: "flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white transition",
        add: "fixed bottom-6 right-6  cursor-pointer flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded-full shadow-lg transition duration-200",
        details: "text-indigo-600 hover:text-indigo-800 mr-4 cursor-pointer",
        delete: "text-red-600 hover:text-red-800 cursor-pointer"
    }

    const variantStyle = styles[variant] || styles.primary;

    const handleClick = () => {

        if (param !== null) {
            action(param)
        } else {
            // Verifica si action es una función que espera un callback o una función simple
            if (typeof action === 'function' && action.toString().includes('prev')) {
                action(prev => !prev)
            } else {
                action()
            }
        }
    }


    return (
        <button
            className={`${variantStyle} ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'} transition ${className}`}
            onClick={disabled ? undefined : handleClick}
            type={type}
            disabled={disabled}
            title={title}
        >
            {/* Renderizado condicional de icono a la izquierda */}
            {icon && iconPosition === "left" && (
                <span className="mr-2 inline-flex items-center">{icon}</span>
            )}
            
            {name}
            
            {/* Renderizado condicional de icono a la derecha */}
            {icon && iconPosition === "right" && (
                <span className="ml-2 inline-flex items-center">{icon}</span>
            )}

        </button>
    )
}

export default ButtonAdmin