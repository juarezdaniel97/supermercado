import React from 'react'
import ButtonAdmin from '../ButtonAdmin'
import { FileText } from 'lucide-react'

const ButtonDetails = ({action}) => {
    return (
        <ButtonAdmin
            variant="details"
            action={action}
            name=""
            title='Ver detalles'
            icon={<FileText size={25} />}
        />
    )
}

export default ButtonDetails