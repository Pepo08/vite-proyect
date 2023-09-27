import CartWidget from "../CartWidget/CartWidget";
import ItemListContainer from "../ItemListContainer";
import "./styles.css";

const Navbar = () => {

    const navegacion = ["Home", "Hombre", "Joyeria", "Electronico", "Mujer"]
    const handleConsole = () => console.log("Aca estoy")

    return (
    <div className="navbar">
        <ItemListContainer router={navegacion} handleConsole={handleConsole}/>
        <CartWidget/>
    </div>
    );
};

export default Navbar;