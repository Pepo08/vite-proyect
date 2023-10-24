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
            {cargando && 'cargando...'}
            {!cargando && productos.map(prod => (
                <Item id={prod.id} title={prod.title} price={prod.price} description={prod.description} image={prod.image}/>
            ))}
        </ItemList>
    </Layout>
    );
};

export default Home;