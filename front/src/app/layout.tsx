"use client";

/* eslint-disable @next/next/no-page-custom-font */
import React from "react";
import {usePathname} from "next/navigation";
import "./globals.scss";
import Script from "next/script";
import HeaderLayout from "@/components/Layout/header";
import NavLayout from "@/components/Layout/nav";
import Footer from "@componentes/Footer";

export const componentsPages = [
  {text: "Accesos", url: "/components/access", id: 1},
  {text: "Alertas", url: "/components/alert", id: 2},
  {text: "Audio", url: "/components/audio", id: 3},
  {text: "Banner", url: "/components/banner", id: 4},
  {text: "Bloque de trámite", url: "/components/block", id: 5},
  {text: "Colapsable", url: "/components/collapse", id: 6},
  {text: "Migas de pan", url: "/components/breadcrumb", id: 7},
  {text: "Botón", url: "/components/button", id: 8},
  {text: "Footer", url: "/components/footer", id: 9},
  {text: "Galeria", url: "/components/gallery", id: 10},
  {text: "Spinner", url: "/components/spinner", id: 11},
  {text: "Navegacion vertical", url: "/components/navigationVertical", id: 12},
  {text: "Navegacion Horizontal", url: "/components/navigationHorizontal", id: 13},
];

export default function RootLayout({children}: {children: React.ReactNode}) {
  const pathname = usePathname();


  const gettingPages = [
    {text: "Introducción", url: "/getting-started/introduction", id: 1},
    {text: "Instalacción", url: "/getting-started/installation", id: 2},
    {text: "Importaciones", url: "/getting-started/imports", id: 3},
  ];

  return (
    <html lang="en">
      <head>
        <link href="https://gcba.github.io/Obelisco/obelisco.css"
        rel="stylesheet"/>
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,600;0,700;1,400&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;600;700&display=swap"
          rel="stylesheet"
        ></link>
        <link
          href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons+Round"
          rel="stylesheet"
        ></link>
      </head>

      <body>
        <HeaderLayout />

        <div className="layout">
          <main>
            <div className="box">
              {pathname.includes("/components") && (
                <div className="nav-left">
                  <div className="nav-left-box-title">
                    <h3>Componentes</h3>
                  </div>
                  <NavLayout items={componentsPages} />
                </div>
              )}
              {pathname.includes("/getting-started") && (
                <div className="nav-left">
                  <NavLayout items={gettingPages} />
                </div>
              )}

              <div className="content">{children}</div>
            </div>
          </main>
          <Footer />
        </div>

        <Script
          src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js"
          integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
          crossOrigin="anonymous"
          strategy="lazyOnload"
        ></Script>

        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-Fy6S3B9q64WdZWQUiU+q4/2Lc9npb8tCaSX9FK7E8HnRr0Jz8D6OP9dO5Vg3Q9ct"
          crossOrigin="anonymous"
          strategy="lazyOnload"
        ></Script>
      </body>
    </html>
  );
}
