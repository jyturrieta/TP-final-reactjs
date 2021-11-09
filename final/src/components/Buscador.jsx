import React from 'react';


const Buscador = props => {
    return ( 

        <div className="card card-body">
            <form onSubmit={props.consultarAPI}>
                <div className="form-group">
                    <input type="text" name="ciudad" placeholder="Ingrese una ciudad" className="form-control" autoFocus>

                    </input>
                </div>
                <button className="btn btn-info btn-block">Buscar</button>
            </form>
        </div>

     );
}
 
export default Buscador;