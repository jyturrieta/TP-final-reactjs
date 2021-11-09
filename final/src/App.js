import { Fragment, useState } from 'react';
import Clima from './components/Clima';
import Buscador from './components/Buscador';

function App() {
  
  const[ciudad,setCiudad] = useState('');

  const consultarAPI = async (e) => {
      try{
        e.preventDefault()
        const {ciudad} = e.target.elements;
        const ciudadValue = ciudad.value;
        const api = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ciudadValue}&appid=fd04187e52fa926aaf01742aa2d56a2a&units=metric`);
        const datos = await api.json();
        setCiudad(datos)
        console.log(datos)
      } catch(error){
        console.log(error)
      }
  }
  return (
    <Fragment>
      <div className="container p-4">
        <div className="row">
          <div className="col-md-6 mx-auto">
            <Buscador
            consultarAPI={consultarAPI} />
            <Clima 
            ciudad={ciudad}/>
          </div>
        </div>
      </div>

    </Fragment>
  );
}

export default App;
