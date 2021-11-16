import React, { Fragment } from 'react';



const Footer = () => {
    return (
        <Fragment>
        <footer class="bg-dark d-flex flex-wrap justify-content-between align-items-center p-2 ">
          <p class="col-md-4 mb-0 text-muted ">© Weather Report</p>
  
          <a
            href="/"
            class="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 px-5 me-md-auto link-dark text-decoration-none"
          >
            <svg class="bi me-2" width="40" height="32">
              <use xlinkhref="#bootstrap"></use>
            </svg>
          </a>
  
          <ul class="nav col-md-4 justify-content-end">
            <li class="nav-item">
              <a href="#" class="nav-link px-2 text-muted">
                Inicio
              </a>
            </li>
            <li class="nav-item">
              <a href="https://openweathermap.org/api" class="nav-link px-2 text-muted">
                API
              </a>
            </li>
            <li class="nav-item">
              <a href="https://github.com/jyturrieta/TP-final-reactjs" class="nav-link px-2  text-muted">
                GitHub
              </a>
            </li>
          </ul>
        </footer>
      </Fragment>

    );
}
 
export default Footer;