import "./App.css";
import Navegacion from "./routes/Navegacion";



function App() {
//    const requestJsonPlaceHolder = () => fetch("")
//    useEffect(() =>{
//        requestJsonPlaceHolder()
//        .then(res => res.json())
//        .then(res =>{
//            setProductos(res);
//        })
//    })
    return (
        <main>
            <Navegacion/>
        </main>
    );
}

export default App;