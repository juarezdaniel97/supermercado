import React from 'react'
import MenuItem from '../shared/MenuItem';

const Desktop = ({menuItems}) => {
    return (
        <div className='hidden md:flex items-center space-x-6'>

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

export default Desktop