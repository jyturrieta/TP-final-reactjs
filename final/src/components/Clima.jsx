import React, { Fragment } from "react";
import "../index.css"

const Clima = ({ ciudad, main, clima, sys}) => {
  const linkIcono = `https://openweathermap.org/img/wn/${clima.icon}@2x.png`;

  return (
    <Fragment>
        <div className="d-flex flex-column justify-content.between ">
            <div className=" d-flex justify-content-center flex-column climacuadro">
                <h2 className="text-white display-4 d-flex justify-content-center">{ciudad.name}, {sys.country}</h2>
                <h2 className="text-white display 3 d-flex justify-content-center align-items-center">{clima.description}<img src={linkIcono} alt="" /></h2>
                <h3 className="text-white display-1 d-flex justify-content-center temperatura">{Math.round(main.temp)}°c</h3>
                <h5 className="text-white display-6 d-flex justify-content-center"> Sensación Térmica: {Math.round(main.temp)}°c</h5>
                <h5 className="text-white display-6 d-flex justify-content-center"> Humedad:{main.humidity}%</h5>
                <h5 className="text-white display-6 d-flex justify-content-center"> Presión:{main.pressure}hPa</h5>
            </div>
        </div>
    </Fragment>
  );
};

export default Clima;
