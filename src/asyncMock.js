import { productos } from "./productos"

export const getProductById = (productId) =>{
    return new Promise((resolve) => {
        setTimeout(() =>{
            resolve(productos.find(prod => prod.id === productId))
        },750) 
    })
}

export const getProducts = () =>{
    return new Promise((resolve) =>{
        setTimeout(() =>{
                resolve(prodcuts)
            },750)
    })
}

export const  getProductByCategory = (productCategory) =>{
    return new Promise((resolve) => {
        setTimeout(() =>{
            resolve(productos.find(prod => prod.category === productCategory))
        },750) 
    })
}


