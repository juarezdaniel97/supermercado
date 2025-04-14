import React from 'react'
import ButtonAdmin from '../ButtonAdmin'
import { Trash2 } from 'lucide-react'

const ButtonDelete = ({action}) => {
    return (
        <ButtonAdmin
            variant="delete"
            action={action}
            name=""
            title='Eliminar Producto'
            icon={<Trash2 size={25} />}
        />
    )
}

export default ButtonDelete