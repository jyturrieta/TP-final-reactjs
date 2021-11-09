import React, { Fragment } from 'react';

const Clima = ({ciudad}) => {
    return (  
        <div>
            <p> En {ciudad.name} hacen {ciudad.main.temp}</p>
        </div>


    );
}
 
export default Clima;