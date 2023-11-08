import React, { createContext ,useContext } from 'react'
import { CartCtx } from '../../context/CartContext'
import Layout from '../../components/Layout/Layout'

const Cart = () => {
    const { carro : cartProducts} = useContext(createContext())
    return (
    <Layout>
        {
            !carro.length
            ? <h1>No tienes productos en tu carrito </h1>
            : <div>
                {
                    cartProducts.map(productos => (
                        <h3>{productos.nombre}</h3>
                    ))
                }
            </div>
        }
    </Layout>
    )
}

export default Cart