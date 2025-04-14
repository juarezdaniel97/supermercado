import { FileText } from 'lucide-react'
import React from 'react'
import ButtonAdmin from '../ButtonAdmin'

const SaveButton = ({editing = false, className=""}) => {
    return (
        <ButtonAdmin
            variant="primary"
            type="submit"
            name={editing ? "Actualizar Producto" : "Guardar Producto"}
            icon={<FileText size={18} />}
            iconPosition="right"
            className={className}
        />
    )
}

export default SaveButton