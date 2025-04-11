import React from 'react'
import Button from './Button'
import { Moon, Sun } from 'lucide-react'
import { useThemeContext } from '../../contexts/ThemeContext'

const ThemeButton = () => {

    const {theme, toggleTheme} = useThemeContext();
    
    return (
        <Button
            style={'p-2 rounded-lg bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors'}
            action={toggleTheme}
            name={
                    theme === "dark" 
                    ? <Sun size={20} className="text-yellow-500" /> 
                    : <Moon size={20} className="text-blue-900" />
                }
        /> 
    )
}

export default ThemeButton