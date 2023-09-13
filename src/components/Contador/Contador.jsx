import { useState } from "react";
import "./Contador.css"

const Contador = () => {

const [numero, setNumero] = useState(1);
const handCount = () => setNumero(numero + 1);

return (
    <div>
        {numero}
        <hr />
        <button onClick={handCount}>Sumar</button>
    </div>
);
};

export default Contador;