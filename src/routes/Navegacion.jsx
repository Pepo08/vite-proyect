import {createBrowserRouter , RouterProvider} from "react-router-dom"
import Home from "../pages/Home"
import ItemDetailContainer from "../components/ItemDetailConteiner"
import ItemListContainer from "../components/ItemListContainer"


const Routes = createBrowserRouter ([
    {
        path:"/",
        element:<Home/>
    },
    {
        path:"/category/:categoryId",
        element:<ItemListContainer/>
    },
    {
        path:"/producto/:productoId",
        element:<ItemDetailContainer/>
    }

])

const Navegacion = () =>{
    return(
        <RouterProvider router={Routes}/>
    );
}

export default Navegacion;