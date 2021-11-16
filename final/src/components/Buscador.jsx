import React from 'react';
import "../index.css"


const Buscador = props => {
    return ( 

        <div>
            <form onSubmit={props.consultarAPI}>
                <div className="d-flex justify-content-center flex-column p-2 m-2 ">
                    <input type="text" name="ciudad" placeholder="Ingrese una ciudad" className="rounded p-3 buscador" >
                    </input>
                    <button className="btn  ">Buscar</button>
                </div>
            </form>
        </div>

     );
}
 
export default Buscador;