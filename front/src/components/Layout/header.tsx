"use client";
import React, {useEffect, useState} from "react";
import Image from "next/image";
import Link from "next/link";
import "./layout.scss";
import NavLayout from "./nav";
import {componentsPages} from "@/app/layout";
import NavigationHorizontal from "@componentes/NavHorizontal/NavHorizontal";
import Divisor from "../Documentation/Divisor";

const navItems = [
  { text: "Inicio", path: "/getting-started/introduction" },
  { text: "Componentes", path: "/components" }
];

const HeaderLayout = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const closeDrawer = () => {
    setDrawerOpen(false);
  };

  useEffect(() => {
    // Agregar un manejador de eventos para cerrar el drawer al hacer clic fuera de él
    const handleOutsideClick = (event : any) => {
      if (drawerOpen && !event.target.closest(".drawer")) {
        closeDrawer();
      }
    };

    // Suscribir el manejador de eventos al montar el componente
    document.addEventListener("click", handleOutsideClick);

    // Limpiar el manejador de eventos al desmontar el componente
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [drawerOpen]);

  return (
    <>
      <header className="navbar navbar-light navbar-expand-lg" role="banner">
        <a href="#main" className="skip-to-main-content-link">
          Ir al contenido principal
        </a>
        <div className="container header-container">
          <Link href="/" className="navbar-brand" prefetch={false}>
            <Image
              className="header-logo"
              src="https://gcba.github.io/Obelisco/header/logotipo_ba.svg"
              alt="Gobierno de la Ciudad de Buenos Aires - Inicio"
              width={76}
              height={41}
            />
            <Image
              className="react-logo"
              src="/react-logo.svg"
              width={41}
              height={41}
              alt="Logo React obelisco"
            />
          </Link>
          <button
            className="navbar-toggler drawer-mobile"
            onClick={toggleDrawer}
            type="button"
          ></button>
          {/* Drawer */}
          <div className={`drawer ${drawerOpen ? "open" : ""}`}  onClick={closeDrawer}>
            <div className="px-4 pb-5">

              <h3 className="navbar-sections-title">Secciones</h3>

              <Divisor />

              <NavigationHorizontal items={navItems} />

              <h3 className="navbar-sections-title mt-4">Componentes</h3>

              <Divisor />

              <NavLayout items={componentsPages} />
            </div>
          </div>
          {/*Desktop */}
          <div className="collapse navbar-collapse" id="navbarContent">
            <div className="navbar-content">
              <div className="navbar-sections w-100 m-0">
                <nav>
                  <h3 className="navbar-sections-title">Secciones</h3>
                  <NavigationHorizontal items={navItems} />
                </nav>
              </div>
            </div>
          </div>
        </div>
        <div className="header-backdrop"></div>
      </header>
    </>
  );
};

export default HeaderLayout;
