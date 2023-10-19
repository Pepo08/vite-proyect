import {createBrowserRouter , RouterProvider} from "react-router-dom"
import Home from "../pages/Home"
import ItemDetailContainer from "../pages/ItemDetailContainer"
import ItemListContainer from "../components/ItemListContainer"


const Routes = createBrowserRouter ([
    {
        path:"/",
        element:<Home/>
    },
    {
        path:"/producto:idProducto",
        element:<ItemDetailContainer/>
    },
    {
        path:"/cheackout",
        element:<Checkout/>
    }

])

const Navegacion = () =>{
    return(
        <RouterProvider router={Routes}/>
    );
}

export default Navegacion;