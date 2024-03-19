import CodeCopy from "@/components/CodeBox";
import BoxTemplate from "@/components/Documentation/Box";
import Divisor from "@/components/Documentation/Divisor";
import Flex from "@/components/Documentation/Flex";
import HeadingTemplate from "@/components/Documentation/HeadingTemplate";
import MainDescription from "@/components/Documentation/MainDescription";
import SimpleText from "@/components/Documentation/SimpleText";
import React from "react";

const InstallationModule: React.FC = () => {
  // Contenido del módulo instalacion

  const code = `
  npm i @gcba/reactobelisco
  
`;

  return (
    <BoxTemplate>
      <Flex justifyMd="between">
        <div className="col-12 col-lg-8">
          <HeadingTemplate>
            <h1>Installation</h1>
          </HeadingTemplate>

          <MainDescription description="Explora esta sección para encontrar el comando de instalación de React-Obelisco utilizando NPM. Se recomienda utilizar versiones superiores a la 16 para asegurar la compatibilidad y obtener lo mejor de nuestra librería de componentes." />

          <Divisor />

          <HeadingTemplate>
            <h2>With NPM</h2>
          </HeadingTemplate>

          <SimpleText description="Haz clic en nuestro cuadro de código para copiar el comando y pégalo en tu consola. " />

          <CodeCopy code={code} />

          <SimpleText description="Así de sencillo es instalarlo y comenzar a aprovechar todas las funcionalidades de React-Obelisco." />
        </div>
      </Flex>
    </BoxTemplate>
  );
};

export default InstallationModule;
