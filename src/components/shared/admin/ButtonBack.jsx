import React from 'react'
import ButtonAdmin from '../ButtonAdmin'
import { ArrowLeft } from 'lucide-react'

const ButtonBack = ({action, className=""}) => {
    return (
        <ButtonAdmin
            variant="back"
            action={action}
            name="Volver"
            icon={<ArrowLeft size={18} />}
            iconPosition="left"
            className={className}
        />
    )
}

export default ButtonBack