import React from 'react'

const Button = ({style, action, name, param = null}) => {
    return (
        <button
            className={style}
            onClick={
                ()=>{
                    if (param !== null) {
                        action(param)
                    }else{
                        action(prev => !prev)
                    }
                }
            }
        >
            {name}
        </button>
    )
}

export default Button