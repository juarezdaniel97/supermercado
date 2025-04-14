import React from 'react'
import { Link } from 'react-router-dom'

const MenuItem = ({title, href, isNew}) => {
    return (
        <div>
            <Link to={href} className='text-gray-700 dark:text-gray-300 hover:text-blue-400'>
                {title}
                {
                    isNew && 
                    (<span className='ml-2 px-2 py-1 text-xs bg-orange-500/20 text-orange-500 rounded-full'>New</span>)
                }
            </Link>
            {/* <a href={href}
                className='text-gray-700 dark:text-gray-300 hover:text-blue-400'
            >
                {title} 

                {
                    isNew && 
                    (<span className='ml-2 px-2 py-1 text-xs bg-orange-500/20 text-orange-500 rounded-full'>New</span>)
                }
            </a>*/}
        </div>
    )
}

export default MenuItem