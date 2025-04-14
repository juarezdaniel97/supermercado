import React from 'react'
import ButtonAdmin from '../ButtonAdmin'
import { Plus } from 'lucide-react'

const ButtonAdd = ({action}) => {
    return (
        <ButtonAdmin
            variant="add"
            action={action}
            name="Agregar Producto"
            icon={<Plus size={18} />}
    />
    )
}

export default ButtonAdd