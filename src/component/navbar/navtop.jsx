import React from "react";

const NavTop = ({ sticky }) => {
  return (
    <nav
      className={
        sticky
          ? "notshow"
          : "navbar navbar-expand-lg bg-dark navbar-light d-none d-lg-block"
      }
    >
      <div className="container text-light">
        <div className="w-100 d-flex justify-content-between">
          <div>
            <i className="fa fa-envelope mx-2" />
            <a
              className="navbar-sm-brand text-light text-decoration-none"
              href=""
            >
              info@amirxonrustamov207
            </a>
            <i className="fa fa-phone mx-2" />
            <a
              className="navbar-sm-brand text-light text-decoration-none"
              href=""
            >
              +9980000000
            </a>
          </div>
          <div className="mx-5">
            <a className="text-white px-2" href="https://github.com/amirrr01">
              <i className="fab fa-github" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavTop;
