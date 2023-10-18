import React, { useState } from 'react';

const Example = () => {
    const [activo, setActivo] = useState(false);

    const handleClick = () => setActivo(!activo); 

    return (
        <button onClick={handleClick}>
            {activo ? 'Activo' : 'Inactivo'}
        </button>
    );
};

export default Example;