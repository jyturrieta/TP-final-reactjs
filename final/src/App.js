import { Fragment, useEffect, useState } from 'react';
import Clima from './components/Clima';
import Buscador from './components/Buscador';
import './index.css';
import Header from './components/Header'
import Footer from './components/Footer';



function App() {
  
  const[ciudad,setCiudad] = useState([]);
  const[main, setMain] = useState([]);
  const[clima, setClima] = useState([]);
  const[fondo, setFondo] = useState([]);

  const consultarAPI = async (e) => {
      try{
        e.preventDefault()
        const {ciudad} = e.target.elements;
        const ciudadValue = ciudad.value;
        const api = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ciudadValue}&appid=fd04187e52fa926aaf01742aa2d56a2a&units=metric&lang=es`);
        const datos = await api.json();
        setCiudad(datos)
        setMain(datos.main)
        setClima(datos.weather[0])
        
        console.log(datos)
      } catch(error){
        alert("Ingrese una ciudad valida")
        console.log(error)
      }
  }

  

  const despejadodia = clima.icon === "01d" || clima.icon === "02d"
  const despejadonoche = clima.icon === "01n" || clima.icon ==="02n"
  const nubladodia = clima.icon === "03d" || clima.icon ==="04d"
  const nubladonoche = clima.icon === "03n" || clima.icon ==="04n"
  const lluviadia = clima.icon === "09d" ||clima.icon === "10d" || clima.icon === "11d"
  const lluvianoche = clima.icon === "09n" || clima.icon ==="10n" || clima.icon === "11n"
  const niebladia = clima.icon === "50d" 
  const nieblanoche = clima.icon === "50n"
  const nieve = clima.icon === "13d" || clima.icon ==="13n"
  return (
    
      <Fragment >
           <div style={{ height: "1080px"}} className={(despejadodia)? 'fondo soleadodia' : (despejadonoche)? 'fondo soleadonoche' 
           : (nubladodia)? 'fondo nubladodia' : (nubladonoche)? 'fondo nubladonoche' : (lluviadia)? 'fondo lluviadia' : (lluvianoche)? 
          'fondo lluvianoche' : (niebladia)? 'fondo niebladia' : (nieblanoche)? 'fondo nieblanoche' : 'fondo nieve'}>
              <Header />
              <div className="d-flex justify-content-center"><Buscador
              consultarAPI={consultarAPI} /></div>
              
              <div className="bg-warning d-flex "><Clima 
              ciudad={ciudad}
              main={main}
              clima={clima}/></div>
              
          
            </div>
            <Footer />
      </Fragment>

   
  );
}

export default App;
