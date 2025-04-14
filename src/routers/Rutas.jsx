
import { Routes,  Route} from "react-router-dom";
import Home from '../pages/Home'
import Admin from "../pages/Admin";
import Listado from "../pages/Listado";
import FormularioProducto from "../pages/FormularioProducto";
import ProductDetail from "../pages/ProductDetail";
import Perfil from "../pages/Perfil";

const Rutas = () => {

    return (
        <Routes>
            <Route path="/" element={<Home/>}/>

            <Route path="/admin" element={<Admin/>} >
                <Route path="products/list" element={<Listado/>}/>
                <Route path="products/create" element={<FormularioProducto/>}/>
                <Route path="products/:id/edit" element={<FormularioProducto/>}/>
                <Route path="products/:id/details" element={<ProductDetail/>}/>
                <Route path="profile" element={<Perfil/>}/>
                <Route path="products/:id" element={<>Eliminado</>}/>
            </Route>

            <Route path="*" element={<><p>Página no encontrada</p></>}/>
        </Routes>
    )
}

export default Rutas
