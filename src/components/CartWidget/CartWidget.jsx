import { Badge } from '@mui/material'
import { useContext } from 'react'
import { CartCtx } from '../../context/CartContext'
import cart from './carrito-compras.png'
import "./styles.css"

const CartWidget = () => {

    return(
        <div className='cart'>
            <img src={cart} alt="" className='ftCart' />
            0
        </div>
    );
}

export default CartWidget;