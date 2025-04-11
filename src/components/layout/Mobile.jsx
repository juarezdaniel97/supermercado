import React from 'react'

import MenuItem from '../shared/MenuItem';


const Mobile = ({menuItems}) => {


    return (
        <div className="md:hidden flex flex-col items-center space-y-4 mt-4 bg-white dark:bg-gray-900 dark:hover:bg-gray-800 p-4 rounded-lg shadow-lg">
                    
                    {
                        menuItems.map((item, index ) =>(
                            <MenuItem
                                key={index}
                                title={item.title}
                                href={item.href}
                                isNew={item.isNew}
                            />
                        ))
                    }
                </div>
    )
}

export default Mobile