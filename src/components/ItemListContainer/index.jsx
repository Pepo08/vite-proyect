import "./style.css";
import { Button } from '@mui/material';

const ItemListContainer = ({router, handleConsole}) => {

    return (
    <div className="container">
        {router.map((ruta) => (
        <Button  className="boton-nav" onClick={() => console.log("s")} key={ruta}>{ruta}</Button>
        ))}
        <Button variant="outlined" onClick={()=> handleConsole()}> Consologiame </Button>
    </div>
    );
};

export default ItemListContainer;