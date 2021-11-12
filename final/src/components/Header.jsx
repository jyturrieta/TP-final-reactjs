import React from "react";
import { Fragment } from "react";
const Header = () => {
  return (
    <Fragment>
      <header className="h-4">
        <nav class="navbar navbar-light bg-light">
          <a class="navbar-brand" href="#">
            <img
              src="/docs/4.1/assets/brand/bootstrap-solid.svg"
              width="30"
              height="30"
              alt=""
            />
          </a>
        </nav>
      </header>
    </Fragment>
  );
};

export default Header;
