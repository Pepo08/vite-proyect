import { useContext } from "react";
import CartWidget from "../CartWidget/CartWidget";
import "./styles.css";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {

return (
    <nav className="navbar">
      <Link to="/">
        <h2 className="home">Home</h2>
      </Link>
      <div className="nav-categorys">
        <NavLink className="nav-links" to={"/category/mens-clothing"}>Ropa Hombre</NavLink>
        <NavLink className="nav-links"to={"/category/womens-clothing"}>Ropa Mujer</NavLink>
        <NavLink className="nav-links" to={"/category/electronics"}>Electronicos</NavLink>
        <NavLink className="nav-links" to={"/category/jewelery"}>Joyeria</NavLink>
      </div>
      <CartWidget/>
    </nav>
  );
};

export default Navbar;