import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { productos } from "../../productos";
import Layout from "../Layout/Layout";

const ItemDetail = () => {
    const { idProduct } = useParams();
    const [product, setProduct] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const searchProduct = productos.find(
    (prod) => prod.id === parseInt(idProduct)
    );

    useEffect(() => {
    setTimeout(() => {
        console.log(searchProduct);
        setProduct(searchProduct);
        setIsLoading(false);
    }, 1000);
    }, []);

    return (
    <Layout>
        {isLoading ? (
        <p>Cargando...</p>
        ) : (
        <>
            <h1>{productos.nombre}</h1><br/>
        </>
        )}
    </Layout>
    );
};

export default ItemDetail;