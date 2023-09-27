import { Link } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import Item from '../../components/Item/Item'
import ItemList from "../../components/ItemList/ItemList";
import {productos} from "../../productos";
import { useEffect, useState } from "react";

const Home = () => {
    const [cargando, setCargando] = useState(true);
    const [producto, setProductos] = useState([]);

    useEffect(() => {
    setTimeout(() => {
        setProductos(producto);
        setCargando(false)
    }, 1500);
    }, []);

    return (
    <Layout>
        <ItemList>
        {
            cargando ? <p>Cargando...</p>
            : productos.map(prod => (
                <Item id={prod.id} nombre={prod.nombre} descripcion={prod.descripcion}/>
            ))
        }
        </ItemList>
    </Layout>
    );
};

export default Home;