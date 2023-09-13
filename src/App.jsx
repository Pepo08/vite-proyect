import { useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar.jsx";



function App() {

    const requestJsonPlaceHolder = () => fetch("")

    useEffect(() =>{
        requestJsonPlaceHolder()
        .then(res => res.json())
        .then(res =>{
            setProductos(res);
        })
    })
    return (
        <main>
            <Navbar/>
        </main>
    );
}

export default App;