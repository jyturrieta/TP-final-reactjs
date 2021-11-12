import React from 'react';


const Buscador = props => {
    return ( 

        <div className="">
            <form onSubmit={props.consultarAPI}>
                <div className="d-flex justify-content-center flex-column ">
                    <input type="text" name="ciudad" placeholder="Ingrese una ciudad" className="rounded" >

                    </input>
                    <button className="btn btn-danger ">Buscar</button>
                </div>
                
            </form>
        </div>

     );
}
 
export default Buscador;