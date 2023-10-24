import { createContext, useState } from "react"

export const CartCtx= createContext()

const CartContext = ({children}) => {
    const [listProducts, setListProducts] = useState([])
    const [cart, setCart] = useState([])

    const addToCart = (idProduct) => {
        const findProduct = listProducts.find(product => product.id === idProduct)
        if(cart.find(prod => prod.id === idProduct)){
            const updatedCart = cart.map(prod =>
                prod.id === idProduct
                ? { ...prod, quantity: prod.quantity < prod.stock ? prod.quantity + 1 : prod.quantity }
                : prod
            );
            setCart(updatedCart);
        }
        setCart([...cart, {...findProduct, quantity: 1}])
    }
    return (
        <CartCtx.Provider value={{listProducts, setListProducts, cart, setCart, addToCart}}>
            {children}
        </CartCtx.Provider>
    )
}

export default CartContext