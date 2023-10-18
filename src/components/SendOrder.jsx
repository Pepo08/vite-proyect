import { colletion, Firebase } from "firebase/firestore";

const Cart = () => {
    const order = {
        comprador: {nombre: "Agustin", celular: 1256125, email: "holaj2145@gmail.com"},
        Productos: {producto: "ropa de hombre", precio: 862},
        total:862
    }
    const db = getFirestore();
    const ordesColletion = colletion(db, "orders")
}

export default Cart;