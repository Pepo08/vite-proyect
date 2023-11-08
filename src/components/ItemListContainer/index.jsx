import "./style.css";
import { useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import { getProducts, getProductByCategory } from "../../asyncMock";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = () => {
    const [prodcuts, setProducts] = useState([])
    const { categoryId } = useParams()

    useEffect(() =>{
        const asyncFunc = categoryId ? getProductByCategory : getProducts

        asyncFunc(categoryId)
        .then((response) =>{
            setProducts(response)
        })
        .catch(error =>{
            console.log(error)
        })
    }, [categoryId])
    return (
    <div className="container">
        <ItemList productos = {prodcuts}/>
    </div>
    );
};

export default ItemListContainer;