import React, { Fragment } from 'react';

const Clima = ({ciudad, main, clima}) => {

    const linkIcono = `https://openweathermap.org/img/wn/${clima.icon}.png`
    
    
    return (
        <Fragment>
            <div className="container h-100 d-inline-block">
                <div className="">
                    <p className="color-warning">  {ciudad.name}  {Math.round(main.temp)}°c {clima.description} <img src={linkIcono} alt="" /> </p>
                </div>
            </div>
        </Fragment>

    );
}

 
export default Clima;