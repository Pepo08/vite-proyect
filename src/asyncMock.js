import { productos } from "./productos"

export const getProductById = (productId) =>{
    return new Promise((resolve) => {
        setTimeout(() =>{
            resolve(productos.find(prod => prod.id === productId))
        },750) 
    })
}

export const getProduct = () =>{
    return new Promise((resolve) =>{
        setTimeout(() =>{
                resolve(prodcuts)
            },750)
    })
}


