import "./App.css";
import Card from './components/Card'
import Contador from "./components/Contador";
import Navbar from "./components/Navbar/Navbar.jsx";

// App.jsx
// Componente es una Funcion que tambien su nombre inicia con Mayuscula
// Solamente podemos retornar una etiqueta html


function App(props) {
    console.log(props)
    return (
        <main>
            <Card title={"hollaaaaa"} />
            <Navbar/>
        </main>
    );
}

export default App;