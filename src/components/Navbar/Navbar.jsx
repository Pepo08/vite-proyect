import "./styles.css"
import ItemList from "../ItemListContainer/ItemList";
import CartWidge from "../CartWidget/CartWidge"

const Navbar = () => {
    return(
        <main className="navbar">
            <ItemList/>
            <CartWidge/>
        </main>
    );
}

export default Navbar;