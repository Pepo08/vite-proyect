import {createBrowserRouter , RouterProvider} from "react-router-dom"
import Home from "../pages/Home"
import ItemDetailContainer from "../components/ItemDetailConteiner"
import ItemListContainer from "../components/ItemListContainer"
import Cart from "../pages/Cart/Cart"


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
    },
    {
        path:"/pages/cart/:cart",
        element:<Cart/>
    }
])

const Navegacion = () =>{
    return(
        <RouterProvider router={Routes}/>
    );
}

export default Navegacion;