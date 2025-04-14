import React from 'react'
import ButtonAdmin from '../ButtonAdmin'
import { Edit3 } from 'lucide-react'

const ButtonEdit = ({action, className=""}) => {
    return (
        <ButtonAdmin
            variant="edit"
            action={action}
            name="Editar"
            icon={<Edit3 size={18} />}
            iconPosition="left"
            className={className}
        />
    )
}

export default ButtonEdit