import React from 'react'

const Logo = () => {
    return (
        <div>
            <div className="flex items-center space-x-2">
                <div className="w-3 h-6 bg-gray-600 dark:bg-white rounded-sm" />
                    <div className="w-1 h-6 bg-indigo-600 rounded-sm" />
                    <span className="text-dark dark:text-white text-xl font-semibold">Store</span>
                </div>
        </div>
    )
}

export default Logo