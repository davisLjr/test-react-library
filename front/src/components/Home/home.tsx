// import Image from "next/image";
import Link from "next/link";
import "./home.scss";
import React from "react";
import Animation from "../Animation/animation";

const HomeOne = () => (
  <Animation>
    <div className="box-home container">
      <div className="content-hero">
        <div className="content-title">
          {/* <h1>
            Crea aplicaciones React accesibles <strong>con velocidad</strong>
          </h1> */}
          <h1>
            Crea aplicaciones React <strong>con velocidad</strong>
          </h1>
          <p className="lead">
            Descubre Obelisco, la librería de componentes para React que impulsa
            la construcción rápida y elegante de interfaces. Simplifica el
            desarrollo con una amplia gama de componentes, acelerando tu proceso
            de creación de aplicaciones web impresionantes.
          </p>
        </div>
        <div className="content-buttom">
          <Link
            href="https://github.com/gcba/react-obelisco"
            className="btn btn-primary btn-lg btn-icon"
          >
            <i className="bx bxl-github"></i>
            Github
          </Link>
          <Link
            href="/getting-started"
            className="btn btn-outline-link btn-lg btn-icon"
          >
            Get Started
            <i className="bx bx-right-arrow-alt"></i>
          </Link>
        </div>
      </div>
    </div>
  </Animation>
);

export default HomeOne;
